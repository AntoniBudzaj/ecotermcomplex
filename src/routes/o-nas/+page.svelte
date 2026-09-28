<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';

	const values = [
		{ t: 'Odpowiedzialnie', d: 'Pracujemy tak, żeby biogazownia była dobrym sąsiadem: cicho, czysto i przejrzyście. Informujemy mieszkańców o planowanych pracach.' },
		{ t: 'Lokalnie', d: 'Surowce, energia i ciepło krążą w promieniu kilkunastu kilometrów. Mniej transportu to mniej emisji i hałasu.' },
		{ t: 'Otwarcie', d: 'Zapraszamy szkoły i mieszkańców na zwiedzanie instalacji. Pokazujemy, jak z odpadów powstaje energia.' }
	];

	const team = ['[Kierownik biogazowni]', '[Technolog procesu]', '[Operator]', '[Kontakt z dostawcami]'];
</script>

<svelte:head>
	<title>O nas – BioEnergia</title>
</svelte:head>

<PageIntro eyebrow="O nas" title="Lokalna energia, robiona przez sąsiadów dla sąsiadów" />

<section class="wrap">
	<div class="two section rule" style="align-items: start">
		<p class="quote">
			BioEnergia powstała z prostej obserwacji: w okolicznych gospodarstwach codziennie powstają tony
			odpadów, które mogą zasilać całą gminę. Postanowiliśmy zamienić ten problem w lokalne źródło
			energii.
		</p>
		<div class="stack" style="gap: 20px">
			<p class="body">
				Nasz zespół to inżynierowie, operatorzy i ludzie związani z rolnictwem. Współpracujemy z
				wieloma gospodarstwami z okolicy, które dostarczają surowce i odbierają nawóz. [Uzupełnij
				liczbę i historię firmy.]
			</p>
			<p class="body">
				W kolejnych latach chcemy rozbudować sieć ciepłowniczą dla sąsiednich budynków i przygotować
				instalację do produkcji biometanu. [Opisz rzeczywiste plany.]
			</p>
		</div>
	</div>
</section>

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src="/images/budowa-dron.jpg"
		alt="Budowa biogazowni widziana z drona: fundamenty i zbiorniki w trakcie montażu"
		caption="Budowa instalacji, [rok] · zdjęcie poglądowe"
		height="460px"
	/>
</div>

<section class="wrap">
	<div class="cols-3">
		{#each values as v}
			<article class="card-soft">
				<span class="dot"></span>
				<h2 class="h3" style="font-size: 24px; margin-top: 10px">{v.t}</h2>
				<p class="small" style="color: #45423d">{v.d}</p>
			</article>
		{/each}
	</div>
</section>

<section class="wrap section">
	<h2 class="h2" style="margin-bottom: 36px">Zespół</h2>
	<div class="cols-4">
		{#each team as role}
			<div class="person">
				<div class="placeholder" style="height: 260px">[Zdjęcie]</div>
				<span class="name">[Imię i nazwisko]</span>
				<span class="small">{role}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.quote {
		font-size: clamp(20px, 1.7vw, 24px);
		line-height: 1.55;
		letter-spacing: -0.01em;
	}
	.person {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.name {
		font-size: 19px;
		font-weight: 500;
		margin-top: 4px;
	}
</style>
