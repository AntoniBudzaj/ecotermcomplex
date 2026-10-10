<script lang="ts">
	import HeroScene from '$lib/components/HeroScene.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import Button from '$lib/components/Button.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const pillars = [
		{ href: '/rozwoj-inwestycji/', title: 'Rozwój inwestycji', text: 'Od analizy lokalizacji po projekt przygotowany do decyzji inwestycyjnej.' },
		{ href: '/inzynieria-i-projektowanie/', title: 'Inżynieria i projektowanie', text: 'Koncepcje technologiczne, bilanse, infrastruktura i spójna dokumentacja.' },
		{ href: '/doradztwo-inwestycyjne/', title: 'Doradztwo inwestycyjne', text: 'Studia wykonalności, due diligence, modele biznesowe i finansowanie.' }
	];

	const path = [
		{ t: 'Lokalizacja', d: 'Ocena działki, uwarunkowań planistycznych, środowiskowych i dostępu do infrastruktury.' },
		{ t: 'Koncepcja', d: 'Warianty technologiczne, baza substratowa i bilanse masowe oraz energetyczne.' },
		{ t: 'Decyzje', d: 'Dokumentacja i uzgodnienia niezbędne do uzyskania wymaganych decyzji.' },
		{ t: 'Przyłączenia', d: 'Warunki przyłączenia do sieci gazowej i elektroenergetycznej oraz dostęp do rynku energii.' },
		{ t: 'Inwestor', d: 'Uporządkowana dokumentacja, mapa ryzyk i materiały do due diligence.' }
	];

	const areas = [
		{ t: 'Biogaz i biometan', d: 'Biogazownie i biometanownie wykorzystujące surowce rolnicze, produkty uboczne przemysłu rolno-spożywczego i wybrane bioodpady.' },
		{ t: 'Kogeneracja i PV', d: 'Produkcja energii elektrycznej i ciepła oraz integracja z fotowoltaiką i magazynowaniem energii.' },
		{ t: 'Infrastruktura sieciowa', d: 'Przyłącza energetyczne i gazowe, stacje pomiarowe oraz współpraca z operatorami.' }
	];
</script>

<svelte:head>
	<title>Ecotermcomplex – od koncepcji do gotowości inwestycyjnej</title>
	<meta
		name="description"
		content="Ecotermcomplex rozwija projekty energetyczne i środowiskowe od koncepcji do gotowości inwestycyjnej. Specjalizacja: biogaz, biometan i infrastruktura towarzysząca."
	/>
</svelte:head>

<section class="hero">
	<div class="wrap text">
		<h1 class="display">Od koncepcji do gotowości inwestycyjnej</h1>
		<p class="lead">
			Rozwijamy projekty energetyczne i środowiskowe, łącząc technologię, lokalizację, formalności,
			środowisko i ekonomię. Specjalizujemy się w biogazie, biometanie i infrastrukturze towarzyszącej.
		</p>
		<div class="actions">
			<Button variant="outline" href="/kontakt/" class="primary-cta">Omów projekt</Button>
			<Button variant="link" href="/o-nas/" class="secondary-cta">Poznaj Ecotermcomplex →</Button>
		</div>
	</div>
	<div class="scene">
		<HeroScene />
	</div>
</section>

