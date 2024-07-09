<script>
    import { onMount } from 'svelte';
    import Loader from "./Loader.svelte";
    import { formatDate } from "../util";
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

    // Sort functions
    function sortAlphabetically(repos) {
        return repos.sort((a, b) => a.name.localeCompare(b.name));
    }

    function sortByLastUpdated(repos) {
        return repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }

    function sortByMostStars(repos) {
        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }

    function updateSort(method) {
        switch (method) {
            case 'alphabetical':
                repos = sortAlphabetically(repos);
                break;
            case 'lastUpdated':
                repos = sortByLastUpdated(repos);
                break;
            case 'mostStars': // Updated case
                repos = sortByMostStars(repos);
                break;
        }
    }

    function handleSortClick(method, event) {
        event.preventDefault();
        updateSort(method);
    }

    onMount(() => {
        fetchRepos().then(r => repos = r);
    });

    const nextPage = () => currentPage++;
    const prevPage = () => currentPage--;
</script>

<style>
    .sort {
        margin-bottom: 1em;
        display: flex;
        column-gap: 1em;
    }
</style>

<div>
    {#if isLoading}
        <Loader />
    {:else}
        {#if error}
            <div class="error">{error}</div>
        {:else}
            <div class="sort">
                <a href="#" on:click={(event) => handleSortClick('alphabetical', event)}>Alphabetic</a>
                <a href="#" on:click={(event) => handleSortClick('lastUpdated', event)}>Last Updated</a>
                <a href="#" on:click={(event) => handleSortClick('mostStars', event)}>Most Stars</a>
            </div>
            <div class="grid">
                {#each repos.slice((currentPage - 1) * reposPerPage, currentPage * reposPerPage) as repo (repo.id)}
                    <article class="card">
                        <h1>{repo.name}</h1>
                        <p>{repo.description || 'No description provided'}</p>
                        <div class="row">
                            <a href={repo.html_url} target="_blank">Repository</a>
                        </div>
                        <small>{repo.stargazers_count} Stars</small>
                        |
                        <small>Last updated on {formatDate(repo.updated_at)}</small>
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
