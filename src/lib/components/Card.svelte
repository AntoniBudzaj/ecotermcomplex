<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Karta z tłem w jednym z kolorów.
	 *
	 * white – biała z cienką ramką
	 * soft  – jasny odcień zieleni
	 * green – pełna zieleń (var(--green))
	 * ink   – ciemna, jasny tekst
	 * sand  – ciepły beż, ciemniejszy od tła strony
	 */
	interface Props {
		tone?: 'white' | 'soft' | 'green' | 'ink' | 'sand';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	}

	let { tone = 'white', size = 'md', class: className = '', children, ...rest }: Props = $props();
</script>

<div class="card-block {className}" data-tone={tone} data-size={size} {...rest}>
	{@render children()}
</div>

<style>
	.card-block {
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
		border-radius: 0;
		border: 1.5px solid transparent;
	}
	.card-block[data-size='sm'] {
		padding: 1.25rem;
	}
	.card-block[data-size='md'] {
		padding: clamp(1.25rem, 2.6vw, 2.25rem);
	}
	.card-block[data-size='lg'] {
		padding: clamp(1.5rem, 4vw, 3.5rem);
		border-radius: 0;
	}

	.card-block[data-tone='white'] {
		background: var(--card);
		border-color: var(--card-line);
	}
	.card-block[data-tone='soft'] {
		background: var(--green-soft);
	}
	.card-block[data-tone='green'] {
		background: var(--green);
		--muted: #2b2b2b;
		--caption: #2b2b2b;
	}
	.card-block[data-tone='ink'] {
		background: #2b2b2b;
		color: #f7f5f0;
		--ink: #f7f5f0;
		--muted: #d6d2c7;
		--caption: #d6d2c7;
		--line: rgba(247, 245, 240, 0.25);
	}
	.card-block[data-tone='sand'] {
		background: #ece6d8;
	}
</style>
