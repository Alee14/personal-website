<template>
    <v-container>
        <v-card>
            <v-card-title>{{blogPost.title}}</v-card-title>
            <v-card-subtitle>{{blogPost.description}}</v-card-subtitle>
            <v-card-text><nuxt-link :to="'/blog'" class="text--white">Back to posts</nuxt-link></v-card-text>
            <v-divider/>
            <br/>
            <v-card-text class="text--white" v-html="$md.render(blogPost.body)" />
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: '_blog',
  head: {
    title: 'Blog'
  },
  async asyncData ({ params, payload }) {
    if (payload) return { blogPost: payload }
    else {
      return {
        blogPost: await require(`../../assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>

<style scoped>

</style>
