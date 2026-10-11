<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CycleDiagram from '$lib/components/CycleDiagram.svelte';
	import Card from '$lib/components/Card.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "Klimat",
		"eyebrow": "Klimat i zrównoważony rozwój",
		"title": "Lokalne zasoby. Odpowiedzialna energia. Mierzalny wpływ.",
		"tagline": "Korzyść środowiskowa musi wynikać z danych, technologii i odpowiedzialnej eksploatacji — nie wyłącznie z faktu, że inwestycja należy do sektora OZE.",
		"lead": "Postrzegamy projekty biogazowe i biometanowe jako element gospodarki obiegu zamkniętego oraz transformacji energetycznej. Ich potencjał wynika z możliwości wykorzystania odpowiednio dobranych strumieni materii organicznej, produkcji odnawialnych nośników energii oraz ograniczenia części emisji występujących w konwencjonalnych modelach zagospodarowania surowców. Wartość środowiskowa każdej inwestycji wymaga jednak indywidualnego potwierdzenia.",
		"photo": {
			"src": "/images/biogazownia-rzepak.jpg",
			"alt": "Biogazownia z zielonymi kopułami zbiorników wśród kwitnącego rzepaku",
			"caption": "Instalacja w otoczeniu pól, zdjęcie poglądowe",
			"position": "center 55%"
		},
		"sections": [
			{
				"title": "Gospodarka obiegu zamkniętego",
				"paras": [
					"Fermentacja beztlenowa może stanowić ogniwo lokalnego łańcucha wykorzystania produktów ubocznych rolnictwa, przetwórstwa spożywczego i innych dopuszczonych strumieni biodegradowalnych. Pozwala odzyskiwać energię z materii organicznej, a odpowiednio prowadzona gospodarka pofermentem może wspierać obieg składników pokarmowych.",
					"Zrównoważone rozwiązanie wymaga kontroli pochodzenia substratów, możliwości ich przetwarzania, jakości produktów, bezpieczeństwa transportu i zgodności z wymaganiami środowiskowymi."
				]
			},
			{
				"title": "Biometan a dekarbonizacja",
				"paras": [
					"Biometan uzyskany z odpowiednio oczyszczonego biogazu może stanowić odnawialny gaz wykorzystywany w zastosowaniach wymagających paliwa gazowego. Zakres redukcji emisji w porównaniu z rozwiązaniem referencyjnym zależy jednak od łańcucha dostaw, procesu wytwarzania, energii pomocniczej, strat metanu, metodyki obliczeń i sposobu wykorzystania produktu.",
					"Dlatego rozwijając projekty, analizujemy nie tylko wolumen produkowanego biometanu, lecz także źródła emisji i możliwe działania ograniczające ich poziom."
				]
			},
			{
				"title": "Efektywność energetyczna i integracja technologii",
				"paras": [
					"Zwracamy uwagę na potrzeby własne instalacji, bilans cieplny, możliwość odzysku ciepła, współpracę z kogeneracją, fotowoltaiką i magazynami energii. Optymalizacja energetyczna powinna uwzględniać rzeczywistą charakterystykę procesu i profil zapotrzebowania, a nie opierać się wyłącznie na mocach nominalnych urządzeń."
				]
			},
			{
				"title": "Ochrona środowiska i ograniczanie uciążliwości",
				"paras": [
					"Już na etapie lokalizacji analizujemy otoczenie przyrodnicze i społeczne inwestycji, natężenie transportu, gospodarkę wodami i ściekami, emisje do powietrza, potencjalne oddziaływanie zapachowe i akustyczne oraz rozwiązania minimalizujące. W projektowaniu znaczenie mają hermetyzacja odpowiednich operacji, właściwe magazynowanie substratów, uporządkowana logistyka i eksploatacyjne procedury kontroli.",
					"Nie zakładamy, że każdy problem można rozwiązać samą deklaracją technologiczną. Dlatego dokumentacja środowiskowa powinna odzwierciedlać rzeczywistą konfigurację instalacji i warunki konkretnej lokalizacji."
				]
			},
			{
				"title": "Dialog z otoczeniem",
				"paras": [
					"Inwestycje w infrastrukturę przetwarzania materii organicznej wymagają rzetelnej informacji. W komunikacji z mieszkańcami, władzami lokalnymi i sąsiadującymi podmiotami szczególnie ważne są: wyjaśnienie procesu, źródeł substratów, transportu, gospodarki pofermentem, zabezpieczeń i procedur reagowania na nieprawidłowości.",
					"Promujemy transparentny dialog oparty na faktach i dokumentach. Uważamy, że odpowiednio wcześnie przeprowadzona rozmowa pomaga rozpoznać lokalne obawy i przełożyć je na sprawdzalne rozwiązania projektowe."
				]
			},
			{
				"title": "Pomiar wpływu zamiast ogólnych deklaracji",
				"paras": [
					"Stosujemy podejście oparte na wskaźnikach: uzysk energii, zużycie mediów, wolumeny i źródła substratów, logistykę, straty gazu, gospodarkę pofermentem i bilans GHG. W opracowaniach rozróżniamy wartości prognozowane od wyników pomiarowych, a deklaracje o redukcji emisji od ocen potwierdzonych właściwą metodyką."
				]
			}
		],
		"cta": {
			"text": "Planujesz przedsięwzięcie oparte na lokalnych zasobach i chcesz poznać jego potencjał środowiskowy? Pomożemy ocenić możliwe korzyści i ograniczenia.",
			"label": "Skontaktuj się z nami"
		}
	};
	const cycle = [
		{ title: 'Substraty', text: 'Produkty uboczne rolnictwa, przetwórstwa spożywczego i inne dopuszczone strumienie biodegradowalne. Kontrolujemy ich pochodzenie i możliwość przetwarzania.' },
		{ title: 'Fermentacja', text: 'Beztlenowy rozkład materii organicznej w zbiornikach. Bilanse masowe i energetyczne decydują o stabilności procesu.' },
		{ title: 'Biogaz', text: 'Oczyszczony biogaz zasila kogenerację albo jest uzdatniany do biometanu.' },
		{ title: 'Energia i biometan', text: 'Prąd, ciepło lub odnawialny gaz. Redukcja emisji zależy od łańcucha dostaw, strat metanu i metodyki obliczeń.' },
		{ title: 'Poferment', text: 'Produkt uboczny fermentacji. Jego jakość i zagospodarowanie wpływają na ekonomię i logistykę przedsięwzięcia.' },
		{ title: 'Pola', text: 'Odpowiednio prowadzona gospodarka pofermentem może wspierać obieg składników pokarmowych.' }
	];
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
	<title>Klimat i zrównoważony rozwój – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src={page.photo.src}
		alt={page.photo.alt}
		caption={page.photo.caption}
		height="440px"
		position={page.photo.position}
	/>
