<template>
    <div>
        <v-card>
            <header id="showcase">
                <h1 class="display-3 animated fadeIn">Blog</h1>
                <h1 class="animated fadeIn">This is where I post stuff here.</h1>
            </header>
        </v-card>
        <v-container>
            <div v-for="post in blogPosts" :key="post.title">
                <v-card :to="'/blog/' + post.slug">
                    <v-card-title>{{ post.title }}</v-card-title>
                    <v-card-subtitle>Created on {{post.date}}</v-card-subtitle>
                    <v-card-text>{{ post.description }}</v-card-text>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'blog',
  head: {
    title: 'Blog'
  },
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}

</script>

<style scoped>
    #showcase {
        background-image:url("../../assets/img/landing_page.png");
        background-size: cover;
        background-position: center;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }
</style>
