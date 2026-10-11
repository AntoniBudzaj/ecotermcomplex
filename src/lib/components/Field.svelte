<script lang="ts">
	import type { Snippet } from 'svelte';
	import Dropdown from './Dropdown.svelte';
	import type { FullAutoFill } from 'svelte/elements';

	/**
	 * Pole formularza: etykieta i kontrolka w jednym układzie, więc
	 * wszystkie typy (input, select, textarea, checkbox) mają tę samą
	 * szerokość, wysokość i odstępy.
	 */
	interface Props {
		id: string;
		name: string;
		label?: string;
		/** szary opis pod polem, np. „Opcjonalne” */
		hint?: string;
		type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
		value?: string;
		options?: string[];
		required?: boolean;
		autocomplete?: FullAutoFill;
		/** zajmuje pół szerokości (para obok siebie na większych ekranach) */
		half?: boolean;
		/** treść etykiety dla checkboxa */
		children?: Snippet;
	}

	let {
		id,
		name,
		label = '',
		hint = '',
		type = 'text',
		value = $bindable(''),
		options = [],
		required = false,
		autocomplete,
		half = false,
		children
	}: Props = $props();
</script>

{#if type === 'checkbox'}
	<div class="check" data-span="full">
		<input {id} {name} type="checkbox" {required} />
		<label for={id}>{@render children?.()}</label>
	</div>
{:else}
	<div class="field" data-span={half ? 'half' : 'full'}>
		<label for={id}>{label}</label>
		<div class="control">
			{#if type === 'textarea'}
				<textarea {id} {name} {required} bind:value aria-describedby={hint ? `${id}-hint` : undefined}></textarea>
			{:else if type === 'select'}
				<Dropdown {id} {name} {options} bind:value describedby={hint ? `${id}-hint` : undefined} />
			{:else}
				<input {id} {name} {type} {required} {autocomplete} bind:value aria-describedby={hint ? `${id}-hint` : undefined} />
			{/if}
			{#if hint}<p class="hint" id="{id}-hint">{hint}</p>{/if}
		</div>
	</div>
{/if}

<style>
	/* etykieta i kontrolka mają własne wiersze siatki formularza (subgrid),
	   więc w parze obok siebie kontrolki zawsze są na tej samej wysokości,
	   nawet gdy jedna etykieta zawija się do dwóch linii */
	.field {
		display: grid;
		grid-row: span 2;
		grid-template-rows: subgrid;
		min-width: 0;
	}
	.field > label {
		margin-bottom: 0.5rem;
		font-size: 0.9062rem;
		font-weight: 500;
		line-height: 1.3;
		align-self: end;
	}
	.control {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		min-width: 0;
		margin-bottom: 1.25rem;
	}
	.hint {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.3;
		font-weight: 400;
		color: var(--caption);
	}
	@supports not (grid-template-rows: subgrid) {
		.field {
			grid-row: auto;
			grid-template-rows: none;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
	input,
	textarea {
		display: block;
		width: 100%;
		min-width: 0;
		margin: 0;
		box-sizing: border-box;
		border: 1.5px solid var(--ink);
		border-radius: 0;
		background-color: var(--bg);
		color: var(--ink);
		font: 400 1rem/1.25 var(--font-body);
		-webkit-appearance: none;
		appearance: none;
		transition:
			border-color 150ms ease,
			box-shadow 150ms ease;
	}
	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--green);
		box-shadow: 0 0 0 1px var(--green);
	}
	input {
		height: 3.25rem;
		padding: 0 1rem;
	}
	textarea {
		min-height: 9.5rem;
		padding: 0.875rem 1rem;
		resize: vertical;
	}

	.check {
		margin-bottom: 1.25rem;
		display: grid;
		grid-template-columns: 1.25rem minmax(0, 1fr);
		column-gap: 0.75rem;
		align-items: start;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--muted);
	}
	.check input[type="checkbox"]{
		width: 1.25rem;
		height: 1.25rem;
		padding: 0;
		margin-top: 0.125rem;
		border-radius: 50%;
		accent-color: var(--green);
		-webkit-appearance: auto;
		appearance: auto;
	}
	.check label {
		font-weight: 400;
		font-size: inherit;
		line-height: inherit;
	}
</style>
