<script lang="ts">
	import HeroScene from '$lib/components/HeroScene.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import Button from '$lib/components/Button.svelte';
	import ProcessFlow from '$lib/components/ProcessFlow.svelte';
	import GasToggle from '$lib/components/GasToggle.svelte';
	import Card from '$lib/components/Card.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const pillars = [
		{ href: '/rozwoj-inwestycji/', title: 'Rozwój inwestycji', text: 'Od analizy lokalizacji po projekt przygotowany do decyzji inwestycyjnej.' },
		{ href: '/inzynieria-i-projektowanie/', title: 'Inżynieria i projektowanie', text: 'Koncepcje technologiczne, bilanse, infrastruktura i spójna dokumentacja.' },
		{ href: '/doradztwo-inwestycyjne/', title: 'Doradztwo inwestycyjne', text: 'Studia wykonalności, due diligence, modele biznesowe i finansowanie.' }
	];

	const path = [
		{ title: 'Lokalizacja', text: 'Ocena działki, uwarunkowań planistycznych, środowiskowych i dostępu do infrastruktury.' },
		{ title: 'Koncepcja', text: 'Warianty technologiczne, baza substratowa i bilanse masowe oraz energetyczne.' },
		{ title: 'Decyzje', text: 'Dokumentacja i uzgodnienia niezbędne do uzyskania wymaganych decyzji.' },
		{ title: 'Przyłączenia', text: 'Warunki przyłączenia do sieci gazowej i elektroenergetycznej oraz dostęp do rynku energii.' },
		{ title: 'Inwestor', text: 'Uporządkowana dokumentacja, mapa ryzyk i materiały do due diligence.' }
	];

	const areas = [
		{ t: 'Biogaz i biometan', d: 'Biogazownie i biometanownie wykorzystujące surowce rolnicze, produkty uboczne przemysłu rolno-spożywczego i wybrane bioodpady.' },
		{ t: 'Kogeneracja i PV', d: 'Produkcja energii elektrycznej i ciepła oraz integracja z fotowoltaiką i magazynowaniem energii.' },
		{ t: 'Infrastruktura sieciowa', d: 'Przyłącza energetyczne i gazowe, stacje pomiarowe oraz współpraca z operatorami.' }
	];

	const tones = ['soft', 'green', 'ink'] as const;
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
			<Button variant="link" href="/o-nas/" class="secondary-cta">Poznaj Ecotermcomplex</Button>
		</div>
	</div>
	<div class="scene">
		<HeroScene />
	</div>
</section>

<section class="wrap section">
	<div class="cols-3">
		{#each pillars as t, i}
			<Card tone={tones[i]} class="teaser">
				<h2 class="h3">{t.title}</h2>
				<p class="small">{t.text}</p>
				<Button variant="link" href={t.href} class="more">Więcej</Button>
			</Card>
		{/each}
	</div>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/biogazownia-kopuly.jpg"
			alt="Biogazownia z lotu ptaka: kilkanaście zbiorników z szarymi kopułami otoczonych polami"
			caption="Zbiorniki fermentacyjne pośród pól, zdjęcie poglądowe"
			height="500px"
		/>
		<div class="stack" style="gap: 20px">
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
			<Button variant="link" href="/o-nas/">Poznaj nas bliżej</Button>
		</div>
	</div>
</section>

<section class="wrap">
	<div class="section rule stack" style="gap: 44px">
		<div class="split-rev">
			<div class="stack" style="gap: 20px">
				<h2 class="h2">Pięć kroków do decyzji inwestycyjnej</h2>
			</div>
			<p class="body">
				Łączymy lokalizację, technologię, dostępność substratów, decyzje administracyjne, przyłączenia
				i ekonomię w jedną ścieżkę rozwoju.
			</p>
		</div>
		<ProcessFlow steps={path} label="Ścieżka projektu" />
		<Button variant="link" href="/rozwoj-inwestycji/">Zobacz, jak rozwijamy inwestycje</Button>
	</div>
</section>

<div class="wrap">
	<Photo
		src="/images/biogazownia-zachod.jpg"
		alt="Zbiorniki biogazowni na zielonych polach o zachodzie słońca"
		caption="Instalacja wpisana w wiejski krajobraz, zdjęcie poglądowe"
		height="520px"
		position="center 65%"
	/>
</div>

<section class="wrap">
	<div class="section stack" style="gap: 36px">
		<div class="split-rev">
			<h2 class="h2">Biogaz czy biometan?</h2>
			<p class="body">
				Pierwsze etapy są wspólne. O kierunku decyduje odbiorca produktu, przyłącze i bilans całego
				łańcucha dostaw.
			</p>
		</div>
		<GasToggle variant="fork" />
	</div>
</section>

<section class="wrap">
	<div class="split-rev section" style="align-items: center">
		<div class="stack" style="gap: 20px">
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
			<Button variant="link" href="/inzynieria-i-projektowanie/">Zobacz zakres inżynierii</Button>
		</div>
		<Photo
			src="/images/biogazownia-instalacja.jpg"
			alt="Nowoczesna instalacja biogazowa z zielonymi zbiornikami i rurociągami o wschodzie słońca"
			caption="Wizualizacja nowoczesnej instalacji, zdjęcie poglądowe"
			height="540px"
		/>
	</div>
</section>

<section class="wrap section">
	<div class="two" style="align-items: stretch">
		<Photo src="/images/zbiornik-dron.jpg" alt="Zbiornik fermentacyjny z zieloną kopułą membranową, widok z drona" caption="Zbiornik fermentacyjny z dachem membranowym, zdjęcie poglądowe" height="420px" position="center 40%" />
		<Card tone="ink" size="lg">
			<h2 class="h2">Od danych procesowych do lepszych decyzji</h2>
			<p class="body">
				Rozwijamy podejście do biogazowni i biometanowni jako inteligentnych systemów procesowych,
				wykorzystujących pomiary, modele i dane do wspierania decyzji operacyjnych.
			</p>
			<p class="small">
				Opisane kierunki stanowią prowadzone lub planowane prace badawczo-rozwojowe, a nie gotowy
				produkt komercyjny.
			</p>
			<Button variant="link" href="/badania-i-rozwoj/">Poznaj kierunki B+R</Button>
		</Card>
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
	.cols-3 :global(.teaser) {
		position: relative;
	}
	/* cała karta jest klikalna przez rozciągnięty link */
	.cols-3 :global(.more)::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.cols-3 :global(.more) {
		align-self: flex-start;
		text-decoration: none;
	}
	.cols-3 :global(.teaser:hover .more) {
		text-decoration: underline;
		text-underline-offset: 5px;
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
