<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Card from '$lib/components/Card.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const company = 'ECOTERM COMPLEX SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ';
	const projectName =
		'ETCheck – kompleksowa usługa optymalizacyjna i serwisowa dla budynków z wykorzystaniem systemu monitoringu charakterystycznych parametrów, zapotrzebowania energii, analizy danych i zachowań użytkowników';
	const grant = '1\u00a0712\u00a0289,33\u00a0PLN';
</script>

<svelte:head>
	<title>ETCheck – Ecotermcomplex</title>
	<meta
		name="description"
		content="ETCheck: projekt dofinansowany z Funduszy Europejskich. Optymalizacja energetyczna budynków użyteczności publicznej."
	/>
</svelte:head>

<PageIntro title="ETCheck" lead="Optymalizacja energetyczna budynków" />

<section class="wrap">
	<div class="two project" style="align-items: stretch">
		<div class="stack text">
			<h2 class="h2">ETCheck – Optymalizacja energetyczna budynków</h2>
			<p class="body">
				{company} realizuje projekt dofinansowany z Funduszy Europejskich „{projectName}”.
			</p>
			<p class="body">
				Celem projektu jest budowa pozycji konkurencyjnej przedsiębiorstwa ECOTERM poprzez opracowanie
				i przygotowanie własnej technologii umożliwiającej wdrożenie nowej, kompleksowej usługi ETCheck
				przeznaczonej dla inwestorów i operatorów budynków użyteczności publicznej.
			</p>

    <img
      class="logos"
      src="/images/fundusze-europejskie.webp"
      alt="Fundusze Europejskie Inteligentny Rozwój, Rzeczpospolita Polska, Unia Europejska, Europejski Fundusz Rozwoju Regionalnego"
    />
		</div>


		<Card tone="green" size="lg" class="grant">
			<p class="grant-label">Dofinansowanie projektu z UE</p>
			<p class="grant-amount">{grant}</p>
		</Card>
	</div>
</section>

<section class="section">
	<CtaBand
		text="Zarządzasz budynkiem użyteczności publicznej i chcesz dowiedzieć się więcej o usłudze ETCheck?"
		href="/kontakt/"
		label="Skontaktuj się z nami"
	/>
</section>

<style>
	.project {
		padding-bottom: clamp(2rem, 4vw, 3.5rem);
	}

	.text {
		max-width: 46rem;
	}
	.project :global(.grant) {
		justify-content: center;
		gap: 0.75rem;
	}
	.grant-label {
		font-size: 1rem;
	}
	.grant-amount {
		font-family: var(--font-display);
		font-size: clamp(1rem, 1.7vw, 1.5rem);
		line-height: 1.15;
		letter-spacing: -0.01em;
	}

	.logos {
		display: block;
		width: 100%;
		max-width: 350px;
		height: auto;
	}
</style>
