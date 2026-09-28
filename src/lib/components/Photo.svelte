<script lang="ts">
	/** Zdjęcie z zaokrąglonymi rogami i podpisem. */
	interface Props {
		src: string;
		alt: string;
		caption?: string;
		height?: string;
		position?: string;
	}

	let { src, alt, caption = '', height = '400px', position = 'center' }: Props = $props();
</script>

<figure>
	<img {src} {alt} loading="lazy" style:--h={height} style:object-position={position} />
	{#if caption}<figcaption>{caption}</figcaption>{/if}
</figure>

<style>
	figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	img {
		width: 100%;
		height: var(--h);
		object-fit: cover;
		border-radius: var(--radius);
	}
	figcaption {
		font-size: 13.5px;
		color: var(--caption);
	}
	@media (max-width: 860px) {
		img {
			height: min(var(--h), 70vw);
		}
	}
</style>
