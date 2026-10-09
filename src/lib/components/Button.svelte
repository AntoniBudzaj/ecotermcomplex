<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Przycisk lub link wyglądający jak przycisk.
	 * Z `href` renderuje <a>, bez niego <button>.
	 *
	 * primary – ciemny, pełny (główne wezwanie do działania)
	 * outline – kontur, po `selected` wypełniony zielenią
	 * chip    – mała pigułka do wyboru opcji, po `selected` zielona
	 * link    – tekst ze strzałką w treści, np. „Więcej →”
	 * text    – podkreślony tekst, np. „Czytaj więcej”
	 * nav     – link w menu, po `selected` zielone podkreślenie
	 * icon    – okrągły przycisk z ikoną (np. menu na telefonie)
	 */
	interface Props {
		variant?: 'primary' | 'outline' | 'chip' | 'link' | 'text' | 'nav' | 'icon';
		size?: 'md' | 'sm';
		href?: string;
		type?: 'button' | 'submit';
		selected?: boolean;
		class?: string;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		selected,
		class: className = '',
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a {href} class="btn tr-smooth {className}" data-variant={variant} data-size={size} data-selected={selected || undefined} {...rest}>{@render children()}</a>
{:else}
	<button {type} class="btn tr-smooth {className}" data-variant={variant} data-size={size} data-selected={selected || undefined} {...rest}>{@render children()}</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: 'DM Sans', sans-serif;
		text-decoration: none;
		cursor: pointer;
		border-radius: 100px;
		padding: 8px 22px;
		font-weight: 600;
		transition:
			transform 150ms ease,
			background 150ms ease;
	}

	/* primary */
	.btn[data-variant='primary'] {
		min-height: 54px;
		border: 0;
		background: var(--ink);
		color: var(--bg);
	}
	.btn[data-variant='primary']:hover {
		color: var(--bg);
		background: #000;
		transform: translateY(-1px);
	}

	/* outline */
	.btn[data-variant='outline'] {
	  box-shadow: inset 0 0 0 2px var(--ink); 
    background: transparent;
		color: var(--ink);
	}

  .btn[data-variant='outline']:hover{
    box-shadow: inset 0 0 0 2px var(--green); 
    transition: ease-in-out 150ms;
  }
	.btn[data-variant='outline'][data-selected] {
		background: var(--green);
		border-color: var(--green);
	}

	/* chip */
	.btn[data-variant='chip'] {
		min-height: 44px;
		padding: 0 20px;
		border: 1.5px solid var(--ink);
		background: transparent;
		color: var(--ink);
		font: 400 15px 'DM Sans', sans-serif;
	}
	.btn[data-variant='chip'][data-selected] {
		background: var(--green);
		border-color: var(--green);
	}

	/* link */
	.btn[data-variant='link'] {
		padding: 0;
		border: 0;
		background: none;
		color: var(--ink);
		font-size: 16.5px;
		font-weight: 500;
		text-decoration: underline;
	}

  .btn[data-variant='link']:hover{
    text-decoration: underline;
    
  }

	/* text */
	.btn[data-variant='text'] {
		padding: 0;
		border: 0;
		background: none;
		color: var(--ink);
		font: 500 16px 'DM Sans', sans-serif;
		text-decoration: underline;
		text-underline-offset: 5px;
		text-decoration-color: var(--green);
		text-decoration-thickness: 2px;
	}

	/* nav (:where, żeby menu mogło łatwo nadpisać wygląd w widoku mobilnym) */
	.btn:where([data-variant='nav']) {
		padding: 0 0 4px;
    border-radius: 0px;
		border: 0;
		border-bottom: 2px solid transparent;
		background: none;
		color: var(--ink);
		font: inherit;
	}
	.btn:where([data-variant='nav'][data-selected]) {
		border-bottom-color: var(--green);
	}

	.btn:where([data-variant='nav']):hover {
    border-bottom: 4px solid var(--green);
    transition: ease-in-out 100ms;
	}

	/* icon */
	.btn:where([data-variant='icon']) {
		width: 44px;
		height: 44px;
		padding: 0;
		border: 1.5px solid var(--ink);
		background: transparent;
		color: var(--ink);
	}

	/* rozmiar */
	.btn[data-variant='outline'][data-size='sm'] {
		padding: 9px 18px;
		font-size: 15px;
	}
</style>
