<script lang="ts">
	import Button from './Button.svelte';

	/**
	 * Przełącznik „biogaz – biometan”: wspólny początek procesu,
	 * po przełączeniu zmienia się końcówka schematu.
	 *
	 * chain – jeden łańcuch w rzędzie, zmienia się tylko końcówka
	 * fork  – wspólny pień rozwidla się na dwie ścieżki widoczne naraz,
	 *         wybrana jest wyróżniona, druga przygaszona
	 */
	interface Props {
		variant?: 'chain' | 'fork';
	}

	let { variant = 'chain' }: Props = $props();

	const trunk = [
		{ t: 'Substraty', d: 'surowce rolnicze, produkty uboczne, bioodpady' },
		{ t: 'Fermentacja', d: 'beztlenowa, w zbiornikach' },
		{ t: 'Biogaz', d: 'odsiarczanie i osuszanie' }
	];

	const options = [
		{
			id: 'kogeneracja',
			label: 'Biogaz w kogeneracji',
			tail: [
				{ t: 'Kogeneracja', d: 'silnik wytwarza prąd i ciepło' },
				{ t: 'Energia i ciepło', d: 'dla sieci i potrzeb własnych' }
			],
			note: 'Kogeneracja wytwarza energię elektryczną i ciepło. Ocena obejmuje potrzeby własne instalacji, możliwość odzysku ciepła i warunki przyłączenia do sieci elektroenergetycznej.'
		},
		{
			id: 'biometan',
			label: 'Biometan',
			tail: [
				{ t: 'Uzdatnianie', d: 'upgrading, osuszanie, sprężanie' },
				{ t: 'Biometan', d: 'do sieci gazowej lub odbiorcy' }
			],
			note: 'Uzdatnianie zużywa energię na upgrading i sprężanie. Wybór technologii zależy od wymagań odbiorcy gazu, bilansów procesu i kosztów całego łańcucha dostaw.'
		}
	];

	// `current` – wybór użytkownika (przyciski, podświetlenie ścieżki),
	// `view` – to, co widać w schemacie: zmienia się dopiero po wygaszeniu starej treści
	let current = $state(0);
	let view = $state(0);
	let fading = $state(false);
	const opt = $derived(options[view]);
	let timer: ReturnType<typeof setTimeout> | undefined;

	const choose = (i: number) => {
		if (i === current) return;
		current = i;
		fading = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			view = i;
			fading = false;
		}, 200);
	};
</script>

