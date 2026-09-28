<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';

	const stats = [
		{ v: '[X] MWh', l: 'energii elektrycznej rocznie', d: 'Wystarczy dla około [X] gospodarstw domowych.' },
		{ v: '[X] MWh', l: 'ciepła rocznie', d: 'Ogrzewa [budynki, suszarnie, szklarnie] w sąsiedztwie.' },
		{ v: '[X] t', l: 'nawozu naturalnego', d: 'Wraca na pola zamiast nawozów sztucznych.' }
	];

	const flows = [
		{ t: 'Prąd do sieci', d: 'Energia elektryczna trafia do lokalnej sieci dystrybucyjnej. Biogazownia pracuje stabilnie, niezależnie od słońca i wiatru.' },
		{ t: 'Ciepło dla sąsiadów', d: 'Ciepło z chłodzenia silnika ogrzewa nasze zbiorniki, a nadwyżkę przesyłamy do [budynków, suszarni, szklarni] w okolicy.' },
		{ t: 'Nawóz na pola', d: 'Poferment ze zbiorników wraca do rolników jako naturalny nawóz, który zastępuje część nawozów sztucznych.' }
	];

	const perks = [
		{ t: 'Stabilna, lokalna energia', d: 'Biogazownia pracuje niezależnie od pogody, przez całą dobę. Stabilizuje lokalną sieć i uzupełnia energię ze słońca i wiatru.' },
		{ t: 'Mniej zapachów z pól', d: 'Poferment jest znacznie mniej uciążliwy zapachowo niż surowa gnojowica, więc nawożenie pól staje się mniej odczuwalne dla mieszkańców.' },
		{ t: 'Dochód dla rolników', d: 'Kupujemy surowce od okolicznych gospodarstw i odbieramy ich odpady. Pieniądze za energię zostają w regionie.' },
		{ t: 'Nowe miejsca pracy', d: 'Obsługa instalacji, transport surowców i serwis to stałe miejsca pracy na miejscu, poza dużymi miastami.' }
	];
</script>

<svelte:head>
	<title>Energia – BioEnergia</title>
</svelte:head>

<PageIntro
	eyebrow="Energia"
	title="Prąd, ciepło i nawóz z jednego źródła"
	lead="Biogaz wykorzystujemy w całości. Każdy metr sześcienny zamienia się w energię dla sieci, ciepło dla sąsiadów i nawóz dla pól."
/>

<section class="wrap">
	<div class="stats">
		{#each stats as s}
			<div class="stat">
				<span class="bar"></span>
				<span class="value">{s.v}</span>
				<span class="label">{s.l}</span>
				<span class="small">{s.d}</span>
			</div>
		{/each}
	</div>
</section>

<section class="wrap">
	<div class="two section">
		<Photo
			src="/images/biogazownia-rzepak.jpg"
			alt="Zbiorniki biogazowni z zielonymi kopułami, w tle pola i turbiny wiatrowe"
			caption="Jedno źródło, trzy strumienie energii · zdjęcie poglądowe"
			height="520px"
			position="72% center"
		/>
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Dokąd płynie energia</div>
			<h2 class="h2">Biogaz wykorzystany w całości</h2>
			<p class="body">
				Agregat kogeneracyjny wytwarza jednocześnie prąd i ciepło, dlatego sprawność całej instalacji
				jest znacznie wyższa niż w elektrowni, która oddaje ciepło do atmosfery.
			</p>
			<ul class="flows">
				{#each flows as f}
					<li>
						<span class="dot" style="margin-top: 8px"></span>
						<div>
							<h3 class="h3">{f.t}</h3>
							<p class="small">{f.d}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="wrap">
	<div class="split-rev" style="align-items: start">
		<h2 class="h2">Korzyści dla okolicy</h2>
		<ol class="perks">
			{#each perks as p, i}
				<li>
					<span class="n">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3 class="h3">{p.t}</h3>
						<p class="small">{p.d}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border-top: 1.5px solid var(--ink);
	}
	.stat {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 36px 32px 40px 0;
	}
	.bar {
		width: 40px;
		height: 4px;
		background: var(--green);
	}
	.value {
		font-size: clamp(44px, 4.2vw, 60px);
		letter-spacing: -0.035em;
		line-height: 1.05;
		padding-top: 12px;
	}
	.label {
		font-size: 17px;
		font-weight: 500;
	}
	.flows,
	.perks {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.flows li {
		display: grid;
		grid-template-columns: 20px 1fr;
		column-gap: 16px;
		padding: 24px 0;
		border-top: 1px solid var(--line);
	}
	.flows .h3,
	.perks .h3 {
		margin-bottom: 8px;
	}
	.perks li {
		display: grid;
		grid-template-columns: 56px 1fr;
		padding: 26px 0;
		border-top: 1px solid var(--line);
	}
	.n {
		font-size: 15px;
		color: var(--muted);
		padding-top: 4px;
	}
	@media (max-width: 860px) {
		.stats {
			grid-template-columns: 1fr;
		}
		.stat {
			padding: 28px 0;
			border-bottom: 1px solid var(--line);
		}
	}
</style>
