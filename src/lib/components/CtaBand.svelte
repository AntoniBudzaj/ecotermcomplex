<script lang="ts">
	import Button from './Button.svelte';

	interface Props {
		text: string;
		href: string;
		label: string;
	}

	let { text, href, label }: Props = $props();
</script>

<div class="wrap">
	<div class="band">
		<p>{text}</p>
		<Button {href} class="cta-btn">{label}</Button>
	</div>
</div>

<style>
	.band {
		padding: clamp(40px, 5vw, 72px) clamp(28px, 5.5vw, 80px);
		background: var(--green);
		border-radius: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 32px 64px;
	}
	p {
		font-size: clamp(1.5rem, 2.4vw, 2.125rem);
		line-height: 1.3;
		letter-spacing: -0.02em;
		max-width: 780px;
	}
	.band :global(.cta-btn) {
		flex-shrink: 0;
	}
	@media (max-width: 760px) {
		.band {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
