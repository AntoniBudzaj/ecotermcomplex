<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<a class="sr-only" href="#tresc">Przejdź do treści</a>
<Nav />
<Breadcrumb />
<main id="tresc">
	{@render children()}
</main>
<Footer />
