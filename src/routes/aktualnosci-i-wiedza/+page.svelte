<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "Wiedza",
		"eyebrow": "Aktualności i wiedza",
		"title": "Wiedza, analizy i perspektywy transformacji energetycznej.",
		"tagline": "Wiedza branżowa, która pomaga zrozumieć inwestycje, technologię, regulacje i ekonomię projektów energetycznych.",
		"lead": "Publikujemy materiały poświęcone rozwojowi projektów OZE, biogazu i biometanu, praktyce projektowej, zagadnieniom środowiskowym, modelom inwestycyjnym oraz badaniom nad nowymi narzędziami dla instalacji przemysłowych. Naszym celem jest przekładanie złożonych tematów technicznych i regulacyjnych na informacje pomocne inwestorom, samorządom, rolnikom oraz partnerom technologicznym.",
		"sections": [
			{
				"title": "Co znajdziesz w centrum wiedzy",
				"paras": [
					"Czytelnik znajdzie tu informacje o kolejnych etapach przygotowania inwestycji, interpretację zmian istotnych dla branży, omówienia technologii i praktyczne zestawienia zagadnień, o których warto pamiętać przed rozpoczęciem projektu. Rozdzielamy wiadomości o działalności firmy od artykułów eksperckich, komentarzy oraz poradników."
				]
			},
			{
				"title": "Rozwój projektów — od pomysłu do decyzji",
				"paras": [
					"Przykładowe tematy publikacji:"
				],
				"items": [
					"jak ocenić grunt pod biometanownię",
					"jak przygotować bazę substratową",
					"co sprawdzić przed wystąpieniem o warunki przyłączenia",
					"dlaczego etapowanie instalacji ma znaczenie",
					"czym różni się projekt na etapie koncepcji od projektu gotowego do finansowania"
				]
			},
			{
				"title": "Technologia i eksploatacja",
				"paras": [
					"Przykładowe tematy publikacji:"
				],
				"items": [
					"bilans masowy w biogazowni",
					"metody uzdatniania biogazu",
					"najważniejsze parametry substratów",
					"rola VFA i innych wskaźników stanu procesu",
					"jak ograniczać zużycie energii pomocniczej",
					"w jaki sposób dane pomiarowe mogą wspierać operatora"
				]
			},
			{
				"title": "Rynek, przepisy i finansowanie",
				"paras": [
					"Przykładowe tematy publikacji:"
				],
				"items": [
					"warunki prowadzenia projektu biometanowego",
					"ryzyka przyłączeniowe",
					"systemy wsparcia dla OZE",
					"dokumenty potrzebne do analizy inwestora",
					"podejście do śladu węglowego biometanu",
					"praktyczne konsekwencje zmian regulacyjnych"
				],
				"note": "Artykuły dotyczące prawa i programów wsparcia nie stanowią indywidualnej opinii prawnej ani gwarancji uzyskania wsparcia."
			},
			{
				"title": "Badania i innowacje",
				"paras": [
					"Przykładowe tematy publikacji:"
				],
				"items": [
					"metody NIR i techniki akustyczne w ocenie surowców",
					"wirtualne czujniki",
					"modele hybrydowe fermentacji",
					"predykcja uzysku metanu",
					"integracja danych SCADA z raportowaniem GHG",
					"wyzwania walidacji algorytmów w warunkach przemysłowych"
				]
			},
			{
				"title": "Aktualności firmy",
				"paras": [
					"W tej kategorii mogą pojawiać się informacje o nawiązanych współpracach, udziale w wydarzeniach branżowych, nowych obszarach działalności, osiągnięciu istotnych etapów przygotowania projektów i uruchamianiu prac badawczych."
				]
			},
			{
				"title": "Na początek: osiem artykułów",
				"items": [
					"Biometanownia od podstaw: osiem kwestii do sprawdzenia przed wyborem lokalizacji.",
					"Substraty dla biogazowni: dlaczego ich dostępność jest ważniejsza niż teoretyczna wydajność.",
					"Biogaz czy biometan? Porównanie modeli wykorzystania gazu.",
					"Przyłączenie do sieci gazowej: najważniejsze parametry i ryzyka projektu.",
					"Jak czytać bilans masowy i energetyczny instalacji fermentacji.",
					"Due diligence projektu OZE: jakie dokumenty powinien zobaczyć inwestor.",
					"Emisje metanu i ślad GHG: co wpływa na ocenę środowiskową biometanu.",
					"Od czujników do decyzji: kierunki cyfryzacji nowoczesnej biogazowni."
				]
			}
		],
		"cta": {
			"text": "Chcesz porozmawiać o temacie poruszanym w naszych materiałach lub zaproponować współpracę ekspercką? Skontaktuj się z zespołem Ecotermcomplex.",
			"label": "Skontaktuj się z nami"
		}
	};

	const num = (i: number) => String(i + 1).padStart(2, '0');
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
	<title>Aktualności i wiedza – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

	<section class="wrap">
		<div class="intro-note">{@render body(page.sections[0])}</div>
		<div class="grid-3">
			{#each page.sections.slice(1, -2) as s}
				<article class="card topic">
					<span class="dot"></span>
					<h2 class="h3">{s.title}</h2>
					{#each s.paras ?? [] as p}<p class="small">{p}</p>{/each}
					<ul class="chips">
						{#each s.items ?? [] as item}<li>{item}</li>{/each}
					</ul>
					{#if s.note}<p class="note">{s.note}</p>{/if}
				</article>
			{/each}
		</div>
		<div class="split-rev block rule" style="align-items: start">
			<div class="stack" style="gap: 14px">
				<h2 class="h2">{page.sections.at(-2)?.title}</h2>
				{#each page.sections.at(-2)?.paras ?? [] as p}<p class="body">{p}</p>{/each}
			</div>
			<span></span>
		</div>
		<div class="split-rev block rule" style="align-items: start">
			<h2 class="h2">{page.sections.at(-1)?.title}</h2>
			<ol class="articles">
				{#each page.sections.at(-1)?.items ?? [] as a, i}
					<li><span class="idx">{num(i)}</span><span class="body">{a}</span></li>
				{/each}
			</ol>
		</div>
	</section>

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
	.idx {
		font-size: 15px;
		color: var(--muted);
		font-variant-numeric: tabular-nums;
	}

	.intro-note {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 820px;
		padding-bottom: clamp(32px, 4vw, 56px);
	}
	.grid-3 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		padding-bottom: clamp(32px, 4vw, 56px);
	}
	.topic {
		gap: 12px;
	}
	.chips {
		list-style: none;
		margin: 4px 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chips li {
		padding: 7px 14px;
		border-radius: 999px;
		background: var(--green-soft);
		font-size: 14.5px;
		line-height: 1.4;
	}
	.articles {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.articles li {
		display: grid;
		grid-template-columns: 48px 1fr;
		padding: 18px 0;
		border-top: 1px solid var(--line);
	}

	@media (max-width: 860px) {
		.grid-3 {
			grid-template-columns: 1fr;
		}
	}
</style>
