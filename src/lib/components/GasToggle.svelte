<script lang="ts">
	import Button from './Button.svelte';

	/**
	 * Przełącznik „biogaz – biometan”: wspólny początek procesu,
	 * po przełączeniu zmienia się końcówka schematu.
	 */
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

	let current = $state(0);
	const opt = $derived(options[current]);
</script>

<div class="gas">
	<div class="switch" role="group" aria-label="Sposób wykorzystania biogazu">
		{#each options as o, i}
			<Button variant="chip" selected={current === i} aria-pressed={current === i} onclick={() => (current = i)}>
				{o.label}
			</Button>
		{/each}
	</div>

	<ol class="chain">
		{#each trunk as n}
			<li class="node">
				<strong>{n.t}</strong>
				<span>{n.d}</span>
			</li>
		{/each}
		{#key current}
			{#each opt.tail as n}
				<li class="node tail">
					<strong>{n.t}</strong>
					<span>{n.d}</span>
				</li>
			{/each}
		{/key}
	</ol>

	<p class="body note">{opt.note}</p>
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
	.node:not(:last-child)::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		width: 28px;
		height: 1.5px;
		background: var(--ink);
	}
	.node:last-child {
		margin-right: 0;
	}
	.tail {
		background: var(--green-soft);
		border-color: var(--ink);
		animation: swap 0.35s ease both;
	}
	.tail:nth-last-child(1) {
		background: var(--green);
	}
	.tail:nth-last-child(1) span {
		color: var(--ink);
	}
	.note {
		max-width: 760px;
	}
	@keyframes swap {
		from {
			opacity: 0;
			transform: translateY(6px);
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
		.node:last-child {
			margin-bottom: 0;
		}
		.node:not(:last-child)::after {
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
</style>
