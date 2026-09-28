<script lang="ts">
	import Photo from '$lib/components/Photo.svelte';
	import { contact } from '$lib/nav';

	const topics = ['Dostawa surowca', 'Odbiór ciepła', 'Zwiedzanie', 'Inne'];
	let topic = $state(topics[0]);
	let sent = $state(false);
</script>

<svelte:head>
	<title>Kontakt – BioEnergia</title>
</svelte:head>

<section class="wrap intro">
	<div class="stack" style="gap: 28px">
		<div class="eyebrow">Kontakt</div>
		<h1 class="h1">Porozmawiajmy</h1>
		<p class="lead">
			Pytania o dostawy surowców, odbiór ciepła albo wizytę w biogazowni? Napisz lub zadzwoń.
		</p>
		<dl class="details">
			<div><dt>Adres</dt><dd>{contact.address}</dd></div>
			<div><dt>Telefon</dt><dd>{contact.phone}</dd></div>
			<div><dt>E-mail</dt><dd>{contact.email}</dd></div>
		</dl>
	</div>

	<form
		class="card form"
		onsubmit={(e) => {
			e.preventDefault();
			sent = true;
		}}
	>
		{#if sent}
			<h2 class="h3">Dziękujemy za wiadomość!</h2>
			<p class="form-note" role="status">Odpowiemy w ciągu [X] dni roboczych.</p>
		{:else}
			<div class="fields-2">
				<div class="field">
					<label for="bk-name">Imię i nazwisko</label>
					<input id="bk-name" name="name" type="text" autocomplete="name" required />
				</div>
				<div class="field">
					<label for="bk-mail">E-mail</label>
					<input id="bk-mail" name="email" type="email" autocomplete="email" required />
				</div>
			</div>
			<fieldset class="field">
				<legend class="label">Temat</legend>
				<div class="topics">
					{#each topics as t}
						<button type="button" class="chip" class:on={topic === t} aria-pressed={topic === t} onclick={() => (topic = t)}>
							{t}
						</button>
					{/each}
				</div>
				<input type="hidden" name="topic" value={topic} />
			</fieldset>
			<div class="field">
				<label for="bk-msg">Wiadomość</label>
				<textarea id="bk-msg" name="message" required></textarea>
			</div>
			<div class="consent">
				<input id="bk-rodo" type="checkbox" required />
				<label for="bk-rodo">Zgadzam się na przetwarzanie danych w celu odpowiedzi. [Klauzula RODO]</label>
			</div>
			<button class="btn" type="submit" style="align-self: flex-start">Wyślij wiadomość</button>
		{/if}
	</form>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/zbiornik-dron.jpg"
			alt="Zbiornik biogazowni z zieloną kopułą otoczony lasem, widok z drona"
			caption="Teren biogazowni · zdjęcie poglądowe"
			height="420px"
			position="center 45%"
		/>
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Odwiedź nas</div>
			<h2 class="h2">Jak do nas dojechać</h2>
			<p class="body">
				Biogazownia leży [X] km od centrum [miejscowości], przy drodze [nr]. Wjazd dla dostawców znajduje
				się od strony [kierunek], a parking dla gości tuż przy budynku biura.
			</p>
			<p class="body">
				Zwiedzanie dla szkół i grup zorganizowanych prowadzimy po wcześniejszym umówieniu, zwykle w [dni
				tygodnia]. Wizyta trwa około [X] godziny.
			</p>
			<div class="placeholder" style="height: 180px; margin-top: 8px">
				[Mapa – osadź Google Maps lub OpenStreetMap]
			</div>
		</div>
	</div>
</section>

<style>
	.intro {
		padding-top: clamp(56px, 7.2vw, 104px);
		padding-bottom: clamp(48px, 6.6vw, 96px);
		display: grid;
		grid-template-columns: 5fr 7fr;
		column-gap: clamp(40px, 6.6vw, 96px);
		align-items: start;
	}
	.details {
		margin: 8px 0 0;
	}
	.details div {
		padding: 20px 0;
		border-top: 1px solid var(--line);
	}
	.details div:last-child {
		border-bottom: 1px solid var(--line);
	}
	dt {
		font-size: 14px;
		color: var(--muted);
	}
	dd {
		margin: 4px 0 0;
		font-size: 18px;
	}
	.form {
		gap: 20px;
		padding: clamp(24px, 3.3vw, 48px);
		border-radius: var(--radius);
	}
	fieldset {
		border: 0;
		padding: 0;
		margin: 0;
	}
	legend {
		margin-bottom: 10px;
	}
	.topics {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.chip {
		min-height: 44px;
		padding: 0 20px;
		border-radius: 999px;
		border: 1.5px solid var(--ink);
		background: transparent;
		color: var(--ink);
		font: 400 15px 'DM Sans', sans-serif;
		cursor: pointer;
	}
	.chip.on {
		background: var(--green);
		border-color: var(--green);
	}
	.consent {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		font-size: 14px;
		line-height: 1.5;
		color: var(--muted);
	}
	.consent input {
		width: 20px;
		height: 20px;
		margin: 1px 0 0;
		flex-shrink: 0;
		accent-color: var(--ink);
	}
	@media (max-width: 860px) {
		.intro {
			grid-template-columns: 1fr;
			row-gap: 40px;
		}
	}
</style>
