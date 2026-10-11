<script lang="ts">
	import Button from './Button.svelte';

	/**
	 * Na telefonie: pierwsze zdanie jako skrót, reszta po kliknięciu.
	 * Na większych ekranach tekst jest zawsze w całości.
	 */
	interface Props {
		paras: string[];
		/** klasa typograficzna akapitów: body albo lead */
		type?: 'body' | 'lead';
	}

	let { paras, type = 'body' }: Props = $props();

	const split = (text: string) => {
		const m = text.match(/^(.+?[.!?])\s+(?=[A-ZĄĆĘŁŃÓŚŹŻ])(.*)$/s);
		return m ? [m[1], m[2]] : [text, ''];
	};

	const lead = $derived(split(paras[0] ?? '')[0]);
	const rest = $derived([split(paras[0] ?? '')[1], ...paras.slice(1)].filter(Boolean));

	let open = $state(false);
	const id = `rm-${Math.random().toString(36).slice(2, 8)}`;
</script>

<div class="rm" data-open={open || undefined}>
	<p class={type}>{lead}</p>
	{#if rest.length}
		<div {id} class="rest">
			<div class="rest-in">
				{#each rest as p}
					<p class={type}>{p}</p>
				{/each}
			</div>
		</div>
		<Button variant="text" size="sm" class="rm-toggle" aria-expanded={open} aria-controls={id} onclick={() => (open = !open)}>
			{open ? 'Zwiń' : 'Czytaj dalej'}
		</Button>
	{/if}
</div>

<style>
	.rm {
		display: flex;
		flex-direction: column;
	}
	.rest {
		display: grid;
		grid-template-rows: 1fr;
	}
	.rest-in {
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
		min-height: 0;
	}
	.rest-in > :global(:first-child) {
		margin-top: 1.125rem;
	}
	.rm :global(.rm-toggle) {
		display: none;
		align-self: flex-start;
	}
	@media (max-width: 700px) {
		.rest {
			grid-template-rows: 0fr;
			opacity: 0;
			transition:
				grid-template-rows 0.35s ease,
				opacity 0.3s ease;
		}
		.rest-in {
			overflow: hidden;
			gap: 0.75rem;
		}
		.rest-in > :global(:first-child) {
			margin-top: 0.75rem;
		}
		.rm[data-open] .rest {
			grid-template-rows: 1fr;
			opacity: 1;
		}
		.rm :global(.rm-toggle) {
			display: inline-flex;
			margin-top: 0.75rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.rest {
			transition: none;
		}
	}
</style>
