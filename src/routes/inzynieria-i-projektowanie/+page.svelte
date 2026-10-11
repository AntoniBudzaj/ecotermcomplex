<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import GasToggle from '$lib/components/GasToggle.svelte';
	import Card from '$lib/components/Card.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "Inżynieria",
		"eyebrow": "Inżynieria i projektowanie",
		"title": "Dobrze zaprojektowana instalacja to spójny system, nie zestaw urządzeń.",
		"tagline": "Projektowanie, które łączy technologię procesu z realiami lokalizacji, wymogami formalnymi i późniejszą eksploatacją.",
		"lead": "W Ecotermcomplex prace inżynieryjne traktujemy jako narzędzie rozwiązywania rzeczywistych problemów inwestycyjnych. Łączymy koncepcję procesową z układem przestrzennym, infrastrukturą techniczną, bezpieczeństwem i wymaganiami eksploatacji. Przygotowujemy oraz koordynujemy opracowania potrzebne do podejmowania decyzji, prowadzenia postępowań administracyjnych i dalszego projektowania.",
		"photo": {
			"src": "/images/budowa-dron.jpg",
			"alt": "Budowa biogazowni widziana z drona: fundamenty i zbiorniki w trakcie montażu",
			"caption": "Budowa instalacji, zdjęcie poglądowe"
		},
		"sections": [
			{
				"title": "Koncepcje technologiczne",
				"paras": [
					"Opracowujemy założenia procesowe dla instalacji fermentacji beztlenowej, przygotowania i podawania substratów, gospodarki biogazem, oczyszczania i uzdatniania do biometanu, kogeneracji, gospodarki pofermentem i instalacji pomocniczych. Dobieramy strukturę procesu do rodzaju surowców, oczekiwanego produktu oraz wymagań lokalizacji.",
					"Uwzględniamy wymagania dotyczące zbiorników, mieszania, ogrzewania, odsiarczania, osuszania, sprężania, uzdatniania, pomiarów i systemów bezpieczeństwa. Na etapie koncepcyjnym nie zastępujemy szczegółowego projektu dostawcy urządzeń, lecz tworzymy spójne wymagania pozwalające porównywać rozwiązania technologiczne."
				]
			},
			{
				"title": "Bilans masowy, energetyczny i media",
				"paras": [
					"Podstawą projektowania są zweryfikowane bilanse: dopływu substratów i wody, powstawania biogazu, ilości pofermentu, zużycia ciepła i energii elektrycznej oraz potrzeb infrastruktury pomocniczej. Analizujemy wartości średnie, szczytowe i scenariusze pracy, aby uniknąć błędów wynikających z projektowania wyłącznie dla warunków nominalnych.",
					"W przypadku biometanowni rozpatrujemy zużycie energii przez upgrading i sprężanie, parametry gazu po oczyszczeniu, zagospodarowanie strumieni ubocznych i możliwości optymalizacji potrzeb własnych."
				]
			},
			{
				"title": "Zagospodarowanie terenu i integracja branż",
				"paras": [
					"Koordynujemy funkcjonalne rozmieszczenie obiektów, komunikację wewnętrzną, strefy rozładunku i magazynowania, przebieg instalacji oraz dostęp służb eksploatacyjnych. Rozwiązania przestrzenne weryfikujemy względem wymagań bezpieczeństwa, ochrony środowiska, przepisów budowlanych i możliwości etapowania.",
					"Analiza międzybranżowa obejmuje w zależności od projektu architekturę, konstrukcję, technologię, instalacje sanitarne, elektryczne, automatykę, sieci zewnętrzne i zagadnienia pożarowe. Projekty wymagające specjalistycznych uprawnień realizowane są przez odpowiednio uprawnionych uczestników procesu projektowego."
				]
			},
			{
				"title": "Infrastruktura przyłączeniowa",
				"paras": [
					"Przygotowujemy założenia techniczne dla przyłączy energetycznych i gazowych, stacji i urządzeń pomiarowych, układów zasilania oraz komunikacji z operatorami. Oceniamy przebieg tras przyłączy, uwarunkowania terenowo-prawne i wpływ inwestycji liniowych na harmonogram projektu głównego.",
					"Wspieramy również analizę infrastruktury wodociągowej, kanalizacyjnej, retencyjnej oraz wymaganych rozwiązań środowiskowych, w tym potencjalnych kolizji i niezbędnych uzgodnień."
				]
			},
			{
				"title": "Dokumentacja i nadzór nad spójnością projektu",
				"paras": [
					"W zależności od ustalonego zakresu przygotowujemy koncepcje, założenia do projektowania, specyfikacje i materiały do procedur administracyjnych, przetargów lub zapytań ofertowych. Koordynujemy informacje przekazywane między dostawcami technologii, projektantami i inwestorem, aby dane procesowe były zgodne z rozwiązaniami budowlanymi i sieciowymi.",
					"Zwracamy szczególną uwagę na kontrolę zmian: wprowadzenie nowego substratu, odmiennego układu technologicznego lub zmiany mocy może oddziaływać na dokumentację środowiskową, warunki przyłączenia, układ komunikacyjny i wyniki finansowe."
				]
			},
			{
				"title": "Weryfikacja projektów zewnętrznych",
				"paras": [
					"Prowadzimy przeglądy koncepcji oraz dokumentacji przygotowanych przez innych uczestników przedsięwzięcia. Identyfikujemy niespójności w bilansach, braki w zakresie technologii pomocniczych, ryzyka związane z logistyką i infrastrukturą oraz obszary wymagające doprecyzowania przed podjęciem zobowiązań inwestycyjnych."
				]
			}
		],
		"cta": {
			"text": "Potrzebujesz koncepcji technologicznej, koordynacji projektowej lub niezależnej weryfikacji rozwiązań? Przedstaw nam założenia inwestycji.",
			"label": "Zleć analizę projektu"
		}
	};


	const tones = ['soft', 'white', 'sand', 'ink', 'white', 'green'] as const;
