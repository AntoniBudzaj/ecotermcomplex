<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import Card from '$lib/components/Card.svelte';
	import ReadMore from '$lib/components/ReadMore.svelte';
	import SnakeTimeline from '$lib/components/SnakeTimeline.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "Rozwój inwestycji",
		"eyebrow": "Rozwój inwestycji",
		"title": "Od potencjału lokalizacji do dojrzałego projektu inwestycyjnego.",
		"tagline": "Budujemy wartość inwestycji przez systematyczne ograniczanie ryzyk — od pierwszej analizy lokalizacji po projekt przygotowany do decyzji inwestycyjnej.",
		"lead": "Proces developmentu wymaga jednoczesnego zarządzania lokalizacją, technologią, dostępnością substratów, decyzjami administracyjnymi, przyłączeniami i ekonomią przedsięwzięcia. Ecotermcomplex łączy te obszary w spójną ścieżkę rozwoju, której celem jest stworzenie projektu możliwego do realizacji i atrakcyjnego dla przyszłego inwestora.",
		"photo": {
			"src": "/images/biogazownia-zachod.jpg",
			"alt": "Zbiorniki biogazowni na zielonych polach o zachodzie słońca",
			"caption": "Instalacja wpisana w wiejski krajobraz, zdjęcie poglądowe",
			"position": "center 65%"
		},
		"sections": [
			{
				"title": "Identyfikacja lokalizacji i weryfikacja potencjału",
				"paras": [
					"Punktem wyjścia jest ocena działki lub obszaru inwestycyjnego: przeznaczenia terenu, uwarunkowań własnościowych, dostępu do drogi, sąsiedztwa, ochrony przyrody, zasobów wodnych i możliwości doprowadzenia infrastruktury. Analizujemy ograniczenia wynikające z planowania przestrzennego, wymogi zabudowy oraz potencjalne kolizje techniczne.",
					"Dla projektów biogazowych szczególną uwagę poświęcamy relacji instalacji z otoczeniem. Uwzględniamy logistykę dostaw i wywozu, odległości transportowe, możliwość ograniczenia uciążliwości, a także skalę instalacji odpowiednią dla lokalnego rynku substratów."
				]
			},
			{
				"title": "Baza substratowa i model operacyjny",
				"paras": [
					"Ocenę źródeł surowców prowadzimy równolegle z koncepcją technologiczną. Weryfikujemy rodzaje, ilości, sezonowość i parametry substratów, możliwe modele dostaw, koszty transportu i magazynowania oraz perspektywę zawarcia długoterminowych umów. W analizie uwzględniamy także zagospodarowanie pofermentu, które wpływa na ekonomię i logistykę całego przedsięwzięcia.",
					"Nawet atrakcyjna technologia nie zastąpi pewności operacyjnej. Dlatego rozwój projektu opieramy na wiarygodnych bilansach masowych i energetycznych, realistycznej dyspozycyjności instalacji oraz dostępności odbiorców produktów."
				]
			},
			{
				"title": "Koncepcja, wariantowanie i etapowanie",
				"paras": [
					"Przygotowujemy możliwe scenariusze realizacji: produkcję energii elektrycznej i ciepła w kogeneracji, uzdatnianie biogazu do biometanu, rozwiązania hybrydowe oraz integrację z PV lub magazynowaniem energii. Porównujemy warianty pod kątem nakładów inwestycyjnych, kosztów eksploatacyjnych, przyłączy, uzysku energii i poziomu ryzyk.",
					"W projektach, w których warunki rynkowe lub infrastrukturalne wymagają elastyczności, przewidujemy etapowanie mocy oraz możliwość późniejszej rozbudowy bez utraty spójności zagospodarowania terenu."
				]
			},
			{
				"title": "Ścieżka administracyjna i środowiskowa",
				"paras": [
					"Koordynujemy przygotowanie dokumentacji niezbędnej do uzyskiwania wymaganych decyzji i uzgodnień, w tym dokumentów dotyczących warunków zabudowy lub zgodności z planowaniem przestrzennym, kwalifikacji środowiskowej, karty informacyjnej przedsięwzięcia, raportów i decyzji środowiskowych oraz dalszych etapów procedur budowlanych. Każdorazowy zakres postępowań wynika ze specyfiki inwestycji i obowiązujących przepisów.",
					"Istotnym elementem jest współpraca z organami administracji, gestorami infrastruktury i zainteresowanymi stronami, prowadzona na podstawie rzetelnych danych technicznych i środowiskowych."
				]
			},
			{
				"title": "Przyłączenia i dostęp do rynku energii",
				"paras": [
					"Badamy możliwości przyłączenia do sieci gazowej i elektroenergetycznej, zapotrzebowanie na media oraz dostępność infrastruktury wodno-kanalizacyjnej. Analizujemy warunki techniczne, zakres robót przyłączeniowych, warianty tras, konieczność uzyskania praw do nieruchomości i potencjalne terminy realizacji.",
					"Rozwijając projekt biometanowni, rozpatrujemy zarówno parametry produkcji, jak i warunki jakościowe, ciśnieniowe oraz ilościowe niezbędne dla określonego kierunku odbioru gazu. Wybór technologii uzdatniania jest powiązany z wymaganiami odbiorcy, bilansami procesu i kosztami całego łańcucha dostaw."
				]
			},
			{
				"title": "Przygotowanie do transakcji i realizacji",
				"paras": [
					"Porządkujemy dokumentację projektu tak, aby inwestor mógł przeanalizować jego stan prawny, techniczny, środowiskowy i ekonomiczny. Przygotowujemy materiały do procesu due diligence, identyfikujemy kluczowe zobowiązania, warunki zawieszające i ryzyka wymagające dalszego wyjaśnienia.",
					"Możliwe modele współpracy obejmują prowadzenie rozwoju na zlecenie, współpracę z właścicielem nieruchomości, rozwój na rzecz spółki celowej, wspólne przedsięwzięcie oraz przekazanie lub sprzedaż projektu na uzgodnionym etapie."
				]
			},
			{
				"title": "Co otrzymuje inwestor",
				"paras": [
					"Efektem jest nie tylko dokumentacja, lecz uporządkowany proces decyzyjny: mapa ryzyk, wariant technologiczny, stan postępowań, analiza substratowa, założenia modelu finansowego, harmonogram i zestaw działań niezbędnych do przejścia do następnej fazy inwestycji."
				]
			}
		],
		"cta": {
			"text": "Posiadasz grunt, strumień surowców lub projekt na wczesnym etapie? Sprawdzimy jego potencjał i zaproponujemy możliwą ścieżkę rozwoju.",
			"label": "Sprawdź potencjał lokalizacji"
		}
	};

