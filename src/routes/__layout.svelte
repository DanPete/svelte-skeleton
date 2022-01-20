<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
</script>

<Header />

<main class="bg-blue-100 container mx-auto p-4">
	<slot />
</main>

<footer class="bottom-0 sticky top-full text-center font-medium p-2 bg-gray-200">Copywrite 2021</footer>