</script>

{#snippet body(s: { paras?: string[]; items?: string[]; note?: string; img?:{src:string,alt:string}})}
	{#each s.paras ?? [] as p}
		<p class="body">{p}</p>
	{/each}
	{#if s.items}
		<ul class="items">
			{#each s.items as item}
				<li>
					<span class="dot"></span>
					<span class="body">{item}</span>
				</li>
          {#if s.img}
            <img src={s.img.src} alt={s.img.alt}/>
          {/if}
			{/each}
		</ul>
	{/if}
	{#if s.note}<p class="note">{s.note}</p>{/if}
{/snippet}


<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src={page.photo.src}
		alt={page.photo.alt}
		caption={page.photo.caption}
		height="440px"
	/>
</div>

	<section class="wrap gas-wrap">
		<GasToggle />
	</section>

	<section class="wrap carousel-wrap">
		<div class="carousel-photo">
			<Photo src="/images/biogazownia-instalacja.jpg" alt="Nowoczesna instalacja biogazowa z zielonymi zbiornikami i rurociągami o wschodzie słońca" caption="Wizualizacja nowoczesnej instalacji, zdjęcie poglądowe" height="22rem" position="center" />
		</div>
		<Carousel label="Zakres prac inżynieryjnych">
			{#each page.sections as s, i}
				<Card tone={tones[i % tones.length]} class="tile">
					<h2 class="h3 tile-title">{s.title}</h2>
					{@render body(s)}
				</Card>
			{/each}
		</Carousel>
	</section>

<section class="section">
	<CtaBand text={page.cta.text} href="/kontakt/" label={page.cta.label} />
</section>

<style>
	.carousel-wrap {
		padding-bottom: var(--section);
	}
	.gas-wrap {
		padding-bottom: var(--section);
	}
	.items {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.items li {
		display: flex;
		gap: 16px;
	}
	.items .dot {
		margin-top: 10px;
	}
	.note {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--caption);
		padding-left: 16px;
		border-left: 2px solid var(--green);
	}

	.carousel-photo {
		margin-bottom: 2rem;
	}
	.tile-title {
		font-size: 1.5rem;
	}

	</style>