</div>

	<section class="wrap cycle-wrap">
	<CycleDiagram nodes={cycle} />
</section>

<section class="bands">
		{#each page.sections as s, i}
			{#if i === 4}
				<div class="band-card wrap">
					<Card tone="green" size="lg">
						<div class="band-in-card">
							<h2 class="h2">{s.title}</h2>
							<div class="stack" style="gap: 18px">{@render body(s)}</div>
						</div>
					</Card>
				</div>
			{:else}
				<div class="band" class:soft={i % 2 === 0}>
					<div class="wrap band-in" class:flip={i % 2 === 1}>
						<h2 class="h2">{s.title}</h2>
						<div class="stack" style="gap: 18px">
							{@render body(s)}
							{#if i === 1}<Photo src="/images/zbiornik-dron.jpg" alt="Zbiornik fermentacyjny z zieloną kopułą membranową, widok z drona" caption="Zbiornik fermentacyjny z dachem membranowym, zdjęcie poglądowe" height="340px" position="center 40%" />{:else if i === 3}<Photo src="/images/biogazownia-instalacja.jpg" alt="Nowoczesna instalacja biogazowa z zielonymi zbiornikami i rurociągami o wschodzie słońca" caption="Wizualizacja nowoczesnej instalacji, zdjęcie poglądowe" height="340px" position="center" />{/if}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</section>

<section class="section">
	<CtaBand text={page.cta.text} href="/kontakt/" label={page.cta.label} />
</section>

<style>
	.band-card {
		padding-block: clamp(1.5rem, 3vw, 2.5rem);
	}
	.band-in-card {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: clamp(2.5rem, 6.6vw, 6rem);
		align-items: start;
	}
	@media (max-width: 860px) {
		.band-in-card {
			grid-template-columns: 1fr;
			row-gap: 1.25rem;
		}
	}
	.cycle-wrap {
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

	.band {
		padding-block: clamp(44px, 5.5vw, 80px);
	}
	.band.soft {
		background: var(--green-soft);
	}
	.band-in {
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: clamp(40px, 6.6vw, 96px);
		align-items: start;
	}
	.band-in.flip {
		grid-template-columns: 7fr 5fr;
	}
	.band-in.flip h2 {
		order: 2;
	}
	.band-in.flip .stack {
		order: 1;
	}

	@media (max-width: 860px) {
		.band-in,
		.band-in.flip {
			grid-template-columns: 1fr;
			row-gap: 20px;
		}
		.band-in.flip h2,
		.band-in.flip .stack {
			order: 0;
		}
	}
</style>
