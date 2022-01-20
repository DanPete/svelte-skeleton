<script context="module" lang="ts">
  export async function load({ params }) {
    const { slug } = params
    try {
      const Post = await import(`../../posts/${slug}.md`)

      return  {
        props: {
          Post: Post.default
        }
      }
    } catch (error) {
      console.log(error);
      // return {
      //   status: 307,
      //   redirect: '/posts'
      // }
      return {
        status: 404,
        error: 'Post not found'
      }
    }
  }
</script>

<script>
  export let Post
</script>

<div class="prose">
  <div class="prose-h1:text-orange-600 prose-h1:mb-4" >
     <svelte:component this={Post} />
  </div>
</div>
