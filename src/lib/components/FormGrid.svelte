<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Siatka formularza. Każde pole zajmuje całą szerokość,
	 * a pola z `half` układają się parami (gdy formularz ma co najmniej 30rem szerokości). Na telefonie
	 * wszystko jest w jednej kolumnie o tej samej szerokości.
	 */
	let { children }: { children: Snippet } = $props();
</script>

<div class="wrapper">
	<div class="grid">
		{@render children()}
	</div>
</div>

<style>
	.wrapper {
		container-type: inline-size;
		width: 100%;
		min-width: 0;
	}
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		column-gap: 1rem;
		row-gap: 0;
		width: 100%;
		min-width: 0;
	}
	/* dwie kolumny tylko wtedy, gdy sam formularz ma dość miejsca */
	@container (min-width: 30rem) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.grid :global([data-span='full']) {
			grid-column: 1 / -1;
		}
	}
</style>
