<script lang="ts">
	/**
	 * Pas „W skrócie”: 3–4 najważniejsze punkty strony.
	 *
	 * panel   – jasne tło w kolorze akcentu, punkty w rzędzie
	 * cards   – białe karty z kolorową belką
	 * dark    – ciemny blok, etykiety w kolorze akcentu
	 * large   – bez tła, duży tekst z kolorową belką
	 * stripe  – lista wierszy: etykieta po lewej, tekst po prawej
	 * pills   – kompaktowe „pigułki” w jednym rzędzie
	 * media   – zdjęcie obok listy
	 */
	interface Props {
		items: { label: string; text: string }[];
		title?: string;
		variant?: 'panel' | 'cards' | 'dark' | 'large' | 'stripe' | 'pills' | 'media';
		photo?: { src: string; alt: string };
	}

	let { items, title = 'W skrócie', variant = 'panel', photo }: Props = $props();
</script>

<section class="wrap">
	<div class="box" data-variant={variant}>
		{#if variant === 'media' && photo}
			<img src={photo.src} alt={photo.alt} loading="lazy" />
		{/if}
		<div class="content">
			<ul>
				{#each items as it}
					<li>
						<span class="label">{it.label}</span>
						<span class="text">{it.text}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.box {
		margin-bottom: var(--section);
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.label {
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--muted);
	}
	.text {
		font-size: clamp(1.0625rem, 1.5vw, 1.25rem);
		line-height: 1.35;
		letter-spacing: -0.01em;
	}

	/* panel */
	[data-variant='panel'] .content {
		padding: clamp(24px, 3vw, 40px);
		background: var(--green-soft);
		border-radius: 0;
	}
	[data-variant='panel'] ul {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	[data-variant='panel'] li {
		padding: 4px 24px;
		border-left: 1.5px solid rgba(43, 43, 43, 0.2);
	}
	[data-variant='panel'] li:first-child {
		padding-left: 0;
		border-left: 0;
	}

	/* cards */
	[data-variant='cards'] ul {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 16px;
	}
	[data-variant='cards'] li {
		gap: 10px;
		padding: 28px 24px 32px;
		background: var(--card);
		border: 1.5px solid var(--card-line);
		border-top: 5px solid var(--green);
		border-radius: 0;
	}
	[data-variant='cards'] .text {
		font-size: clamp(1.1875rem, 1.7vw, 1.4375rem);
	}

	/* dark */
	[data-variant='dark'] .content {
		padding: clamp(28px, 4vw, 56px);
		background: var(--ink);
		color: var(--bg);
		border-radius: 0;
	}
	[data-variant='dark'] .eyebrow,
	[data-variant='dark'] .label {
		color: var(--green);
	}
	[data-variant='dark'] ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 32px 48px;
	}
	[data-variant='dark'] li {
		padding-top: 20px;
		border-top: 1px solid rgba(247, 245, 240, 0.25);
	}
	[data-variant='dark'] .text {
		font-size: clamp(1.375rem, 2.2vw, 1.875rem);
		letter-spacing: -0.02em;
	}

	/* large */
	[data-variant='large'] .content {
		padding-top: 28px;
		border-top: 1.5px solid var(--ink);
	}
	[data-variant='large'] ul {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 32px 24px;
	}
	[data-variant='large'] li {
		padding-left: 16px;
		border-left: 5px solid var(--green);
	}
	[data-variant='large'] .text {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.375rem, 2.2vw, 1.875rem);
		line-height: 1.15;
		letter-spacing: -0.025em;
	}

	/* stripe */
	[data-variant='stripe'] .content,
	[data-variant='media'] .content {
		background: var(--card);
		border: 1.5px solid var(--card-line);
		border-radius: 0;
		padding: clamp(24px, 3vw, 40px);
	}
	[data-variant='stripe'] li,
	[data-variant='media'] li {
		display: grid;
		grid-template-columns: minmax(110px, 200px) 1fr;
		align-items: baseline;
		gap: 16px;
		padding: 16px 0;
		border-top: 1px solid var(--line);
	}
	[data-variant='stripe'] li:first-child,
	[data-variant='media'] li:first-child {
		border-top: 0;
	}
	[data-variant='stripe'] .label,
	[data-variant='media'] .label {
		color: var(--ink);
		padding-left: 14px;
		border-left: 3px solid var(--green);
	}

	/* pills */
	[data-variant='pills'] .content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 20px;
	}
	[data-variant='pills'] ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	[data-variant='pills'] li {
		flex-direction: row;
		align-items: baseline;
		gap: 10px;
		padding: 10px 20px;
		background: var(--green-soft);
		border-radius: 0;
	}
	[data-variant='pills'] .label {
		font-size: 0.75rem;
		color: var(--ink);
		font-weight: 600;
	}
	[data-variant='pills'] .text {
		font-size: 1rem;
	}

	/* media */
	[data-variant='media'] {
		display: grid;
		grid-template-columns: 5fr 7fr;
		gap: clamp(20px, 3vw, 40px);
		align-items: stretch;
	}
	[data-variant='media'] img {
		width: 100%;
		height: 100%;
		min-height: 320px;
		object-fit: cover;
		border-radius: 0;
	}

	@media (max-width: 1000px) {
		[data-variant='panel'] ul,
		[data-variant='cards'] ul,
		[data-variant='large'] ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 24px 16px;
		}
		[data-variant='panel'] li:nth-child(odd) {
			padding-left: 0;
			border-left: 0;
		}
		[data-variant='media'] {
			grid-template-columns: 1fr;
		}
		[data-variant='media'] img {
			min-height: 0;
			height: 260px;
		}
	}
	@media (max-width: 560px) {
		[data-variant='panel'] ul,
		[data-variant='cards'] ul,
		[data-variant='large'] ul,
		[data-variant='dark'] ul {
			grid-template-columns: 1fr;
		}
		[data-variant='panel'] li {
			padding-left: 0;
			border-left: 0;
		}
		[data-variant='stripe'] li,
		[data-variant='media'] li {
			grid-template-columns: 1fr;
			gap: 6px;
		}
	}
</style>
