<script lang="ts">
	import { page } from '$app/state';
	import { links } from '$lib/nav';
    import { MediaQuery } from 'svelte/reactivity';
    import LogoFull from './LogoFull.svelte';

	let open = $state(false);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);

	$effect(() => {
		page.url.pathname;
		open = false;
	});

  const phone = new MediaQuery('min-width: 800px');
</script>
<header class="wrap">
	<a href="/" class="logo" aria-label="BioEnergia – strona główna">
    {#if phone.current}
    <LogoFull size={48}/>
{/if}
	</a>

	<button
		class="toggle"
		type="button"
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
	</button>

	<nav id="main-nav" class:open>
		{#each links as link}
			<a href={link.href} class:active={isActive(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
				{link.label}
			</a>
		{/each}
		<a href="/kontakt/" class="pill" class:filled={isActive('/kontakt/')}>Kontakt</a>
	</nav>
</header>

<style>
	header {
		height: 96px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 10;
	}
	.logo {
		font-size: 24px;
		letter-spacing: -0.02em;
		text-decoration: none;
	}
	.b {
		font-weight: 600;
	}
	.l {
		font-weight: 300;
	}
	nav {
		display: flex;
		align-items: center;
		gap: 40px;
		font-size: 16px;
	}
	nav a {
		text-decoration: none;
		padding-bottom: 4px;
		border-bottom: 2px solid transparent;
	}
	nav a.active {
		border-bottom-color: var(--green);
	}
	.pill {
		padding: 12px 22px;
		border: 1.5px solid var(--ink);
		border-radius: 999px;
		font-weight: 500;
	}
	.pill.filled {
		background: var(--green);
		border-color: var(--green);
	}
	.toggle {
		display: none;
		width: 44px;
		height: 44px;
		border: 1.5px solid var(--ink);
		border-radius: 22px;
		background: transparent;
		color: var(--ink);
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	@media (max-width: 1000px) {
		header {
			height: 72px;
		}
		.logo {
			font-size: 21px;
		}
		.toggle {
			display: inline-flex;
		}
		nav {
			display: none;
			position: absolute;
			top: 72px;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: 8px var(--pad) 24px;
			background: var(--bg);
			border-bottom: 1.5px solid var(--line);
			font-size: 20px;
		}
		nav.open {
			display: flex;
		}
		nav a {
			padding: 14px 0;
			border-bottom: 1px solid var(--line);
		}
		nav a.active {
			border-bottom-color: var(--line);
			box-shadow: inset 3px 0 0 var(--green);
			padding-left: 14px;
		}
		.pill {
			margin-top: 18px;
			text-align: center;
			border-bottom: 1.5px solid var(--ink);
		}
	}
</style>
