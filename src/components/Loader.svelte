<style>
    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #b3f69e;
        border-bottom-color: #609460;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .centre {
        display: flex;
        justify-content: center;
    }

</style>

<div class="centre">
    <span class="loader"></span>
</div>
