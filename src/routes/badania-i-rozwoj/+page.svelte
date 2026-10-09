<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const page = {
		"nav": "B+R",
		"eyebrow": "Badania i rozwój",
		"title": "Od danych procesowych do lepszych decyzji w czasie rzeczywistym.",
		"tagline": "Rozwijamy podejście do biogazowni i biometanowni jako inteligentnych systemów procesowych, wykorzystujących pomiary, modele i dane do wspierania decyzji operacyjnych.",
		"lead": "Transformacja energetyczna wymaga nie tylko nowych instalacji, lecz również nowych metod ich prowadzenia. Obszar B+R Ecotermcomplex koncentruje się na łączeniu pomiarów, analizy danych, modeli procesowych i narzędzi decyzyjnych. Kierunkiem rozwijanych prac jest poprawa przewidywalności produkcji, stabilności operacyjnej, efektywności surowcowej oraz jakości raportowania środowiskowego.",
		"sections": [
			{
				"title": "Wyzwaniem nie jest brak danych, lecz ich wykorzystanie",
				"paras": [
					"Typowa instalacja dysponuje informacjami o przepływach, temperaturach, ciśnieniach, poziomach, pracy urządzeń i jakości gazu. Jednocześnie część kluczowych właściwości substratów zmienia się między dostawami i nie jest mierzona wystarczająco szybko, aby wspierać bieżące decyzje.",
					"Nasze zainteresowania badawcze obejmują tworzenie powiązań między charakterystyką wsadu, stanem procesu fermentacji, uzyskiem metanu, bilansem energii, kosztami operacyjnymi i śladem emisji. Celem jest wsparcie operatora w wyborze działania, a nie jedynie prezentacja kolejnych wykresów."
				]
			},
			{
				"title": "Szybka charakterystyka substratów",
				"paras": [
					"Rozpatrujemy wykorzystanie metod spektroskopowych, optycznych i akustycznych do oceny zmienności surowców oraz estymacji istotnych parametrów, takich jak sucha masa, sucha masa organiczna czy potencjał biometanowy. Zestawienie pomiarów szybkich z referencyjnymi badaniami laboratoryjnymi może pozwolić opracować narzędzia do oceny substratów przed ich wprowadzeniem do procesu.",
					"Szczególnym problemem badawczym jest heterogeniczność materiału: różne struktury, zawartość wody i właściwości fizyczne utrudniają stworzenie wiarygodnego modelu dla szerokiego zakresu surowców. Dlatego kluczowe są walidacja, niepewność pomiaru i powtarzalność wyników."
				]
			},
			{
				"title": "Wirtualne czujniki i modele hybrydowe",
				"paras": [
					"Jednym z analizowanych kierunków jest połączenie modeli opisujących fizykochemiczne podstawy fermentacji z algorytmami uczenia maszynowego. Takie modele mogą szacować parametry trudne do ciągłego pomiaru, prognozować uzysk gazu oraz sygnalizować odchylenia od oczekiwanego stanu pracy.",
					"Badania dotyczą również obserwacji wskaźników, które mogą wyprzedzać spadek stabilności procesu, w tym zmian profilu lotnych kwasów tłuszczowych, równowagi azotowej czy oddziaływania wybranych inhibitorów. Podejście to wspiera utrzymanie procesu, ale nie przesuwa głównego celu systemu w stronę wyłącznie biologicznej diagnostyki."
				]
			},
			{
				"title": "System wspomagania decyzji operacyjnych",
				"paras": [
					"Docelową koncepcją jest narzędzie łączące dane z czujników, informacje laboratoryjne, systemy SCADA, modele prognozowania i algorytmy oceny wariantów pracy. Rozpatrywane decyzje mogą dotyczyć mieszaniny substratów, harmonogramu podawania, wykorzystania energii, planowania logistyki lub zarządzania ograniczeniami eksploatacyjnymi.",
					"Kryteria oceny nie ograniczają się do maksymalizacji produkcji biogazu. Obejmują również koszt wsadu, transport, zużycie energii, ograniczanie emisji metanu, przewidywalność pracy i wpływ na wskaźniki środowiskowe. To wielokryterialne ujęcie ma umożliwić świadome porównywanie wariantów, także przy niepełnych i niepewnych danych."
				]
			},
			{
				"title": "Emisje GHG i śledzenie łańcucha wartości",
				"paras": [
					"Rozwijany obszar badawczy obejmuje integrację danych o pochodzeniu i transporcie substratów, fermentacji, zagospodarowaniu pofermentu, oczyszczaniu gazu, zużyciu energii i potencjalnych emisjach niezorganizowanych. Celem jest stworzenie wiarygodnego toru danych wspierającego kalkulacje emisji gazów cieplarnianych oraz analizę działań redukcyjnych zgodnie z właściwymi metodykami i wymaganiami.",
					"W przypadku rozwiązań biometanowych ważna jest możliwość oceny, jak decyzje operacyjne zmieniają nie tylko ilość produktu, ale również jego jednostkowy ślad emisyjny."
				]
			},
			{
				"title": "Droga od koncepcji do walidacji",
				"paras": [
					"Prace B+R wymagają etapowego podejścia: sformułowania hipotez, zebrania danych referencyjnych, opracowania modeli, testów w warunkach laboratoryjnych oraz późniejszej walidacji w środowisku przemysłowym. Dopiero taki proces pozwala ocenić realne osiągi systemu, jego powtarzalność, odporność na zmianę substratów i użyteczność dla obsługi instalacji."
				],
				"note": "Opisane technologie i funkcjonalności stanowią kierunki prowadzonych lub planowanych prac badawczo-rozwojowych. Nie należy interpretować ich jako potwierdzenia osiągniętego wyniku badawczego lub dostępności gotowego produktu komercyjnego."
			},
			{
				"title": "Współpraca nauka–przemysł",
				"paras": [
					"Poszukujemy praktycznych połączeń kompetencji z obszaru analityki procesowej, elektroniki pomiarowej, spektroskopii, automatyki, modelowania, informatyki i technologii biogazowej. Współpraca z jednostkami naukowymi, laboratoriami i dostawcami rozwiązań pomiarowych umożliwia weryfikowanie hipotez w warunkach odpowiadających realnym potrzebom operatorów."
				]
			}
		],
		"cta": {
			"text": "Rozwijasz aparaturę, sensory, algorytmy lub metody badawcze dla przemysłu? Porozmawiajmy o wspólnych pracach i demonstratorach.",
			"label": "Zaproponuj współpracę B+R"
		}
	};

	const num = (i: number) => String(i + 1).padStart(2, '0');
	const pipeline = ['Pomiar', 'Dane', 'Model', 'Decyzja', 'Walidacja'];
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
	<title>Badania i rozwój – Ecotermcomplex</title>
	<meta name="description" content={page.tagline} />
