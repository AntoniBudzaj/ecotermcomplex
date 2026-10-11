<script lang="ts">
	/**
	 * Oś procesu ułożona „wężykiem”: 1 → 2, w dół do 3, 3 ← 4, w dół do 5 itd.
	 * Kafelki są zwarte, a opis rozwija się po najechaniu myszą, po fokusie
	 * z klawiatury albo po dotknięciu na telefonie. Rozwinięty opis
	 * nakłada się na sąsiedztwo, więc układ siatki się nie przesuwa.
	 */
	interface Step {
		title: string;
		paras: string[];
	}
	interface Props {
		steps: Step[];
		label?: string;
	}

	let { steps, label = 'Etapy' }: Props = $props();

	const perRow = 2;
	let open = $state<number | null>(null);
	const uid = `snake-${Math.random().toString(36).slice(2, 7)}`;

	const rowOf = (i: number) => Math.floor(i / perRow);
	// w parzystych wierszach idziemy w prawo, w nieparzystych w lewo
	const colOf = (i: number) => {
		const pos = i % perRow;
		return rowOf(i) % 2 === 0 ? (pos === 0 ? 1 : 3) : pos === 0 ? 3 : 1;
	};
	const rows = $derived(Math.ceil(steps.length / perRow));
</script>

<ol class="snake" aria-label={label}>
	{#each steps as s, i}
		<li
			class="step"
			style="--c: {colOf(i)}; --r: {rowOf(i) * 2 + 1}"
			data-last={i === steps.length - 1 || undefined}
			data-open={open === i || undefined}
			onpointerenter={(e) => e.pointerType === 'mouse' && (open = i)}
			onpointerleave={(e) => e.pointerType === 'mouse' && open === i && (open = null)}
		>
			<div class="tcard">
				<button
					type="button"
					class="head"
					aria-expanded={open === i}
					aria-controls="{uid}-{i}"
					onclick={() => (open = open === i ? null : i)}
					onfocus={() => (open = i)}
					onblur={(e) => {
						if (!e.currentTarget.closest('.tcard')?.contains(e.relatedTarget as Node)) open = open === i ? null : open;
					}}
				>
					<span class="num">{i + 1}</span>
					<span class="title">{s.title}</span>
					<svg class="plus" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M8 2 V14 M2 8 H14" /></svg>
				</button>
				<div class="more" id="{uid}-{i}">
					<div class="more-in">
						{#each s.paras as p}
							<p class="small">{p}</p>
						{/each}
					</div>
				</div>
			</div>
		</li>
		{#if i < steps.length - 1 && i % perRow === 0}
			<li class="arrow h" style="--r: {rowOf(i) * 2 + 1}" data-dir={rowOf(i) % 2 === 0 ? 'right' : 'left'} aria-hidden="true">
				<svg viewBox="0 0 48 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7 H45 M38 1.5 L45 7 L38 12.5" /></svg>
			</li>
		{/if}
		{#if i % perRow === perRow - 1 && rowOf(i) < rows - 1}
			<li class="arrow v" style="--c: {rowOf(i) % 2 === 0 ? 3 : 1}; --r: {rowOf(i) * 2 + 2}" aria-hidden="true">
				<svg viewBox="0 0 14 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2 V45 M1.5 38 L7 45 L12.5 38" /></svg>
			</li>
		{/if}
	{/each}
</ol>

<style>
	.snake {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: minmax(0, 1fr) 4.5rem minmax(0, 1fr);
		grid-auto-rows: auto;
		align-items: start;
	}
	.step {
		grid-column: var(--c);
		grid-row: var(--r);
		position: relative;
		height: 7.5rem;
	}
	.step[data-open] {
		z-index: 10;
	}
	.tcard {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		min-height: 100%;
		background: var(--card);
		border: 1.5px solid var(--ink);
		transition: background 0.2s ease;
	}
	.step[data-open] .tcard {
		background: var(--green-soft);
	}
	.head {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: 0.875rem;
		width: 100%;
		min-height: 7.5rem;
		margin: 0;
		padding: 0 1.125rem;
		border: 0;
		background: none;
		color: var(--ink);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}
	.head:focus-visible {
		outline: 2px solid var(--green);
		outline-offset: -4px;
	}
	.num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		background: var(--green);
		font: 400 0.9375rem var(--font-display);
	}
	.title {
		font: 400 0.875rem/1.3 var(--font-display);
		letter-spacing: -0.005em;
	}
	.plus {
		transition: transform 0.25s ease;
	}
	.step[data-open] .plus {
		transform: rotate(45deg);
	}
	.more {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.3s ease;
	}
	.step[data-open] .more {
		grid-template-rows: 1fr;
	}
	.more-in {
		overflow: hidden;
		min-height: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 0 1.125rem;
	}
	.step[data-open] .more-in {
		padding-bottom: 1.125rem;
	}

	.arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--ink);
	}
	.arrow.h {
		grid-column: 2;
		grid-row: var(--r);
		height: 7.5rem;
	}
	.arrow.h svg {
		width: 100%;
		height: 0.875rem;
	}
	.arrow.h[data-dir='left'] svg {
		transform: scaleX(-1);
	}
	.arrow.v {
		grid-column: var(--c);
		grid-row: var(--r);
		height: 3.5rem;
	}
	.arrow.v svg {
		width: 0.875rem;
		height: 100%;
	}

	/* telefon: jedna kolumna, strzałki w dół między kafelkami, opis rozwija się w miejscu */
	@media (max-width: 760px) {
		.snake {
			grid-template-columns: minmax(0, 1fr);
		}
		.step {
			grid-column: 1;
			grid-row: auto;
			height: auto;
			margin-bottom: 2.5rem;
		}
		.step[data-last] {
			margin-bottom: 0;
		}
		.tcard {
			position: static;
			min-height: 0;
		}
		.head {
			min-height: 4.5rem;
			padding-block: 0.75rem;
		}
		.step:not([data-last])::after {
			content: '';
			position: absolute;
			left: 1.375rem;
			top: 100%;
			width: 1.5px;
			height: 2.5rem;
			background: var(--ink);
		}
		.arrow {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.more,
		.plus,
		.tcard {
			transition: none;
		}
	}
</style>
