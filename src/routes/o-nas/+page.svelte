<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "O nas",
		"eyebrow": "O nas",
		"title": "Energia przyszłości zaczyna się od dobrze przygotowanego projektu.",
		"tagline": "Rozwijamy przedsięwzięcia, które łączą potencjał lokalnych zasobów z technologią, bezpieczeństwem inwestycyjnym i realną wartością gospodarczą.",
		"lead": "Ecotermcomplex to firma działająca na styku energetyki odnawialnej, inżynierii środowiska i rozwoju inwestycji. Pomagamy przekształcać pomysły oraz lokalne możliwości w projekty o sprecyzowanych parametrach technicznych, uregulowanych uwarunkowaniach administracyjnych i uzasadnieniu ekonomicznym. Specjalizujemy się w projektach biogazowych i biometanowych, a także w rozwiązaniach uzupełniających: kogeneracji, fotowoltaice, magazynowaniu energii oraz infrastrukturze sieciowej.",
		"photo": {
			"src": "/images/biogazownia-kopuly.jpg",
			"alt": "Biogazownia z lotu ptaka: kilkanaście zbiorników z szarymi kopułami otoczonych polami",
			"caption": "Zbiorniki fermentacyjne pośród pól · zdjęcie poglądowe"
		},
		"sections": [
			{
				"title": "Kim jesteśmy",
				"paras": [
					"Łączymy kompetencje związane z analizą lokalizacji, koncepcją technologiczną, planowaniem przestrzennym, ochroną środowiska, projektowaniem instalacji, współpracą z operatorami sieci i przygotowaniem modeli inwestycyjnych. Dzięki temu traktujemy inwestycję jako całość, a nie zbiór odrębnych opracowań.",
					"Na wczesnym etapie najważniejsze są właściwe decyzje. Dlatego oceniamy nie tylko to, czy instalację można wybudować, ale także czy będzie miała stabilną bazę surowcową, realną możliwość odbioru energii lub gazu, odpowiedni dostęp komunikacyjny i uzasadniony model funkcjonowania. Takie podejście pozwala identyfikować ograniczenia, zanim staną się kosztownym problemem."
				]
			},
			{
				"title": "Nasza specjalizacja",
				"paras": [
					"Istotną częścią działalności Ecotermcomplex jest rozwój biogazowni i biometanowni wykorzystujących surowce rolnicze, produkty uboczne przemysłu rolno-spożywczego oraz wybrane strumienie bioodpadów. Rozumiemy złożoność całego łańcucha wartości: od pozyskania substratu, przez fermentację i uzdatnianie biogazu, po wykorzystanie produktu energetycznego oraz zagospodarowanie pofermentu.",
					"Jednocześnie patrzymy szerzej niż na samą technologię fermentacji. Analizujemy współpracę instalacji z siecią elektroenergetyczną lub gazową, integrację źródeł wytwórczych, bilansowanie potrzeb własnych, gospodarkę wodno-ściekową, logistykę i uwarunkowania środowiskowe. Pozwala to opracowywać rozwiązania dopasowane do konkretnego miejsca i inwestora."
				]
			},
			{
				"title": "Od idei do projektu gotowego do realizacji",
				"paras": [
					"W zależności od charakteru przedsięwzięcia występujemy jako inicjator rozwoju, projektant, koordynator procesu przygotowawczego albo partner inwestycyjny. Organizujemy prace międzybranżowe, przygotowujemy analizy, prowadzimy uzgodnienia i wspieramy pozyskiwanie decyzji. Współpracujemy z inwestorami, właścicielami gruntów, przedsiębiorstwami przemysłowymi, gospodarstwami rolnymi, samorządami oraz dostawcami technologii.",
					"W modelu developmentowym możemy rozpocząć od rozpoznania potencjalnej lokalizacji i doprowadzić projekt do stadium umożliwiającego ocenę przez inwestora finansowego, partnera branżowego lub podmiot realizacyjny. Zakres ryzyka, nakładów i odpowiedzialności każdorazowo określa indywidualna umowa."
				]
			},
			{
				"title": "Jak pracujemy",
				"items": [
					"Analizujemy uwarunkowania, zanim podejmiemy kluczowe decyzje technologiczne.",
					"Integrujemy wymagania techniczne, administracyjne, środowiskowe i finansowe.",
					"Weryfikujemy realność założeń przyłączeniowych, surowcowych i logistycznych.",
					"Rozważamy warianty oraz etapowanie zamiast narzucania jednego rozwiązania.",
					"Utrzymujemy czytelną komunikację z inwestorem i zainteresowanymi stronami."
				]
			},
			{
				"title": "Dla kogo pracujemy",
				"paras": [
					"Naszymi partnerami są podmioty planujące własne instalacje energetyczne, inwestorzy poszukujący projektów do rozwinięcia lub przejęcia, właściciele gruntów, rolnicy i producenci żywności, przedsiębiorstwa dysponujące strumieniami surowców organicznych oraz jednostki samorządu terytorialnego. Wspieramy zarówno nowe przedsięwzięcia, jak i ocenę projektów już przygotowywanych przez inne zespoły."
				]
			}
		],
		"team": {
			"title": "Zespół",
			"people": [
				{
					"name": "[Imię i nazwisko]",
					"role": "[Stanowisko]",
					"bio": "[Krótki opis: wykształcenie, doświadczenie w energetyce odnawialnej, rozwoju inwestycji lub inżynierii. Dwa–trzy zdania.]",
					"more": "[Dalsza część opisu: kursy, uprawnienia, wcześniejsze role, obszary odpowiedzialności w Ecotermcomplex.]"
				},
				{
					"name": "[Imię i nazwisko]",
					"role": "[Stanowisko]",
					"bio": "[Krótki opis: wykształcenie, doświadczenie w energetyce odnawialnej, rozwoju inwestycji lub inżynierii. Dwa–trzy zdania.]",
					"more": "[Dalsza część opisu: kursy, uprawnienia, wcześniejsze role, obszary odpowiedzialności w Ecotermcomplex.]"
				},
				{
					"name": "[Imię i nazwisko]",
					"role": "[Stanowisko]",
					"bio": "[Krótki opis: wykształcenie, doświadczenie w energetyce odnawialnej, rozwoju inwestycji lub inżynierii. Dwa–trzy zdania.]",
					"more": "[Dalsza część opisu: kursy, uprawnienia, wcześniejsze role, obszary odpowiedzialności w Ecotermcomplex.]"
				}
			]
		},
		"cta": {
			"text": "Masz lokalizację, surowce lub pomysł na inwestycję? Porozmawiajmy o jego potencjale i o pierwszych krokach, które warto podjąć.",
			"label": "Omów projekt"
		}
	};

	let openPerson = $state<number | null>(null);