</svelte:head>

<PageIntro eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

	<section class="wrap">
		<div class="pipe rule">
			<div class="eyebrow">Ścieżka badawcza</div>
			<ol class="flow">
				{#each pipeline as step, i}
					<li><span class="idx">{num(i)}</span>{step}</li>
				{/each}
			</ol>
		</div>
		<div class="grid-2 research">
			{#each page.sections as s, i}
				<article class="rule-col r-item" class:wide={i === page.sections.length - 1 && page.sections.length % 2 === 1}>
					<h2 class="h3 r-title">{s.title}</h2>
					{@render body(s)}
				</article>
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

	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
	}
	.pipe {
		padding-block: 36px clamp(36px, 4vw, 56px);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.flow {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 12px;
	}
	.flow li {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 18px 20px;
		border: 1.5px solid var(--ink);
		border-radius: 16px;
		font-size: 19px;
		font-weight: 500;
		position: relative;
	}
	.flow li:not(:last-child)::after {
		content: '→';
		position: absolute;
		right: -17px;
		top: 50%;
		transform: translateY(-50%);
		background: var(--bg);
		font-weight: 400;
		z-index: 1;
		line-height: 1;
		padding: 2px 0;
	}
	.research {
		gap: 48px 40px;
		padding-bottom: var(--section);
	}
	.r-item {
		gap: 14px;
	}
	.r-item.wide {
		grid-column: 1 / -1;
	}
	.r-title {
		font-size: 24px;
	}

	@media (max-width: 860px) {
		.grid-2 {
			grid-template-columns: 1fr;
		}
		.flow {
			grid-template-columns: 1fr;
		}
		.flow li:not(:last-child)::after {
			content: '↓';
			right: auto;
			left: 20px;
			top: auto;
			bottom: -19px;
			transform: none;
		}
	}
</style>
