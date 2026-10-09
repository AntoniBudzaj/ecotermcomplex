<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	let { data } = $props();
	const page = $derived(data.page);
</script>

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

<section class="wrap">
	{#each page.sections as s}
		<div class="split-rev block rule" style="align-items: start">
			<h2 class="h2">{s.title}</h2>
			<div class="stack" style="gap: 18px">
				{#each s.paras ?? [] as p}
					<p class="body">{p}</p>
				{/each}
				{#if s.items}
					<ul class="items">
						{#each s.items as item}
							<li>
								<span class="dot" style="margin-top: 10px"></span>
								<span class="body">{item}</span>
							</li>
						{/each}
					</ul>
				{/if}
				{#if s.note}<p class="note">{s.note}</p>{/if}
			</div>
		</div>
	{/each}
</section>

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
	.note {
		font-size: 15px;
		line-height: 1.6;
		color: var(--caption);
		padding-left: 16px;
		border-left: 2px solid var(--green);
	}
</style>
