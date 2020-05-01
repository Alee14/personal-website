<template>
    <v-container>
        <v-card>
            <v-card-title>{{blogPost.title}}</v-card-title>
            <v-card-subtitle>{{blogPost.description}}</v-card-subtitle>
            <v-card-text :to="'/blog'">Back to posts</v-card-text>
            <v-divider/>
            <br/>
            <v-card-text v-html="$md.render(blogPost.body)" />
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: '_blog',
  head: {
    title: '{{blogpost.title}}'
  },
  async asyncData ({ params, payload }) {
    if (payload) return { blogPost: payload }
    else {
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>

<style scoped>

</style>