<div class="gas">
	<div class="switch" role="group" aria-label="Sposób wykorzystania biogazu">
		{#each options as o, i}
			<Button variant="chip" selected={current === i} aria-pressed={current === i} onclick={() => choose(i)}>
				{o.label}
			</Button>
		{/each}
	</div>

	{#if variant === 'fork'}
		<div class="fork">
			<ol class="trunk">
				{#each trunk as n}
					<li class="f-node">
						<strong>{n.t}</strong>
						<span>{n.d}</span>
					</li>
				{/each}
			</ol>
			<svg class="split" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
				<path class="base" d="M0 50 H50 M50 25 V75 M50 25 H100 M50 75 H100" />
				{#key view}
					<path class="on" class:fading d={view === 0 ? 'M0 50 H50 V25 H100' : 'M0 50 H50 V75 H100'} />
				{/key}
			</svg>
			{#each options as o, i}
				<button type="button" class="lane" data-row={i} aria-pressed={current === i} aria-label={o.label} onclick={() => choose(i)}>
					{#each o.tail as n}
						<span class="f-node">
							<strong>{n.t}</strong>
							<span>{n.d}</span>
						</span>
					{/each}
				</button>
			{/each}
		</div>
	{:else}
	<ol class="chain">
		{#each trunk as n}
			<li class="node">
				<strong>{n.t}</strong>
				<span>{n.d}</span>
			</li>
		{/each}
		<!-- obie końcówki leżą w tych samych komórkach siatki, więc wysokość schematu
		     jest stała, a przełączenie tylko przenika (bez przeskoku układu) -->
		{#each options as o, oi}
			{#each o.tail as n, ti}
				<li
					class="node tail"
					class:end={ti === o.tail.length - 1}
					class:inactive={view !== oi}
					class:fading
					style="--col: {4 + ti}"
					aria-hidden={view !== oi}
				>
					<strong>{n.t}</strong>
					<span>{n.d}</span>
				</li>
			{/each}
		{/each}
	</ol>
	{/if}

	<div class="notes">
		{#each options as o, oi}
			<p class="body note" class:inactive={view !== oi} class:fading aria-hidden={view !== oi}>{o.note}</p>
		{/each}
	</div>
</div>

<style>
	.gas {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.switch {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.chain {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 0;
	}
	.node {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 18px 16px 20px;
		margin-right: 28px;
		border: 1.5px solid var(--ink);
		border-radius: 0;
		background: var(--bg);
		font-size: 0.9375rem;
		line-height: 1.35;
		color: var(--muted);
	}
	.node strong {
		font: 600 1.1875rem/1.2 var(--font-display);
		letter-spacing: -0.02em;
		color: var(--ink);
	}
	/* łącznik między etapami */
	.node:not(.end)::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		width: 28px;
		height: 1.5px;
		background: var(--ink);
	}
	.node.end {
		margin-right: 0;
	}
	.tail {
		grid-column: var(--col);
		grid-row: 1;
		transition: opacity 0.2s ease;
		background: var(--green-soft);
		border-color: var(--ink);
		animation: fade 0.3s ease both;
	}
	.tail.end {
		background: var(--green);
	}
	.tail.end span {
		color: var(--ink);
	}
	.notes {
		display: grid;
	}
	.note {
		grid-area: 1 / 1;
		max-width: 760px;
		transition:
			opacity 0.2s ease,
			visibility 0s linear 0s;
	}
	.inactive {
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
	}
	.fading {
		opacity: 0;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
	}
	@media (max-width: 900px) {
		.chain {
			grid-template-columns: 1fr;
			gap: 0;
		}
		.node {
			margin-right: 0;
			margin-bottom: 24px;
		}
		.tail {
			grid-column: 1;
			grid-row: auto;
		}
		.tail.inactive {
			display: none;
		}
		.node.end {
			margin-bottom: 0;
		}
		.node:not(.end)::after {
			left: 28px;
			top: 100%;
			width: 1.5px;
			height: 24px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.tail {
			animation: none;
		}
	}

	/* ---- wariant fork ---- */
	.fork {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) 4.5rem minmax(0, 1fr);
		grid-template-rows: auto auto;
		row-gap: 1rem;
		align-items: stretch;
	}
	.trunk {
		grid-column: 1;
		grid-row: 1 / 3;
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}
	.trunk .f-node {
		flex: 1 1 0;
		min-width: 0;
	}
	.trunk .f-node:not(:last-child) {
		margin-right: 1.25rem;
	}
	.trunk .f-node:not(:last-child)::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		width: 1.25rem;
		height: 1.5px;
		background: var(--ink);
	}
	.split {
		grid-column: 2;
		grid-row: 1 / 3;
		width: 100%;
		height: 100%;
		fill: none;
		stroke-width: 1.8;
		overflow: visible;
	}
	.split path {
		vector-effect: non-scaling-stroke;
		stroke-linecap: square;
	}
	.split .base {
		stroke: var(--line);
	}
	.split .on {
		stroke: var(--ink);
		stroke-width: 2.5;
		animation: fade 0.3s ease both;
	}
	.lane {
		grid-column: 3;
		display: flex;
		align-items: stretch;
		min-width: 0;
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
		opacity: 0.45;
		transition: opacity 0.25s ease;
	}
	.lane[data-row='0'] {
		grid-row: 1;
	}
	.lane[data-row='1'] {
		grid-row: 2;
	}
	.lane:hover,
	.lane[aria-pressed='true'] {
		opacity: 1;
	}
	.lane:focus-visible {
		outline: 2px solid var(--green);
		outline-offset: 4px;
	}
	.lane .f-node {
		flex: 1 1 0;
		min-width: 0;
	}
	.lane .f-node:first-child {
		margin-right: 1.25rem;
	}
	.lane .f-node:first-child::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		width: 1.25rem;
		height: 1.5px;
		background: var(--ink);
	}
	.lane[aria-pressed='true'] .f-node:first-child {
		background: var(--green-soft);
	}
	.lane[aria-pressed='true'] .f-node:last-child {
		background: var(--green);
	}
	.lane[aria-pressed='true'] .f-node:last-child span {
		color: var(--ink);
	}
	.f-node {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		padding: 1.125rem 1rem 1.25rem;
		border: 1.5px solid var(--ink);
		background: var(--bg);
		font-size: 0.9375rem;
		line-height: 1.35;
		color: var(--muted);
	}
	.f-node strong {
		font: 400 1rem/1.2 var(--font-display);
		color: var(--ink);
	}
	@media (max-width: 900px) {
		.fork {
			grid-template-columns: minmax(0, 1fr);
		}
		.trunk {
			grid-column: 1;
			grid-row: auto;
			flex-direction: column;
			align-items: stretch;
		}
		.trunk .f-node:not(:last-child) {
			margin-right: 0;
			margin-bottom: 1.25rem;
		}
		.trunk .f-node:not(:last-child)::after {
			left: 1.5rem;
			top: 100%;
			width: 1.5px;
			height: 1.25rem;
		}
		.split {
			display: none;
		}
		.lane {
			grid-column: 1;
			grid-row: auto !important;
			flex-direction: column;
		}
		.lane:first-of-type {
			margin-top: 1.5rem;
		}
		/* na telefonie pokazuj tylko wybraną ścieżkę */
		.lane[aria-pressed='false'] {
			display: none;
		}
		.lane[aria-pressed='true'] {
			margin-top: 1.5rem;
		}
		.lane .f-node:first-child {
			margin-right: 0;
			margin-bottom: 1.25rem;
		}
		.lane .f-node:first-child::after {
			left: 1.5rem;
			top: 100%;
			width: 1.5px;
			height: 1.25rem;
		}
	}
</style>
