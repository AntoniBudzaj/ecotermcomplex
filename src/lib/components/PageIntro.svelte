<script lang="ts">
	/** Nagłówek podstrony: etykieta, tytuł i opcjonalny lead po prawej. */
	interface Props {
		eyebrow: string;
		title: string;
		lead?: string;
	}

	let { eyebrow, title, lead = '' }: Props = $props();
</script>

<section class="wrap intro" class:split={lead}>
	<div class="stack" style="gap: 24px">
		<div class="eyebrow">{eyebrow}</div>
		<h1 class="h1">{title}</h1>
	</div>
	{#if lead}<p class="lead">{lead}</p>{/if}
</section>

<style>
	.intro {
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: clamp(48px, 6.2vw, 88px);
	}
	.intro:not(.split) .stack {
		max-width: 960px;
	}
</style>
