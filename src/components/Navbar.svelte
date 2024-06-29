<script>
    let active = false;

    const toggleNav = () => {
        active = !active;
    };
</script>

<style>
    nav {
        font-weight: 300;
        padding-top: 1.5em;
        padding-bottom: 2.2em;
    }
    ul.nav-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2.2em;
    }

    a.nav-link {
        font-size: 1.1em;
    }

    a.nav-link:hover {
        color: #9ECD9D;
        transition: ease-in-out 0.1s;
    }

    a.nav-link:active {
        color: #609460;
    }

    .nav-toggle {
        background: transparent;
        border: none;
        cursor: pointer;
        display: none;
    }

    .nav-toggle .hamburger {
        width: 30px;
        height: 2px;
        background: white;
        display: block;
        position: relative;
    }

    .nav-toggle .hamburger::before, .nav-toggle .hamburger::after {
        content: '';
        background: white;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .nav-toggle .hamburger::before {
        top: -10px;
    }

    .nav-toggle .hamburger::after {
        bottom: -10px;
    }

    @media (max-width: 768px) {
        .nav-toggle {
            display: block;
            padding: 20px;
        }

        ul.nav-list {
            flex-direction: column;
            align-items: center;
            gap: 1em;
            display: none;
        }

        ul.nav-list.show {
            display: flex;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .nav-list.show a.nav-link {
            animation: fadeIn 0.5s ease-in-out forwards;
        }
    }

</style>

<nav>
    <button class="nav-toggle" aria-label="toggle navigation" on:click={toggleNav}>
        <span class='hamburger'></span>
    </button>
    <ul class={active ? 'nav-list show' : 'nav-list'}>
        <li><a href="/" class="nav-link" on:click={toggleNav}>Home</a></li>
        <li><a href="/projects" class="nav-link" on:click={toggleNav}>Projects</a></li>
        <li><a href="/blog" class="nav-link" on:click={toggleNav}>Blog</a></li>
        <li><a href="/guestbook" class="nav-link" on:click={toggleNav}>Guestbook</a></li>
<!--        <li><a href="https://archive.alee14.me" class="nav-link" on:click={toggleNav}>Archive</a></li>-->
        <li><a href="/contacts" class="nav-link" on:click={toggleNav}>Contacts</a></li>
    </ul>
</nav>
