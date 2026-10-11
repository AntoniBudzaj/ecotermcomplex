<script lang="ts">
	/**
	 * Własna lista rozwijana zamiast natywnego <select>.
	 * Wzorzec combobox + listbox: strzałki, Home/End, Enter/Spacja,
	 * Escape, wpisywanie liter oraz zamykanie po kliknięciu poza listą.
	 * Wartość trafia do formularza przez ukryte pole `name`.
	 */
	interface Props {
		id: string;
		name: string;
		options: string[];
		value?: string;
		describedby?: string;
	}

	let { id, name, options, value = $bindable(''), describedby }: Props = $props();

	let root: HTMLElement | undefined = $state();
	let list: HTMLElement | undefined = $state();
	let open = $state(false);
	let cursor = $state(0);
	let typed = '';
	let typedTimer: ReturnType<typeof setTimeout> | undefined;

	const current = $derived(value || options[0] || '');
	const selectedIndex = $derived(Math.max(0, options.indexOf(current)));
	const listId = $derived(`${id}-list`);

	const show = () => {
		cursor = selectedIndex;
		open = true;
	};
	const hide = () => (open = false);
	const pick = (i: number) => {
		value = options[i];
		hide();
	};
	const move = (i: number) => {
		cursor = Math.max(0, Math.min(options.length - 1, i));
	};

	const onkeydown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				open ? move(cursor + 1) : show();
				break;
			case 'ArrowUp':
				e.preventDefault();
				open ? move(cursor - 1) : show();
				break;
			case 'Home':
				if (open) {
					e.preventDefault();
					move(0);
				}
				break;
			case 'End':
				if (open) {
					e.preventDefault();
					move(options.length - 1);
				}
				break;
			case 'Enter':
			case ' ':
				e.preventDefault();
				open ? pick(cursor) : show();
				break;
			case 'Escape':
				if (open) {
					e.preventDefault();
					hide();
				}
				break;
			case 'Tab':
				hide();
				break;
			default:
				if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
					typed += e.key.toLowerCase();
					clearTimeout(typedTimer);
					typedTimer = setTimeout(() => (typed = ''), 600);
					const from = open ? cursor + (typed.length === 1 ? 1 : 0) : selectedIndex + (typed.length === 1 ? 1 : 0);
					const order = [...options.keys()].map((_, k) => (from + k) % options.length);
					const hit = order.find((i) => options[i].toLowerCase().startsWith(typed));
					if (hit !== undefined) {
						if (open) cursor = hit;
						else value = options[hit];
					}
				}
		}
	};

	// zamknij po kliknięciu poza komponentem
	$effect(() => {
		if (!open) return;
		const away = (e: PointerEvent) => {
			if (root && !root.contains(e.target as Node)) hide();
		};
		window.addEventListener('pointerdown', away);
		return () => window.removeEventListener('pointerdown', away);
	});

	// utrzymaj wskazaną opcję w widoku listy
	$effect(() => {
		if (!open || !list) return;
		(list.children[cursor] as HTMLElement | undefined)?.scrollIntoView({ block: 'nearest' });
	});
</script>

<div class="dd" bind:this={root} data-open={open || undefined}>
	<input type="hidden" {name} value={current} />
	<button
		type="button"
		{id}
		class="trigger"
		role="combobox"
		aria-haspopup="listbox"
		aria-expanded={open}
		aria-controls={listId}
		aria-activedescendant={open ? `${id}-opt-${cursor}` : undefined}
		aria-describedby={describedby}
		onclick={() => (open ? hide() : show())}
		{onkeydown}
	>
		<span class="current">{current}</span>
		<svg class="chev" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6.5 L9 12.5 L15 6.5" /></svg>
	</button>

	{#if open}
		<ul class="menu" role="listbox" id={listId} bind:this={list} tabindex="-1" aria-labelledby={id}>
			{#each options as o, i}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<li
					id="{id}-opt-{i}"
					role="option"
					aria-selected={o === current}
					class:cursor={i === cursor}
					onclick={() => pick(i)}
					onpointermove={() => (cursor = i)}
				>
					<span>{o}</span>
					{#if o === current}
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5 L6.5 12 L13 4.5" /></svg>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dd {
		position: relative;
		width: 100%;
		min-width: 0;
	}
	.trigger {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		width: 100%;
		height: 3.25rem;
		padding: 0 1rem;
		border: 1.5px solid var(--ink);
		border-radius: 0;
		background: var(--bg);
		color: var(--ink);
		font: 400 1rem/1.25 var(--font-body);
		text-align: left;
		cursor: pointer;
		transition:
			border-color 150ms ease,
			box-shadow 150ms ease;
	}
	.trigger:focus-visible,
	.dd[data-open] .trigger {
		outline: none;
		border-color: var(--green);
		box-shadow: 0 0 0 1px var(--green);
	}
	.current {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.chev {
		flex: none;
		transition: transform 0.2s ease;
	}
	.dd[data-open] .chev {
		transform: rotate(180deg);
	}

	.menu {
		position: absolute;
		z-index: 30;
		top: calc(100% + 4px);
		left: 0;
		right: 0;
		max-height: 16rem;
		overflow-y: auto;
		margin: 0;
		padding: 0.25rem 0;
		list-style: none;
		background: var(--bg);
		border: 1.5px solid var(--ink);
		animation: drop 0.15s ease both;
	}
	.menu li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border-left: 3px solid transparent;
		font-size: 1rem;
		line-height: 1.3;
		color: var(--ink);
		cursor: pointer;
	}
	.menu li.cursor {
		background: var(--green-soft);
	}
	.menu li[aria-selected='true'] {
		font-weight: 500;
	}
	@keyframes drop {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.menu {
			animation: none;
		}
		.chev,
		.trigger {
			transition: none;
		}
	}
</style>
