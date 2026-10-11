<script lang="ts">
	import { page } from '$app/state';
	import { links } from '$lib/nav';

	const label = $derived(
		links.find((l) => page.url.pathname.startsWith(l.href))?.label ??
			(page.url.pathname.startsWith('/kontakt/')
				? 'Kontakt'
				: page.url.pathname.startsWith('/polityka-prywatnosci/')
					? 'Polityka prywatności'
					: '')
	);
</script>

{#if label}
	<nav class="crumb" aria-label="Ścieżka">
		<div class="wrap">
			<a href="/">Ecotermcomplex</a>
			<span aria-hidden="true">/</span>
			<span aria-current="page">{label}</span>
		</div>
	</nav>
{/if}

<style>
	.crumb {
		font-size: 1rem;
		color: var(--muted);
	}
	.wrap {
		display: flex;
		gap: 0.625rem;
		padding-block: 1rem 0;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	span[aria-current] {
		color: var(--ink);
		font-weight: 500;
	}
</style>
