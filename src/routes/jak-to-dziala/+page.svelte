<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const steps = [
		{
			title: 'Surowce',
			text: 'Gnojowica, obornik, kiszonki i resztki z przetwórstwa trafiają do nas z okolicznych gospodarstw. Każdą dostawę ważymy i sprawdzamy przed przyjęciem.',
			fill: 'M20 60 C 30 38, 58 38, 68 60 Z',
			icon: 'M8 60 H 88 M20 60 C 30 38, 58 38, 68 60 M78 60 V 26 M78 34 C 73 31 73 26 78 23 C 83 26 83 31 78 34 M78 44 C 73 41 73 36 78 33 C 83 36 83 41 78 44'
		},
		{
			title: 'Fermentacja',
			text: 'W szczelnym, podgrzewanym zbiorniku bakterie przez kilka tygodni wytwarzają biogaz. Proces przebiega bez dostępu powietrza.',
			fill: 'M22 34 C 26 14, 70 14, 74 34 C 60 38, 36 38, 22 34 Z',
			icon: 'M8 60 H 88 M22 34 V 60 M74 34 V 60 M22 34 C 26 14, 70 14, 74 34 M22 34 C 36 38, 60 38, 74 34 M38 50 H 40 M50 46 H 52 M58 52 H 60'
		},
		{
			title: 'Kogeneracja',
			text: 'Oczyszczony biogaz zasila silnik gazowy, który jednocześnie wytwarza energię elektryczną oraz ciepło.',
			fill: 'M44 40 L 36 50 H 44 L 40 58 L 52 46 H 44 L 48 40 Z',
			icon: 'M8 60 H 88 M16 60 V 34 H 70 V 60 M62 34 V 12 M68 34 V 12 M59 12 H 71 M44 40 L 36 50 H 44 L 40 58 L 52 46 H 44 L 48 40 Z'
		},
		{
			title: 'Prąd i ciepło',
			text: 'Prąd płynie do lokalnej sieci, a ciepło ogrzewa budynki, suszarnie i szklarnie w okolicy.',
			fill: 'M66 44 L 78 34 L 90 44 V 60 H 66 Z',
			icon: 'M8 60 H 92 M34 10 L 22 60 M34 10 L 46 60 M26 26 H 42 M24 40 H 44 M16 18 H 52 M66 44 L 78 34 L 90 44 V 60 M66 44 V 60 M74 60 V 50 H 82 V 60'
		},
		{
			title: 'Nawóz',
			text: 'Przefermentowana masa to wartościowy, mniej uciążliwy zapachowo nawóz, który wraca na pola dostawców.',
			fill: 'M48 34 C 40 32 37 26 39 20 C 45 22 48 27 48 34 Z M48 30 C 53 25 57 23 62 18 C 60 25 55 29 48 30 Z',
			icon: 'M8 60 H 88 M14 52 H 82 M22 44 H 74 M48 44 V 20 M48 34 C 40 32 37 26 39 20 C 45 22 48 27 48 34 M48 30 C 53 25 57 23 62 18 C 60 25 55 29 48 30'
		}
	];

	const safety = [
		{ title: 'Szczelne zbiorniki', text: 'Fermentacja zachodzi w zamkniętych komorach, więc zapachy i gaz nie wydostają się na zewnątrz.' },
		{ title: 'Stały monitoring', text: 'Automatyka reaguje na zmiany parametrów, a o nietypowych odczytach od razu dowiaduje się operator.' },
		{ title: 'Pochodnia awaryjna', text: 'Gdy agregat jest w przeglądzie, nadmiar biogazu jest bezpiecznie spalany w pochodni.' }
	];
</script>

<svelte:head>
	<title>Jak to działa – BioEnergia</title>
</svelte:head>

<PageIntro
	eyebrow="Jak to działa"
	title="Od pola do gniazdka w pięciu krokach"
	lead="Biogazownia działa jak duży, szczelny żołądek. Bakterie rozkładają materię organiczną bez dostępu powietrza, a powstały biogaz zamieniamy na prąd i ciepło."
