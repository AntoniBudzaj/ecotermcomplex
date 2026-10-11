<script lang="ts">
	/**
	 * Obieg zamknięty: sześć etapów na okręgu, wybrany etap
	 * opisany w środku.
	 */
	interface Node {
		title: string;
		text: string;
	}
	interface Props {
		nodes: Node[];
	}

	let { nodes }: Props = $props();

	let active = $state(0);
	const pos = (i: number) => {
		const a = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
		return { x: 50 + 40 * Math.cos(a), y: 50 + 40 * Math.sin(a) };
	};
</script>

<div class="cycle">
	<div class="stage">
	<div class="ring" role="group" aria-label="Etapy obiegu">
		<svg viewBox="0 0 100 100" aria-hidden="true">
			<circle cx="50" cy="50" r="40" fill="none" stroke="var(--line)" stroke-width="0.6" />
			{#each nodes as _, i}
				{@const a = pos(i)}
				{@const b = pos((i + 1) % nodes.length)}
				<path
					d="M {a.x} {a.y} A 40 40 0 0 1 {b.x} {b.y}"
					fill="none"
					stroke={i === active ? 'var(--green)' : 'transparent'}
					stroke-width="1.6"
					stroke-linecap="round"
				/>
			{/each}
		</svg>
		{#each nodes as n, i}
			{@const p = pos(i)}
			<button
				type="button"
				class="node"
				aria-pressed={active === i}
				style="left: {p.x}%; top: {p.y}%"
				onclick={() => (active = i)}
			>
				{n.title}
			</button>
		{/each}
	</div>
	<div class="centre" aria-live="polite">
		{#key active}
			<p class="body">{nodes[active].text}</p>
		{/key}
	</div>
	</div>
</div>

<style>
	.cycle {
		display: flex;
		justify-content: center;
	}
	.stage {
		position: relative;
		width: min(100%, 620px);
	}
	.ring {
		position: relative;
		width: 100%;
		aspect-ratio: 1;
	}
	svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
	.node {
		position: absolute;
		transform: translate(-50%, -50%);
		padding: 10px 16px;
		border: 1.5px solid var(--ink);
		border-radius: 0;
		background: var(--bg);
		color: var(--ink);
		font: 600 0.9375rem/1.2 var(--font-display);
		letter-spacing: -0.01em;
		white-space: nowrap;
		cursor: pointer;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
	}
	.node:hover {
		transform: translate(-50%, -50%) scale(1.05);
	}
	.node[aria-pressed='true'] {
		background: var(--green);
		border-color: var(--green);
	}
	.centre {
		position: absolute;
		inset: 23%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.centre p {
		font-size: clamp(0.875rem, 1.45vw, 1.0625rem);
		line-height: 1.5;
		animation: swap 0.3s ease both;
	}
	@keyframes swap {
		from {
			opacity: 0;
		}
	}
	@media (max-width: 560px) {
		.node {
			padding: 8px 11px;
			font-size: 0.8125rem;
		}
		.centre {
			position: static;
			margin-top: 20px;
			padding: 20px;
			background: var(--card);
			border: 1.5px solid var(--card-line);
			border-top: 5px solid var(--green);
			border-radius: 0;
			text-align: left;
		}
		.centre p {
			font-size: 1rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.centre p {
			animation: none;
		}
		.node {
			transition: none;
		}
	}
</style>
