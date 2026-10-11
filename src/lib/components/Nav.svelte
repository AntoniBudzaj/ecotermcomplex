<script lang="ts">
	import { page } from '$app/state';
	import { links } from '$lib/nav';
	import Button from './Button.svelte';
    import LogoFull from './LogoFull.svelte';

	let open = $state(false);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);

	$effect(() => {
		page.url.pathname;
		open = false;
	});

</script>
<header class="bar">
<div class="wrap inner">
	<a href="/" class="logo" aria-label="Ecotermcomplex – strona główna">
		<LogoFull size={40} />
	</a>

	<Button
		variant="icon"
		class="toggle"
		aria-expanded={open}
		aria-controls="main-nav"
		aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
		onclick={() => (open = !open)}
	>
		<svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
			{#if open}
				<path d="M3 1 L15 11 M15 1 L3 11" />
			{:else}
				<path d="M1 1h16M1 11h16" />
			{/if}
		</svg>
	</Button>

	<nav id="main-nav" class:open>
		{#each links as link}
			<Button
				href={link.href}
				variant="nav"
				class="nav-link"
				selected={isActive(link.href)}
				aria-current={isActive(link.href) ? 'page' : undefined}
			>
				{link.label}
			</Button>
		{/each}
		<Button href="/kontakt/" variant="outline" class="pill" selected={isActive('/kontakt/')}>Kontakt</Button>
	</nav>
</div>
</header>

<style>
	.bar {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--bg);
		border-bottom: 1.5px solid var(--line);
	}
	.inner {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.logo :global(svg) {
		display: block;
		width: auto;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 1.75rem;
		font-size: 1rem;
	}
	.inner :global(.toggle) {
		display: none;
	}

	@media (max-width: 1100px) {
		.inner {
			height: 3.75rem;
		}
		.logo :global(svg) {
			height: 1.875rem;
		}
		.inner :global(.toggle) {
			display: inline-flex;
		}
		nav {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: 0.5rem var(--pad) 1.5rem;
			background: var(--bg);
			border-bottom: 1.5px solid var(--line);
			font-size: 1.125rem;
			max-height: calc(100dvh - 3.75rem);
			overflow-y: auto;
		}
		nav.open {
			display: flex;
		}
		nav :global(.nav-link) {
			justify-content: flex-start;
			padding: 0.75rem 0;
			border-bottom: 1px solid var(--line);
		}
		nav :global(.nav-link[data-selected]) {
			border-bottom: 3px solid var(--green);
			padding-bottom: calc(0.75rem - 2px);
		}
		nav :global(.pill) {
			margin-top: 1rem;
		}
	}
</style>
