<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "Doradztwo",
		"eyebrow": "Doradztwo inwestycyjne",
		"title": "Technologia ma sens wtedy, gdy uzasadniają ją liczby i warunki realizacji.",
		"tagline": "Dobre decyzje kapitałowe wymagają połączenia wiedzy technicznej, ekonomiki projektu i rozumienia ryzyka regulacyjnego.",
		"lead": "Wspieramy inwestorów przy wyborze, ocenie i przygotowaniu przedsięwzięć związanych z energetyką odnawialną oraz gospodarką surowcową. Nasze doradztwo obejmuje zarówno wczesną identyfikację możliwości inwestycyjnych, jak i ocenę projektów już zaawansowanych pod względem formalnym lub technicznym.",
		"sections": [
			{
				"title": "Analizy przedinwestycyjne i studia wykonalności",
				"paras": [
					"Opracowujemy wariantowe analizy techniczno-ekonomiczne, które zestawiają potencjał surowcowy, możliwe technologie, koszty inwestycyjne i operacyjne, strukturę przychodów oraz ograniczenia infrastrukturalne. Ustalamy założenia modelu ekonomicznego, scenariusze rynkowe i parametry wymagające potwierdzenia przez przyszłych dostawców lub odbiorców.",
					"Studium wykonalności ma pomóc odpowiedzieć na pytania: jaki wariant jest uzasadniony, które elementy mają największy wpływ na wynik finansowy, na jakich warunkach przedsięwzięcie może przejść do realizacji i jakie ryzyka pozostają otwarte."
				]
			},
			{
				"title": "Due diligence techniczne i inwestycyjne",
				"paras": [
					"Analizujemy stan przygotowania projektu: decyzje, prawa do nieruchomości, warunki przyłączenia, dokumentację technologiczną, dostępność substratów, założenia wydajnościowe, model sprzedaży produktów i harmonogram. Wskazujemy luki, zależności oraz czynniki, które mogą wpływać na cenę, termin lub możliwość realizacji transakcji.",
					"Przy ocenie projektu rozróżniamy dokumenty już uzyskane, wnioski w toku, założenia oparte na wstępnych deklaracjach oraz obszary wymagające odrębnej opinii prawnej, finansowej albo technicznej."
				]
			},
			{
				"title": "Model biznesowy i źródła przychodów",
				"paras": [
					"W inwestycjach biogazowych możliwe są różne struktury przychodów: sprzedaż energii elektrycznej, ciepła, biometanu, usług zagospodarowania niektórych strumieni organicznych lub produktów ubocznych procesu, pod warunkiem spełnienia właściwych wymogów. Oceniamy wzajemne zależności między tymi strumieniami i ryzyka wynikające z przyjętego modelu kontraktacji.",
					"Uwzględniamy koszty pozyskania i logistyki substratów, zużycia mediów, obsługi instalacji, zagospodarowania pofermentu, utrzymania ruchu, ubezpieczeń oraz wymagań środowiskowych i jakościowych."
				]
			},
			{
				"title": "Finansowanie, dotacje i systemy wsparcia",
				"paras": [
					"Wspieramy przygotowywanie technicznej i ekonomicznej części dokumentacji związanej z finansowaniem inwestycji, w tym założeń do wniosków o wsparcie krajowe i europejskie. Pomagamy opracować harmonogram rzeczowo-finansowy, wskaźniki produktu i rezultatu oraz uzasadnienie technologiczne, środowiskowe i kosztowe przedsięwzięcia.",
					"Analizujemy warunki wybranych mechanizmów wsparcia właściwych dla danego projektu, przy czym dostępność finansowania i kwalifikowalność kosztów zawsze wymagają potwierdzenia według aktualnej dokumentacji konkretnego programu."
				]
			},
			{
				"title": "Modele współpracy kapitałowej i transakcyjnej",
				"paras": [
					"W zależności od potrzeb projektu rozważamy: zlecenie developmentu, wsparcie inwestora w istniejącym SPV, wspólne przedsięwzięcie, model success fee lub przygotowanie projektu do sprzedaży. Pomagamy ustalić podział prac, kamienie milowe, warunki przekazania dokumentacji i niezbędne obszary odpowiedzialności.",
					"Wspieramy rozmowy między właścicielem gruntu, partnerem technologicznym, dostawcą surowców, inwestorem i odbiorcą energii. Nie zastępujemy doradztwa prawnego, podatkowego ani regulowanej działalności inwestycyjnej."
				]
			},
			{
				"title": "Współpraca z właścicielami gruntów i dostawcami surowców",
				"paras": [
					"Dla właścicieli terenów oraz gospodarstw analizujemy możliwości długoterminowej współpracy: dzierżawy, dostaw substratów, odbioru produktów lub uczestnictwa w strukturze przedsięwzięcia. Celem jest stworzenie modelu, w którym interes gospodarczy partnerów lokalnych jest zrozumiały i możliwy do weryfikacji."
				]
			}
		],
		"cta": {
			"text": "Rozważasz inwestycję albo przejęcie projektu? Zidentyfikujmy jego rzeczywistą wartość i warunki dalszego rozwoju.",
			"label": "Zleć analizę projektu"
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
	<title>Doradztwo inwestycyjne – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

	<section class="wrap">
		<div class="acc rule">
			{#each page.sections as s, i}
				<details open={i === 0}>
					<summary>
						<span class="idx">{num(i)}</span>
						<h2 class="h3 acc-title">{s.title}</h2>
						<svg class="chev" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3 6.5 L9 12.5 L15 6.5" /></svg>
					</summary>
					<div class="acc-body stack" style="gap: 16px">{@render body(s)}</div>
				</details>
			{/each}
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

	details {
		border-bottom: 1.5px solid var(--line);
	}
	summary {
		display: grid;
		grid-template-columns: 56px 1fr 24px;
		align-items: center;
		padding: 28px 0;
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	.acc-title {
		font-size: clamp(20px, 2vw, 28px);
	}
	.chev {
		transition: transform 0.2s ease;
	}
	details[open] .chev {
		transform: rotate(180deg);
	}
	.acc-body {
		padding: 0 24px 36px 56px;
		max-width: 880px;
	}

	@media (max-width: 860px) {
		.acc-body {
			padding-inline: 0;
		}
		summary {
			grid-template-columns: 40px 1fr 24px;
		}
	}
</style>
