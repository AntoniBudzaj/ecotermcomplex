<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import { expand } from '$lib/expand.svelte';

	/**
	 * Tekst sekcji w skróconej formie: widoczne pierwsze zdanie,
	 * reszta rozwija się przyciskiem (lub globalnie przez ExpandAll).
	 */
	interface Props {
		paras: string[];
		/** plain – zwykły, large – większe pierwsze zdanie, rule – z kolorową linią z lewej */
		variant?: 'plain' | 'large' | 'rule';
		/** wygląd przycisku rozwijania */
		toggle?: 'text' | 'link' | 'outline';
	}

	let { paras, variant = 'plain', toggle = 'text' }: Props = $props();

	const split = (text: string) => {
		const m = text.match(/^(.+?[.!?:])\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ])(.*)$/s);
		return m ? [m[1], m[2]] : [text, ''];
	};

	const lead = $derived(split(paras[0] ?? '')[0]);
	const rest = $derived([split(paras[0] ?? '')[1], ...paras.slice(1)].filter(Boolean));

	let open = $state(false);
	const id = `more-${Math.random().toString(36).slice(2, 8)}`;

	$effect(() => {
		open = expand.all;
	});
</script>

{#if lead}<p class="body lead-sentence" data-variant={variant}>{lead}</p>{/if}

{#if rest.length}
	{#if open}
		<div {id} class="rest" transition:slide={{ duration: 200 }}>
			{#each rest as p}
				<p class="body">{p}</p>
			{/each}
		</div>
	{/if}
	<Button variant={toggle} size="sm" class="toggle-more" aria-expanded={open} aria-controls={id} onclick={() => (open = !open)}>
		{open ? 'Zwiń' : 'Czytaj dalej'}
	</Button>
{/if}

<style>
	.lead-sentence {
		color: var(--ink);
	}
	.lead-sentence[data-variant='large'] {
		font-size: clamp(1.1875rem, 1.7vw, 1.375rem);
		line-height: 1.5;
		letter-spacing: -0.01em;
	}
	.lead-sentence[data-variant='rule'] {
		padding-left: 18px;
		border-left: 3px solid var(--green);
	}
	.rest {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	:global(.toggle-more) {
		align-self: flex-start;
	}
</style>
