<script context="module">
  export async function load({ error, status }) {
    return {
      props: {
        status,
        error
      }
    }
  }
</script>

<script>
  export let status
  export let error
  console.log(error);
</script>

<h1 class="text-3xl font-black">Something Happened</h1>

<h3 class="text-xl mt-8">{status} - {error.name}: {error.message}</h3>