/>

<section class="wrap">
	<ol class="steps">
		{#each steps as s, i}
			<li>
				<svg viewBox="0 0 96 72" width="96" height="72" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d={s.fill} fill="var(--green)" stroke="none" />
					<path d={s.icon} />
				</svg>
				<span class="num">{i + 1}</span>
				<h2 class="h3">{s.title}</h2>
				<p class="small">{s.text}</p>
			</li>
		{/each}
	</ol>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/zbiornik-dron.jpg"
			alt="Zbiornik fermentacyjny z zieloną kopułą membranową, widok z drona"
			caption="Zbiornik fermentacyjny z dachem membranowym · zdjęcie poglądowe"
			height="420px"
			position="center 40%"
		/>
		<div class="stack">
			<h2 class="h2">Fermentacja w skrócie</h2>
			<p class="body">
				W zbiorniku utrzymujemy stałą temperaturę i powoli mieszamy wsad. Przez kilka tygodni
				mikroorganizmy rozkładają go na biogaz, głównie metan i dwutlenek węgla, który zbiera się pod
				elastyczną kopułą.
			</p>
			<p class="body">
				Mieszadła zapobiegają tworzeniu się kożucha, a podgrzewanie ścian utrzymuje bakterie w
				optymalnych warunkach przez cały rok, także zimą.
			</p>
			<div class="facts">
				<div class="rule-col"><span class="fact">[X] dni</span><span class="small">średni czas fermentacji</span></div>
				<div class="rule-col"><span class="fact">[X]%</span><span class="small">metanu w biogazie</span></div>
			</div>
		</div>
	</div>
</section>

<section class="wrap">
	<div class="section rule stack" style="gap: 44px">
		<div class="split-rev">
			<div class="stack" style="gap: 20px">
				<div class="eyebrow">Bezpieczeństwo</div>
				<h2 class="h2">Proces pod stałą kontrolą</h2>
			</div>
			<p class="body">
				Biogazownia pracuje w trybie ciągłym, 24 godziny na dobę. Czujniki na bieżąco mierzą
				temperaturę, ciśnienie i skład gazu, a operator ma podgląd instalacji także zdalnie.
			</p>
		</div>
		<div class="cols-3">
			{#each safety as item}
				<div class="rule-col">
					<h3 class="h3">{item.title}</h3>
					<p class="small">{item.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="wrap" style="margin-bottom: 24px">
	<Photo
		src="/images/biogazownia-rzepak.jpg"
		alt="Biogazownia z zielonymi kopułami zbiorników wśród kwitnącego rzepaku"
		caption="Instalacja w otoczeniu pól · zdjęcie poglądowe"
		height="400px"
		position="center 55%"
	/>
</div>

<CtaBand
	text="Nic się nie marnuje. Poferment wraca na pola jako nawóz i zamyka obieg."
	href="/surowce/"
	label="Zobacz surowce"
/>

<style>
	.steps {
		list-style: none;
		margin: 0;
		padding: 0 0 clamp(56px, 7.8vw, 112px);
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		column-gap: 32px;
		position: relative;
	}
	.steps::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 115px;
		height: 1.5px;
		background: var(--line);
	}
	li {
		display: flex;
		flex-direction: column;
		gap: 16px;
		position: relative;
	}
	.num {
		width: 36px;
		height: 36px;
		border-radius: 18px;
		background: var(--bg);
		border: 1.5px solid var(--ink);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		font-weight: 500;
		margin-top: 8px;
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		padding-top: 10px;
	}
	.fact {
		font-size: 34px;
		letter-spacing: -0.02em;
	}

	@media (max-width: 1000px) {
		.steps {
			grid-template-columns: 1fr;
			row-gap: 36px;
		}
		.steps::before {
			display: none;
		}
		li {
			display: grid;
			grid-template-columns: 96px 1fr;
			column-gap: 24px;
			row-gap: 8px;
		}
		li svg {
			grid-row: span 3;
		}
		.num {
			display: none;
		}
	}
</style>
