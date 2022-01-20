<script context="module" lang="ts">
  export async function load() {
    const posts = import.meta.globEager('../../posts/*.md')
    const postsList = Object.values(posts);
    const postsMeta = postsList.map(post => post.metadata)
    return {
      props: {
        posts: postsMeta
      }
    }
  }
</script>

<script>
  export let posts
</script>

<div class="flex gap-6">
  <aside>
    <h5>Archive</h5>
    <ul>
      {#each posts as post}
        <li><a sveltekit:prefetch href="/posts/{post.slug}">{post.title}</a></li>
      {/each}
    </ul>
  </aside>
  <div>
    <slot />
  </div>
</div>