</script>

{#snippet body(s: { paras?: string[]; items?: string[]; note?: string })}
	{#if s.paras?.length}<ReadMore paras={s.paras} />{/if}
	{#if s.items}
		<ul class="items">
			{#each s.items as item}
				<li>
					<span class="dot"></span>
					<span class="body">{item}</span>
				</li>
			{/each}
		</ul>
	{/if}
	{#if s.note}<p class="note">{s.note}</p>{/if}
{/snippet}

<svelte:head>
	<title>Rozwój inwestycji – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} fold />

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src={page.photo.src}
		alt={page.photo.alt}
		caption={page.photo.caption}
		height="440px"
		position={page.photo.position}
	/>
</div>

	<section class="wrap snake-wrap">
		<SnakeTimeline
			label="Etapy rozwoju inwestycji"
			steps={page.sections.slice(0, -1).map((s) => ({ title: s.title, paras: s.paras ?? [] }))}
		/>
	</section>

	<section class="wrap">
		<div class="two" style="align-items: stretch">
			<Card tone="green" size="lg">
				<h2 class="h2">{page.sections.at(-1)?.title}</h2>
				{@render body(page.sections.at(-1)!)}
			</Card>
			<Photo src="/images/budowa-dron.jpg" alt="Budowa biogazowni widziana z drona: fundamenty i zbiorniki w trakcie montażu" caption="Budowa instalacji, zdjęcie poglądowe" height="340px" position="center" />
		</div>
	</section>

<section class="section">
	<CtaBand text={page.cta.text} href="/kontakt/" label={page.cta.label} />
</section>

<style>
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
	.snake-wrap {
		padding-bottom: var(--section);
	}
</style>
