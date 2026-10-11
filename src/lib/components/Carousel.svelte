<script lang="ts">
	import { untrack } from 'svelte';
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';

	/**
	 * Karuzela slajdów przewijana w bok (scroll-snap) ze strzałkami,
	 * wskaźnikiem, przeciąganiem myszą i obsługą klawiatury.
	 * Aktywny slajd jest wyróżniony, pozostałe lekko przygaszone.
	 * Każdy bezpośredni element potomny to jeden slajd.
	 */
	interface Props {
		children: Snippet;
		label?: string;
	}

	let { children, label = 'Karuzela' }: Props = $props();

	let track: HTMLElement | undefined = $state();
	let count = $state(0);
	let shown = $state<number[]>([]);
	let canPrev = $state(false);
	let canNext = $state(false);
	let dragging = $state(false);

	const slides = () => (track ? (Array.from(track.children) as HTMLElement[]) : []);

	/** pozycja przewinięcia, przy której slajd i jest przyklejony do lewej krawędzi */
	const offsetOf = (el: HTMLElement) => {
		const t = track!;
		// offsetLeft nie uwzględnia transformacji (skalowania nieaktywnych slajdów)
		return el.offsetLeft - t.offsetLeft - parseFloat(getComputedStyle(t).paddingLeft);
	};

	/** indeksy slajdów w całości widocznych w oknie karuzeli */
	const visible = () => {
		const t = track!;
		const out: number[] = [];
		slides().forEach((el, i) => {
			const rel = el.offsetLeft - t.offsetLeft - t.scrollLeft;
			if (rel >= -2 && rel + el.offsetWidth <= t.clientWidth + 2) out.push(i);
		});
		if (!out.length) {
			// np. slajd szerszy niż okno: weź najbliższy
			let best = 0;
			let bestDist = Infinity;
			slides().forEach((el, i) => {
				const d = Math.abs(offsetOf(el) - t.scrollLeft);
				if (d < bestDist) {
					bestDist = d;
					best = i;
				}
			});
			out.push(best);
		}
		return out;
	};

	const sync = () => {
		if (!track) return;
		const s = slides();
		count = s.length;
		canPrev = track.scrollLeft > 4;
		canNext = track.scrollLeft + track.clientWidth < track.scrollWidth - 4;
		shown = visible();
		s.forEach((el, i) => el.toggleAttribute('data-active', shown.includes(i)));
	};

	const go = (i: number) => {
		if (!track) return;
		const s = slides();
		const el = s[Math.max(0, Math.min(i, s.length - 1))];
		if (!el) return;
		track.scrollTo({ left: Math.max(0, offsetOf(el)), behavior: 'smooth' });
		// zdarzenie scroll nie zawsze się pojawia (np. karta w tle), więc odśwież stan także po czasie
		setTimeout(sync, 450);
	};

	/** każde kliknięcie przesuwa widok o jedną kartę względem pierwszej widocznej */
	const step = (dir: 1 | -1) => {
		const first = visible()[0] ?? 0;
		go(first + dir);
	};

	const onkeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			step(1);
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			step(-1);
		}
	};

	// przeciąganie myszą (na dotyku działa natywne przewijanie)
	let drag: { x: number; left: number; moved: boolean } | null = null;
	const onpointerdown = (e: PointerEvent) => {
		if (e.pointerType !== 'mouse' || e.button !== 0 || !track) return;
		drag = { x: e.clientX, left: track.scrollLeft, moved: false };
	};
	const onpointermove = (e: PointerEvent) => {
		if (!drag || !track) return;
		const dx = e.clientX - drag.x;
		if (!drag.moved && Math.abs(dx) > 5) {
			drag.moved = true;
			dragging = true;
			track.setPointerCapture(e.pointerId);
		}
		if (drag.moved) track.scrollLeft = drag.left - dx;
	};
	const onpointerup = () => {
		if (!drag || !track) return;
		const moved = drag.moved;
		drag = null;
		dragging = false;
		if (moved) go(visible()[0] ?? 0);
	};

	$effect(() => {
		if (!track) return;
		untrack(sync);
		const ro = new ResizeObserver(() => untrack(sync));
		ro.observe(track);
		return () => ro.disconnect();
	});
</script>

<div class="carousel">
	<div class="head">
		<div class="dots">
			{#each Array(count) as _, i}
				<button type="button" class="dot-i" class:on={shown.includes(i)} aria-label="Przejdź do slajdu {i + 1}" onclick={() => go(i)}></button>
			{/each}
		</div>
		<div class="arrows">
			<Button variant="icon" aria-label="Poprzedni" disabled={!canPrev} onclick={() => step(-1)}>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 3 L5 9 L11 15" /></svg>
			</Button>
			<Button variant="icon" aria-label="Następny" disabled={!canNext} onclick={() => step(1)}>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3 L13 9 L7 15" /></svg>
			</Button>
		</div>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
	<div
		class="track"
		bind:this={track}
		onscroll={sync}
		{onkeydown}
		{onpointerdown}
		{onpointermove}
		{onpointerup}
		onpointercancel={onpointerup}
		data-dragging={dragging || undefined}
		role="region"
		aria-label={label}
		tabindex="0"
	>
		{@render children()}
	</div>
</div>

<style>
	.carousel {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.dots {
		display: flex;
		gap: 0.375rem;
	}
	.dot-i {
		width: 1.25rem;
		height: 4px;
		padding: 0;
		border: 0;
		cursor: pointer;
		background: var(--line);
		transition:
			background 0.3s ease,
			width 0.3s ease;
	}
	.dot-i.on {
		width: 2.5rem;
		background: var(--green);
	}
	.arrows {
		display: flex;
		gap: 0.5rem;
	}
	.arrows :global(button:disabled) {
		opacity: 0.35;
		cursor: default;
	}
	.track {
		display: flex;
		align-items: stretch;
		gap: 1.25rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
		margin-inline: calc(var(--pad) * -1);
		padding-inline: var(--pad);
		scroll-padding-inline: var(--pad);
		padding-block: 0.5rem;
	}
	.track {
		cursor: grab;
	}
	.track[data-dragging] {
		cursor: grabbing;
		scroll-snap-type: none;
		user-select: none;
	}
	.track[data-dragging] > :global(*) {
		pointer-events: none;
	}
	.track::-webkit-scrollbar {
		display: none;
	}
	.track > :global(*) {
		flex: 0 0 clamp(17rem, 42vw, 34rem);
		scroll-snap-align: start;
		opacity: 0.55;
		transform: scale(0.96);
		transform-origin: left center;
		transition:
			opacity 0.4s ease,
			transform 0.4s ease;
	}
	.track > :global([data-active]) {
		opacity: 1;
		transform: none;
	}
	@media (max-width: 700px) {
		.track > :global(*) {
			flex-basis: 82%;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.track > :global(*),
		.dot-i {
			transition: none;
		}
	}
</style>
