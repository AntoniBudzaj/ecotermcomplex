<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import type { Section } from '$lib/content';

	let { data } = $props();
	const page = $derived(data.page);
	const num = (i: number) => String(i + 1).padStart(2, '0');

	let openPerson = $state<number | null>(null);

	const pipeline = ['Pomiar', 'Dane', 'Model', 'Decyzja', 'Walidacja'];
</script>

{#snippet body(s: Section)}
	{#each s.paras ?? [] as p}
		<p class="body">{p}</p>
	{/each}
	{#if s.items}
		<ul class="items">
			{#each s.items as item}
				<li>
					<span class="dot"></span>
					<span class="body">{item}</span>
				</li>
			{/each}
		</ul>
	{/if}
	{#if s.note}<p class="note">{s.note}</p>{/if}
{/snippet}

<svelte:head>
	<title>{page.eyebrow} – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

{#if page.photo}
	<div class="wrap" style="margin-bottom: var(--section)">
		<Photo
			src={page.photo.src}
			alt={page.photo.alt}
			caption={page.photo.caption}
			height="440px"
			position={page.photo.position}
		/>
	</div>
{/if}

{#if page.layout === 'editorial'}
	<section class="wrap">
		<p class="quote">{page.tagline}</p>
		{#each page.sections as s}
			<div class="split-rev block rule" style="align-items: start">
				<h2 class="h2">{s.title}</h2>
				<div class="stack" style="gap: 18px">{@render body(s)}</div>
			</div>
		{/each}
	</section>
{:else if page.layout === 'timeline'}
	<section class="wrap">
		<ol class="timeline">
			{#each page.sections as s, i}
				<li>
					<span class="marker">{num(i)}</span>
					<div class="stack" style="gap: 14px">
						<h2 class="h2 tl-title">{s.title}</h2>
						{@render body(s)}
					</div>
				</li>
			{/each}
		</ol>
	</section>
{:else if page.layout === 'cards'}
	<section class="wrap">
		<div class="grid-2">
			{#each page.sections as s, i}
				<article class="card tile" class:wide={i === 0}>
					<span class="idx">{num(i)}</span>
					<h2 class="h3 tile-title">{s.title}</h2>
					{@render body(s)}
				</article>
			{/each}
		</div>
	</section>
{:else if page.layout === 'accordion'}
	<section class="wrap">
		<div class="acc rule">
			{#each page.sections as s, i}
				<details open={i === 0}>
					<summary>
						<span class="idx">{num(i)}</span>
						<h2 class="h3 acc-title">{s.title}</h2>
						<svg class="chev" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3 6.5 L9 12.5 L15 6.5" /></svg>
					</summary>
					<div class="acc-body stack" style="gap: 16px">{@render body(s)}</div>
				</details>
			{/each}
		</div>
	</section>
{:else if page.layout === 'pipeline'}
	<section class="wrap">
		<div class="pipe rule">
			<div class="eyebrow">Ścieżka badawcza</div>
			<ol class="flow">
				{#each pipeline as step, i}
					<li><span class="idx">{num(i)}</span>{step}</li>
				{/each}
			</ol>
		</div>
		<div class="grid-2 research">
			{#each page.sections as s, i}
				<article class="rule-col r-item" class:wide={i === page.sections.length - 1 && page.sections.length % 2 === 1}>
					<h2 class="h3 r-title">{s.title}</h2>
					{@render body(s)}
				</article>
			{/each}
		</div>
	</section>
{:else if page.layout === 'bands'}
	<section class="bands">
		{#each page.sections as s, i}
			<div class="band" class:soft={i % 2 === 0}>
				<div class="wrap band-in" class:flip={i % 2 === 1}>
					<h2 class="h2">{s.title}</h2>
					<div class="stack" style="gap: 18px">{@render body(s)}</div>
				</div>
			</div>
		{/each}
	</section>
{:else if page.layout === 'knowledge'}
	<section class="wrap">
		<div class="intro-note">{@render body(page.sections[0])}</div>
		<div class="grid-3">
			{#each page.sections.slice(1, -2) as s}
				<article class="card topic">
					<span class="dot"></span>
					<h2 class="h3">{s.title}</h2>
					{#each s.paras ?? [] as p}<p class="small">{p}</p>{/each}
					<ul class="chips">
						{#each s.items ?? [] as item}<li>{item}</li>{/each}
					</ul>
					{#if s.note}<p class="note">{s.note}</p>{/if}
				</article>
			{/each}
		</div>
		<div class="split-rev block rule" style="align-items: start">
			<div class="stack" style="gap: 14px">
				<h2 class="h2">{page.sections.at(-2)?.title}</h2>
				{#each page.sections.at(-2)?.paras ?? [] as p}<p class="body">{p}</p>{/each}
			</div>
			<span></span>
		</div>
		<div class="split-rev block rule" style="align-items: start">
			<h2 class="h2">{page.sections.at(-1)?.title}</h2>
			<ol class="articles">
				{#each page.sections.at(-1)?.items ?? [] as a, i}
					<li><span class="idx">{num(i)}</span><span class="body">{a}</span></li>
				{/each}
			</ol>
		</div>
	</section>
{/if}

{#if page.team}
	<section class="wrap">
		<div class="team rule">
			<div class="stack" style="gap: 20px">
				<div class="eyebrow">Ludzie</div>
				<h2 class="h2">{page.team.title}</h2>
			</div>
			<div class="cols-3">
				{#each page.team.people as person, i}
					<article class="person">
						{#if person.photo}
							<img src={person.photo} alt={person.name} loading="lazy" />
						{:else}
							<div class="placeholder portrait">[Zdjęcie]</div>
						{/if}
						<h3 class="h3 pname">{person.name}</h3>
						<p class="prole">{person.role}</p>
						<p class="small">
							{person.bio}{#if openPerson === i} {person.more}{/if}
						</p>
						<button
							type="button"
							class="more-btn"
							aria-expanded={openPerson === i}
							onclick={() => (openPerson = openPerson === i ? null : i)}
						>
							{openPerson === i ? 'Zwiń' : 'Czytaj więcej'}
						</button>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="section">
	<CtaBand text={page.cta.text} href="/kontakt/" label={page.cta.label} />
</section>

<style>
	.block {
		padding-block: clamp(36px, 4.4vw, 64px);
	}
	.items {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.items li {
		display: flex;
		gap: 16px;
	}
	.items .dot {
		margin-top: 10px;
	}
	.note {
		font-size: 15px;
		line-height: 1.6;
		color: var(--caption);
		padding-left: 16px;
		border-left: 2px solid var(--green);
	}
	.idx {
		font-size: 15px;
		color: var(--muted);
		font-variant-numeric: tabular-nums;
	}

	/* team */
	.team {
		padding-block: var(--section) 0;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.person {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}
	.portrait,
	.person img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: var(--radius);
	}
	.pname {
		font-size: 24px;
		margin-top: 12px;
	}
	.prole {
		font-size: 15px;
		font-weight: 500;
		color: var(--muted);
		padding-bottom: 6px;
		border-bottom: 2px solid var(--green);
		margin-bottom: 4px;
	}
	.more-btn {
		margin-top: 6px;
		padding: 0;
		border: 0;
		background: none;
		color: var(--ink);
		font: 500 16px 'DM Sans', sans-serif;
		text-decoration: underline;
		text-underline-offset: 5px;
		text-decoration-color: var(--green);
		text-decoration-thickness: 2px;
		cursor: pointer;
	}

	/* editorial */
	.quote {
		font-size: clamp(22px, 2.2vw, 32px);
		line-height: 1.4;
		letter-spacing: -0.02em;
		max-width: 900px;
		padding-bottom: clamp(36px, 4.4vw, 64px);
	}

	/* timeline */
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0 0 0 0;
		position: relative;
	}
	.timeline::before {
		content: '';
		position: absolute;
		left: 23px;
		top: 12px;
		bottom: 12px;
		width: 2px;
		background: var(--line);
	}
	.timeline li {
		display: grid;
		grid-template-columns: 48px 1fr;
		column-gap: clamp(20px, 3vw, 48px);
		padding-bottom: clamp(40px, 5vw, 72px);
		position: relative;
	}
	.marker {
		width: 48px;
		height: 48px;
		border-radius: 24px;
		background: var(--green);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 15px;
		position: relative;
	}
	.tl-title {
		font-size: clamp(26px, 2.6vw, 36px);
		max-width: 720px;
	}
	.timeline :global(.body),
	.timeline .items {
		max-width: 760px;
	}

	/* cards + research grids */
	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
	}
	.tile {
		gap: 16px;
		padding: clamp(24px, 2.8vw, 40px);
	}
	.tile.wide {
		grid-column: 1 / -1;
		background: var(--green-soft);
		border-color: var(--green-soft);
	}
	.tile-title {
		font-size: 24px;
	}
	.tile :global(.body) {
		font-size: 16.5px;
	}

	/* accordion */
	details {
		border-bottom: 1.5px solid var(--line);
	}
	summary {
		display: grid;
		grid-template-columns: 56px 1fr 24px;
		align-items: center;
		padding: 28px 0;
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	.acc-title {
		font-size: clamp(20px, 2vw, 28px);
	}
	.chev {
		transition: transform 0.2s ease;
	}
	details[open] .chev {
		transform: rotate(180deg);
	}
	.acc-body {
		padding: 0 24px 36px 56px;
		max-width: 880px;
	}

	/* pipeline */
	.pipe {
		padding-block: 36px clamp(36px, 4vw, 56px);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.flow {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 12px;
	}
	.flow li {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 18px 20px;
		border: 1.5px solid var(--ink);
		border-radius: 16px;
		font-size: 19px;
		font-weight: 500;
		position: relative;
	}
	.flow li:not(:last-child)::after {
		content: '→';
		position: absolute;
		right: -17px;
		top: 50%;
		transform: translateY(-50%);
		background: var(--bg);
		font-weight: 400;
		z-index: 1;
		line-height: 1;
		padding: 2px 0;
	}
	.research {
		gap: 48px 40px;
		padding-bottom: var(--section);
	}
	.r-item {
		gap: 14px;
	}
	.r-item.wide {
		grid-column: 1 / -1;
	}
	.r-title {
		font-size: 24px;
	}

	/* bands */
	.band {
		padding-block: clamp(44px, 5.5vw, 80px);
	}
	.band.soft {
		background: var(--green-soft);
	}
	.band-in {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: clamp(40px, 6.6vw, 96px);
		align-items: start;
	}
	.band-in.flip {
		grid-template-columns: 7fr 5fr;
	}
	.band-in.flip h2 {
		order: 2;
	}
	.band-in.flip .stack {
		order: 1;
	}

	/* knowledge */
	.intro-note {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 820px;
		padding-bottom: clamp(32px, 4vw, 56px);
	}
	.grid-3 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		padding-bottom: clamp(32px, 4vw, 56px);
	}
	.topic {
		gap: 12px;
	}
	.chips {
		list-style: none;
		margin: 4px 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chips li {
		padding: 7px 14px;
		border-radius: 999px;
		background: var(--green-soft);
		font-size: 14.5px;
		line-height: 1.4;
	}
	.articles {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.articles li {
		display: grid;
		grid-template-columns: 48px 1fr;
		padding: 18px 0;
		border-top: 1px solid var(--line);
	}

	@media (max-width: 860px) {
		.grid-2,
		.grid-3 {
			grid-template-columns: 1fr;
		}
		.flow {
			grid-template-columns: 1fr;
		}
		.flow li:not(:last-child)::after {
			content: '↓';
			right: auto;
			left: 20px;
			top: auto;
			bottom: -19px;
			transform: none;
		}
		.band-in,
		.band-in.flip {
			grid-template-columns: 1fr;
			row-gap: 20px;
		}
		.band-in.flip h2,
		.band-in.flip .stack {
			order: 0;
		}
		.acc-body {
			padding-inline: 0;
		}
		summary {
			grid-template-columns: 40px 1fr 24px;
		}
	}
</style>
