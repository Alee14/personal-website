<script>
    import { onMount } from 'svelte';
    import Loader from "./Loader.svelte";
    export let username;
    export let isOrganization;
    let repos = [];
    let error = null;
    let isLoading = true;
    let currentPage = 1;
    const reposPerPage = 10;

    const fetchRepos = async (page = 1, allRepos = []) => {
        const baseUrl = 'https://api.github.com';
        const url = isOrganization
            ? `${baseUrl}/orgs/${username}/repos?page=${page}&per_page=100`
            : `${baseUrl}/users/${username}/repos?page=${page}&per_page=100`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                if (Array.isArray(data)) {
                    allRepos = allRepos.concat(data.filter(repo => !repo.fork));
                    if (data.length === 100) {
                        return fetchRepos(page + 1, allRepos);
                    }
                } else {
                    console.error('Unexpected data format:', data);
                    error = 'Unexpected data format';
                    repos = [];
                }
            } else {
                console.error('API error:', data);
                error = data.message;
                repos = [];
            }
        } catch (err) {
            console.error('Failed to fetch projects:', err);
            error = err.message;
            repos = [];
        }

        isLoading = false;
        return allRepos;
    };

    onMount(() => {
        fetchRepos().then(r => repos = r);
    });

    const nextPage = () => currentPage++;
    const prevPage = () => currentPage--;
</script>

<div>
    {#if isLoading}
        <Loader />
    {:else}
        {#if error}
            <div class="error">{error}</div>
        {:else}
            <div class="grid">
                {#each repos.slice((currentPage - 1) * reposPerPage, currentPage * reposPerPage) as repo (repo.id)}
                    <article class="card">
                        <h1>{repo.name}</h1>
                        <p>{repo.description || 'No description provided'}</p>
                        <div class="row">
                            <a href={repo.html_url} target="_blank">Repository</a>
                        </div>
                    </article>
                {/each}
            </div>
            {#if currentPage > 1}
                <button class="button margin" on:click={prevPage}>Previous</button>
            {/if}
            {#if currentPage < Math.ceil(repos.length / reposPerPage)}
                <button class="button margin" on:click={nextPage}>Next</button>
            {/if}
        {/if}
    {/if}
</div>
