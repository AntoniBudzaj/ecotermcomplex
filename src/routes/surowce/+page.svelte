<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import Photo from '$lib/components/Photo.svelte';

	const items = [
		{ t: 'Gnojowica', d: 'Płynny nawóz z hodowli bydła i trzody. Stabilizuje proces fermentacji i dostarcza pożytecznych bakterii. Odbieramy go regularnie przez cały rok.' },
		{ t: 'Obornik', d: 'Obornik bydlęcy i drobiowy odbieramy bezpośrednio z gospodarstw. Dzięki fermentacji traci większość zapachu, zanim wróci na pole.' },
		{ t: 'Kiszonka kukurydzy', d: 'Energetyczny surowiec, który uzupełnia wsad w okresach mniejszej podaży. Przechowujemy go w silosach przejazdowych na terenie zakładu.' },
		{ t: 'Wysłodki buraczane', d: 'Produkt uboczny cukrowni, bogaty w łatwo rozkładalne cukry. Szybko zwiększa produkcję biogazu.' },
		{ t: 'Resztki z przetwórstwa', d: 'Odpady z przetwórstwa owoców, warzyw i mleka od lokalnych zakładów. Zamiast na składowisko trafiają do produkcji energii.' },
		{ t: 'Trawa i resztki roślinne', d: 'Pokosy z łąk, nieużytków i poboczy oraz resztki pożniwne. Uzupełniają wsad latem i jesienią.' }
	];

	const steps = [
		{ t: '1. Zgłoszenie', d: 'Wypełnij formularz lub zadzwoń. Zapytamy o rodzaj surowca, ilość i lokalizację gospodarstwa.' },
		{ t: '2. Próbka i wycena', d: 'Pobieramy próbkę, sprawdzamy jej wydajność biogazową i przygotowujemy ofertę cenową.' },
		{ t: '3. Umowa i odbiór', d: 'Ustalamy harmonogram dostaw na cały sezon. Odbiór i poferment w zamian, bez zbędnych formalności.' }
	];

	const rules = [
		'Odpadów zawierających tworzywa sztuczne',
		'Materiałów skażonych chemicznie',
		'Drewna i materiałów zdrewniałych',
		'[Inne wyłączenia – do uzupełnienia]'
	];

	let sent = $state(false);
</script>

<svelte:head>
	<title>Surowce – BioEnergia</title>
</svelte:head>

<PageIntro
	eyebrow="Surowce"
	title="Co trafia do biogazowni"
	lead="Pracujemy na tym, co i tak powstaje w rolnictwie i przetwórstwie. Większość surowców pochodzi z gospodarstw w promieniu [X] km."
/>

<div class="wrap" style="margin-bottom: var(--section)">
	<Photo
		src="/images/biogazownia-rzepak.jpg"
		alt="Pole kwitnącego rzepaku na tle biogazowni"
		caption="Surowce pochodzą z gospodarstw w najbliższej okolicy · zdjęcie poglądowe"
		height="380px"
		position="center 85%"
	/>
</div>

<section class="wrap">
	<div class="cols-3" style="padding-bottom: var(--section)">
		{#each items as it}
			<article class="card">
				<div class="row">
					<span class="dot"></span>
					<span class="share">udział [X]%</span>
				</div>
				<h2 class="h3 title">{it.t}</h2>
				<p class="small">{it.d}</p>
			</article>
		{/each}
	</div>
</section>

<section class="wrap">
	<div class="section rule stack" style="gap: 44px">
		<div class="split-rev">
			<div class="stack" style="gap: 20px">
				<div class="eyebrow">Współpraca</div>
				<h2 class="h2">Jak zostać dostawcą</h2>
			</div>
			<p class="body">
				Współpraca z nami to stały odbiór surowca i pewny termin płatności. Transport możemy
				zorganizować sami, a poferment odwieźć z powrotem na Twoje pola.
			</p>
		</div>
		<div class="cols-3">
			{#each steps as s}
				<div class="rule-col">
					<h3 class="h3">{s.t}</h3>
					<p class="small">{s.d}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="wrap">
	<div class="two section rule" style="align-items: start">
		<div class="stack">
			<h2 class="h2">Czego nie przyjmujemy</h2>
			<p class="body">Dbamy o stabilny proces i czysty poferment. Dlatego nie przyjmujemy:</p>
			<ul class="rules">
				{#each rules as r}
					<li>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3 3 L 13 13 M13 3 L 3 13" /></svg>
						{r}
					</li>
				{/each}
			</ul>
		</div>

		<form
			class="supply"
			onsubmit={(e) => {
				e.preventDefault();
				sent = true;
			}}
		>
			<h2 class="form-title">Masz surowiec? Zgłoś dostawę</h2>
			{#if sent}
				<p class="form-note" role="status">Dziękujemy! Oddzwonimy w ciągu [X] dni roboczych.</p>
			{:else}
				<div class="field">
					<label for="sr-name">Imię i nazwisko lub gospodarstwo</label>
					<input id="sr-name" name="name" type="text" autocomplete="name" required />
				</div>
				<div class="fields-2">
					<div class="field">
						<label for="sr-type">Rodzaj surowca</label>
						<select id="sr-type" name="type">
							<option>Gnojowica</option>
							<option>Obornik</option>
							<option>Kiszonka</option>
							<option>Inny</option>
						</select>
					</div>
					<div class="field">
						<label for="sr-qty">Ilość (t / rok)</label>
						<input id="sr-qty" name="qty" type="text" inputmode="numeric" />
					</div>
				</div>
				<div class="field">
					<label for="sr-tel">Telefon</label>
					<input id="sr-tel" name="phone" type="tel" autocomplete="tel" required />
				</div>
				<button class="btn" type="submit" style="align-self: flex-start; margin-top: 6px">Wyślij zgłoszenie</button>
			{/if}
		</form>
	</div>
</section>

<style>
	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.share {
		font-size: 14px;
		color: var(--muted);
	}
	.title {
		font-size: 24px;
		margin-top: 8px;
	}
	.rules {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.rules li {
		display: flex;
		gap: 16px;
		align-items: center;
		padding: 16px 0;
		border-top: 1px solid var(--card-line);
		font-size: 17px;
	}
	.supply {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: clamp(24px, 2.8vw, 40px);
		background: var(--green-soft);
		border-radius: var(--radius);
	}
	.form-title {
		font-size: 30px;
		font-weight: 400;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}
</style>