<section class="wrap section">
	<div class="cols-3">
		{#each pillars as t}
			<div class="teaser rule-col">
				<h2 class="h3">{t.title}</h2>
				<p class="small">{t.text}</p>
				<Button variant="link" href={t.href} class="more">Więcej →</Button>
			</div>
		{/each}
	</div>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/biogazownia-kopuly.jpg"
			alt="Biogazownia z lotu ptaka: kilkanaście zbiorników z szarymi kopułami otoczonych polami"
			caption="Zbiorniki fermentacyjne pośród pól · zdjęcie poglądowe"
			height="500px"
		/>
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">O nas</div>
			<h2 class="h2">Energia przyszłości zaczyna się od dobrze przygotowanego projektu</h2>
			<p class="body">
				Ecotermcomplex działa na styku energetyki odnawialnej, inżynierii środowiska i rozwoju
				inwestycji. Pomagamy przekształcać pomysły oraz lokalne możliwości w projekty o sprecyzowanych
				parametrach technicznych, uregulowanych uwarunkowaniach administracyjnych i uzasadnieniu
				ekonomicznym.
			</p>
			<p class="body">
				Traktujemy inwestycję jako całość, a nie zbiór odrębnych opracowań, dzięki czemu ograniczenia
				identyfikujemy, zanim staną się kosztownym problemem.
			</p>
			<Button variant="link" href="/o-nas/">Poznaj nas bliżej →</Button>
		</div>
	</div>
</section>

<section class="wrap">
	<div class="section rule stack" style="gap: 44px">
		<div class="split-rev">
			<div class="stack" style="gap: 20px">
				<div class="eyebrow">Ścieżka projektu</div>
				<h2 class="h2">Pięć kroków do decyzji inwestycyjnej</h2>
			</div>
			<p class="body">
				Łączymy lokalizację, technologię, dostępność substratów, decyzje administracyjne, przyłączenia
				i ekonomię w jedną ścieżkę rozwoju.
			</p>
		</div>
		<ol class="path">
			{#each path as step, i}
				<li class="rule-col">
					<span class="n">{String(i + 1).padStart(2, '0')}</span>
					<h3 class="h3">{step.t}</h3>
					<p class="small">{step.d}</p>
				</li>
			{/each}
		</ol>
		<Button variant="link" href="/rozwoj-inwestycji/">Zobacz, jak rozwijamy inwestycje →</Button>
	</div>
</section>

<div class="wrap">
	<Photo
		src="/images/biogazownia-zachod.jpg"
		alt="Zbiorniki biogazowni na zielonych polach o zachodzie słońca"
		caption="Instalacja wpisana w wiejski krajobraz · zdjęcie poglądowe"
		height="520px"
		position="center 65%"
	/>
</div>

<section class="wrap">
	<div class="split-rev section" style="align-items: center">
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Obszary technologiczne</div>
			<h2 class="h2">Patrzymy szerzej niż na samą fermentację</h2>
			<ul class="benefits">
				{#each areas as a}
					<li>
						<span class="dot" style="margin-top: 8px"></span>
						<div>
							<h3 class="h3">{a.t}</h3>
							<p class="small">{a.d}</p>
						</div>
					</li>
				{/each}
			</ul>
			<Button variant="link" href="/inzynieria-i-projektowanie/">Zobacz zakres inżynierii →</Button>
		</div>
		<Photo
			src="/images/biogazownia-instalacja.jpg"
			alt="Nowoczesna instalacja biogazowa z zielonymi zbiornikami i rurociągami o wschodzie słońca"
			caption="Wizualizacja nowoczesnej instalacji · zdjęcie poglądowe"
			height="540px"
		/>
	</div>
</section>

<section class="wrap">
	<div class="split-rev rule section" style="align-items: start">
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Badania i rozwój</div>
			<h2 class="h2">Od danych procesowych do lepszych decyzji</h2>
		</div>
		<div class="stack" style="gap: 20px">
			<p class="body">
				Rozwijamy podejście do biogazowni i biometanowni jako inteligentnych systemów procesowych,
				wykorzystujących pomiary, modele i dane do wspierania decyzji operacyjnych.
			</p>
			<p class="small">
				Opisane kierunki stanowią prowadzone lub planowane prace badawczo-rozwojowe, a nie gotowy
				produkt komercyjny.
			</p>
			<Button variant="link" href="/badania-i-rozwoj/">Poznaj kierunki B+R →</Button>
		</div>
	</div>
</section>

<section class="section">
	<CtaBand
		text="Masz lokalizację, surowce lub projekt na wczesnym etapie? Porozmawiajmy o pierwszych krokach."
		href="/kontakt/"
		label="Skontaktuj się z nami"
	/>
</section>

<style>
	.hero {
		position: relative;
    padding-top: 4rem;
		min-height: min(75vh, calc(100svh - 96px));
		overflow: hidden;
	}
	.text {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.text > * {
		max-width: 648x;
	}
	.text .lead {
		max-width: 648px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 28px;
		padding-top: 6px;
	}
	.scene {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.teaser {
		position: relative;
	}
	/* cała karta jest klikalna przez rozciągnięty link */
	.teaser :global(.more)::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.teaser :global(.more) {
		align-self: flex-start;
		text-decoration: none;
	}
	.teaser:hover :global(.more) {
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	.path {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 32px 24px;
	}
	.n {
		font-size: 15px;
		color: var(--muted);
	}
	.benefits {
		list-style: none;
		margin: 8px 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	.benefits li {
		display: flex;
		gap: 18px;
	}
	.benefits li > div {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	@media (max-width: 1000px) {
		.path {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 520px) {
		.path {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 860px) {
		.hero {
			min-height: 0;
			display: flex;
			flex-direction: column;
		}
		.scene {
			position: relative;
			height: 290px;
			margin-top: 16px;
		}
		.actions :global(.primary-cta) {
			width: 100%;
		}
		.actions :global(.secondary-cta) {
			margin-inline: auto;
		}
	}
</style>
