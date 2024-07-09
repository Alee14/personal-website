<script>
    import { onMount, onDestroy } from 'svelte';
    import Loader from './Loader.svelte';
    import { formatDate } from "../util";

    let error = null;
    let isLoading = true;
    let videos = [];
    let nextPageToken = '';

    const fetchVideos = async (pageToken = '') => {
        isLoading = true;
        const url = `${import.meta.env.PUBLIC_API_URL}/youtube?pageToken=${pageToken}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                console.error(`HTTP Error ${data.error.code}: ${data.error.message}`);
                error = `HTTP Error ${data.error.code}: ${data.error.message}`
                return
            }
            videos = [...videos, ...data.items];
            nextPageToken = data.nextPageToken || '';
        } catch (e) {
            console.error(e);
            error = e.error.message
        } finally {
            isLoading = false;
        }
    };

    function onScroll() {
        const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
        if (nearBottom && !isLoading && nextPageToken) {
            fetchVideos(nextPageToken);
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', onScroll);
            fetchVideos().then(() => isLoading = false);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', onScroll);
        }
    });
</script>

<style>
    .title {
        margin-top: .5em;
        margin-bottom: .3em;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 1em;
    }

    .card small {
        display: block;
    }

    .zoom {
        transition: transform 0.2s ease; /* Smooth transition for the transform property */
        max-width: 100%; /* Ensures the image does not exceed its container's width */
    }

    .zoom:hover {
        transform: scale(1.04); /* Scales the image to 110% of its original size on hover */
    }

    .zoom:active {
        transform: scale(0.6); /* Scales the image to 110% of its original size on hover */
    }

    .container {
        display: grid;
        gap: 1em; /* Adjusts the gap between grid items */
    }

    @media (min-width: 992px) {
        .container {
            grid-template-columns: repeat(3, 1fr); /* Original setting for large screens */
        }
    }

    @media (max-width: 991px) and (min-width: 768px) {
        .container {
            grid-template-columns: repeat(2, 1fr); /* Adjusts to 2 columns for tablets */
        }
    }

    @media (max-width: 767px) {
        .container {
            grid-template-columns: 1fr; /* Adjusts to a single column for mobile */
        }
    }

</style>

<div>
    {#if isLoading && videos.length === 0}
        <Loader />
    {:else}
        {#if error}
            <div class="error">{error}</div>
        {:else}
            <div class="container">
                {#each videos as video}
                    <div class="card">
                        <a href={`https://youtu.be/${video.snippet.resourceId.videoId}`} target="_blank">
                            <img src={video.snippet.thumbnails.medium.url} class="zoom" loading="lazy" alt={video.snippet.title} width={video.snippet.thumbnails.medium.width} height={video.snippet.thumbnails.medium.height} />
                            <h3 class="title">{video.snippet.title}</h3>
                            <small>{formatDate(video.snippet.publishedAt)}</small>
                        </a>
                    </div>
                {/each}
            </div>
        {/if}
    {/if}
    {#if isLoading && videos.length > 0}
        <Loader />
    {/if}
</div>
