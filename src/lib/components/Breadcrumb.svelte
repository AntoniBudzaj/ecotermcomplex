<script lang="ts">
	import { page } from '$app/state';
	import { links } from '$lib/nav';

	const extra: Record<string, string> = {
		'/kontakt/': 'Kontakt',
		'/etcheck/': 'ETCheck',
		'/polityka-prywatnosci/': 'Polityka prywatności'
	};

	const label = $derived(
		links.find((l) => page.url.pathname.startsWith(l.href))?.label ??
			Object.entries(extra).find(([href]) => page.url.pathname.startsWith(href))?.[1] ??
			''
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
