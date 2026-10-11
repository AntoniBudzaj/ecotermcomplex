<script lang="ts">
	/**
	 * Klikalny schemat procesu: kolejne etapy na jednej linii,
	 * wybrany etap wypełnia linię i pokazuje opis poniżej.
	 */
	interface Step {
		title: string;
		text: string;
	}
	interface Props {
		steps: Step[];
		label?: string;
	}

	let { steps, label = 'Etapy' }: Props = $props();

	let active = $state(0);
	const uid = `flow-${Math.random().toString(36).slice(2, 7)}`;
	const progress = $derived(steps.length > 1 ? active / (steps.length - 1) : 0);

	const onkey = (e: KeyboardEvent) => {
		if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
		e.preventDefault();
		active = (active + (e.key === 'ArrowRight' ? 1 : -1) + steps.length) % steps.length;
		(document.getElementById(`${uid}-tab-${active}`) as HTMLElement | null)?.focus();
	};
</script>

<div class="flow" style="--n: {steps.length}; --p: {progress}">
	<div class="rail" aria-hidden="true"><span class="fill"></span></div>
	<div class="tabs" role="tablist" aria-label={label} tabindex="-1" onkeydown={onkey}>
		{#each steps as s, i}
			<button
				type="button"
				role="tab"
				id="{uid}-tab-{i}"
				aria-selected={active === i}
				aria-controls="{uid}-panel"
				tabindex={active === i ? 0 : -1}
				class="tab"
				class:done={i < active}
				onclick={() => (active = i)}
			>
				<span class="dot">{i + 1}</span>
				<span class="title">{s.title}</span>
			</button>
		{/each}
	</div>
	<div class="panel" role="tabpanel" id="{uid}-panel" aria-labelledby="{uid}-tab-{active}">
		{#key active}
			<div class="in">
				<h3 class="h3">{steps[active].title}</h3>
				<p class="body">{steps[active].text}</p>
			</div>
		{/key}
	</div>
</div>

<style>
	.flow {
		position: relative;
	}
	.tabs {
		position: relative;
		display: grid;
		grid-template-columns: repeat(var(--n), minmax(0, 1fr));
	}
	.rail {
		position: absolute;
		top: 27px;
		left: calc(50% / var(--n));
		right: calc(50% / var(--n));
		height: 3px;
		background: var(--line);
		border-radius: 0;
	}
	.fill {
		display: block;
		height: 100%;
		width: calc(var(--p) * 100%);
		background: var(--green);
		border-radius: 0;
		transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.tab {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 0 6px;
		border: 0;
		background: none;
		color: var(--muted);
		font: 500 1rem/1.25 var(--font-body);
		text-align: center;
		cursor: pointer;
	}
	.dot {
		width: 56px;
		height: 56px;
		border-radius: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg);
		border: 2px solid var(--line);
		font: 600 1.25rem var(--font-display);
		color: var(--muted);
		transition:
			background 0.25s ease,
			border-color 0.25s ease,
			color 0.25s ease,
			transform 0.25s ease;
	}
	.tab.done .dot {
		border-color: var(--green);
		color: var(--ink);
	}
	.tab[aria-selected='true'] {
		color: var(--ink);
	}
	.tab[aria-selected='true'] .dot {
		background: var(--green);
		border-color: var(--green);
		color: var(--ink);
		transform: scale(1.12);
	}
	.tab:hover .dot {
		border-color: var(--ink);
	}
	.panel {
		margin-top: 36px;
		padding: clamp(24px, 3vw, 40px);
		background: var(--card);
		border: 1.5px solid var(--card-line);
		border-radius: 0;
		border-bottom: 5px solid var(--green);
		min-height: 168px;
	}
	.in {
		display: flex;
		flex-direction: column;
		gap: 10px;
		max-width: 760px;
		animation: swap 0.3s ease both;
	}
	@keyframes swap {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}
	@media (max-width: 700px) {
		.title {
			display: none;
		}
		.dot {
			width: 44px;
			height: 44px;
			font-size: 1.0625rem;
		}
		.rail {
			top: 21px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.fill,
		.dot {
			transition: none;
		}
		.in {
			animation: none;
		}
	}
</style>
