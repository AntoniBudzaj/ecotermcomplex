<script lang="ts">
	import ReadMore from './ReadMore.svelte';

	/** Nagłówek podstrony: etykieta, tytuł i opcjonalny lead po prawej. */
	interface Props {
		eyebrow?: string;
		title: string;
		lead?: string;
		/** na telefonie pokaż tylko pierwsze zdanie wstępu, resztę po kliknięciu */
		fold?: boolean;
	}

	let { title, lead = '', fold = false }: Props = $props();
</script>

<section class="wrap intro" class:split={lead}>
	<div class="stack" style="gap: 24px">
		<h1 class="h1">{title}</h1>
	</div>
	{#if lead}
		{#if fold}<ReadMore paras={[lead]} type="lead" />{:else}<p class="lead">{lead}</p>{/if}
	{/if}
</section>

<style>
	.intro {
		padding-top: clamp(1.75rem, 4vw, 4rem);
		padding-bottom: clamp(2rem, 6vw, 5.5rem);
	}
	.intro:not(.split) .stack {
		max-width: 960px;
	}
</style>