</script>

{#snippet body(s: { paras?: string[]; items?: string[]; note?: string })}
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
			{/each}
		</ul>
	{/if}
	{#if s.note}<p class="note">{s.note}</p>{/if}
{/snippet}

<svelte:head>
	<title>O nas – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src={page.photo.src}
		alt={page.photo.alt}
		caption={page.photo.caption}
		height="440px"
	/>
</div>

	<section class="wrap">
		<p class="quote">{page.tagline}</p>
		{#each page.sections as s}
			<div class="split-rev block rule" style="align-items: start">
				<h2 class="h2">{s.title}</h2>
				<div class="stack" style="gap: 18px">{@render body(s)}</div>
			</div>
		{/each}
	</section>

{#if page.team}
	<section class="wrap">
		<div class="team rule">
			<div class="stack" style="gap: 20px">
				<div class="eyebrow">Ludzie</div>
				<h2 class="h2">{page.team.title}</h2>
			</div>
			<div class="cols-3">
				{#each page.team.people as person, i}
					<article class="person">
						<!-- po dodaniu zdjęcia: <img src=\"/images/....jpg\" alt={person.name} /> -->
						<div class="placeholder portrait">[Zdjęcie]</div>
						<h3 class="h3 pname">{person.name}</h3>
						<p class="prole">{person.role}</p>
						<p class="small">
							{person.bio}{#if openPerson === i} {person.more}{/if}
						</p>
						<Button
							variant="text"
							class="more"
							aria-expanded={openPerson === i}
							onclick={() => (openPerson = openPerson === i ? null : i)}
						>
							{openPerson === i ? 'Zwiń' : 'Czytaj więcej'}
						</Button>
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="section">
	<CtaBand text={page.cta.text} href="/kontakt/" label={page.cta.label} />
</section>

<style>
	.block {
		padding-block: clamp(36px, 4.4vw, 64px);
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
		font-size: 15px;
		line-height: 1.6;
		color: var(--caption);
		padding-left: 16px;
		border-left: 2px solid var(--green);
	}

	.quote {
		font-size: clamp(22px, 2.2vw, 32px);
		line-height: 1.4;
		letter-spacing: -0.02em;
		max-width: 900px;
		padding-bottom: clamp(36px, 4.4vw, 64px);
	}

	.team {
		padding-block: var(--section) 0;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.person {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}
	.portrait {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: var(--radius);
	}
	.pname {
		font-size: 24px;
		margin-top: 12px;
	}
	.prole {
		font-size: 15px;
		font-weight: 500;
		color: var(--muted);
		padding-bottom: 6px;
		border-bottom: 2px solid var(--green);
		margin-bottom: 4px;
	}
	.person :global(.more) {
		margin-top: 6px;
	}
</style>
