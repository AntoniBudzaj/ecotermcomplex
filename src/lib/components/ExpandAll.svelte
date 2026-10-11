<script lang="ts">
	import Button from './Button.svelte';
	import { expand } from '$lib/expand.svelte';

	interface Props {
		variant?: 'outline' | 'chip' | 'text';
		align?: 'start' | 'end';
	}

	let { variant = 'outline', align = 'end' }: Props = $props();
</script>

<div class="wrap bar" data-align={align}>
	<Button {variant} size="sm" aria-pressed={expand.all} onclick={() => (expand.all = !expand.all)}>
		{expand.all ? 'Zwiń wszystkie opisy' : 'Rozwiń wszystkie opisy'}
	</Button>
</div>

<style>
	.bar {
		display: flex;
		justify-content: flex-end;
		padding-bottom: 8px;
	}
	.bar[data-align='start'] {
		justify-content: flex-start;
	}
</style>
