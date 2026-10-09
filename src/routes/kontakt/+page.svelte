<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import { contact } from '$lib/nav';

	const reasons = [
		'Rozwój projektu biogazowego, biometanowego lub hybrydowego źródła OZE.',
		'Ocena działki, bazy substratowej, infrastruktury lub istniejącego projektu.',
		'Wsparcie technologiczne, projektowe, środowiskowe lub przyłączeniowe.',
		'Studium wykonalności, due diligence i przygotowanie materiałów dla inwestora.',
		'Współpraca z gospodarstwem, zakładem przemysłowym, samorządem lub właścicielem gruntu.',
		'Partnerstwo badawczo-rozwojowe, pomiary, analityka, systemy cyfrowe i demonstratory.'
	];

	const topics = ['Rozwój projektu', 'Projektowanie', 'Doradztwo', 'B+R', 'Inne'];
	let topic = $state(topics[0]);
	let sent = $state(false);
</script>

<svelte:head>
	<title>Kontakt – Ecotermcomplex</title>
	<meta
		name="description"
		content="Każde przedsięwzięcie zaczyna się od rozmowy, która pozwala ustalić potencjał projektu, oczekiwania stron i najbliższy możliwy krok."
	/>
</svelte:head>

<section class="wrap intro">
	<div class="stack" style="gap: 28px">
		<div class="eyebrow">Kontakt</div>
		<h1 class="h1">Porozmawiajmy o Twojej inwestycji.</h1>
		<p class="lead">
			Masz pomysł na biogazownię lub biometanownię, teren pod inwestycję, dostęp do substratów, projekt
			wymagający niezależnej analizy lub rozwiązanie technologiczne, które chcesz rozwijać wspólnie z
			partnerem przemysłowym? Przedstaw nam krótko swoją sytuację. Pomożemy określić, od czego zacząć i
			jakie informacje będą potrzebne do rzetelnej oceny przedsięwzięcia.
		</p>
		<dl class="details">
			<div><dt>Firma</dt><dd>Ecotermcomplex Sp. z o.o.</dd></div>
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
			<p class="form-note" role="status">Odezwiemy się, aby ustalić najbliższy możliwy krok.</p>
		{:else}
			<div class="fields-2">
				<div class="field">
					<label for="ec-name">Imię i nazwisko</label>
					<input id="ec-name" name="name" type="text" autocomplete="name" required />
				</div>
				<div class="field">
					<label for="ec-org">Firma / organizacja</label>
					<input id="ec-org" name="organization" type="text" autocomplete="organization" />
				</div>
			</div>
			<div class="fields-2">
				<div class="field">
					<label for="ec-mail">E-mail</label>
					<input id="ec-mail" name="email" type="email" autocomplete="email" required />
				</div>
				<div class="field">
					<label for="ec-tel">Telefon (opcjonalnie)</label>
					<input id="ec-tel" name="phone" type="tel" autocomplete="tel" />
				</div>
			</div>
			<fieldset class="field">
				<legend class="label">Temat współpracy</legend>
				<div class="topics">
					{#each topics as t}
						<Button variant="chip" selected={topic === t} aria-pressed={topic === t} onclick={() => (topic = t)}>{t}</Button>
					{/each}
				</div>
				<input type="hidden" name="topic" value={topic} />
			</fieldset>
			<div class="field">
				<label for="ec-loc">Lokalizacja inwestycji (opcjonalnie)</label>
				<input id="ec-loc" name="location" type="text" />
			</div>
			<div class="field">
				<label for="ec-msg">Wiadomość</label>
				<textarea id="ec-msg" name="message" required></textarea>
			</div>
			<!-- pole antyspamowe: ukryte przed ludźmi, boty je wypełniają -->
			<div class="hp" aria-hidden="true">
				<label for="ec-web">Nie wypełniaj tego pola</label>
				<input id="ec-web" name="website" type="text" tabindex="-1" autocomplete="off" />
			</div>
			<div class="consent">
				<input id="ec-rodo" type="checkbox" required />
				<label for="ec-rodo">Zgadzam się na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na wiadomość.</label>
			</div>
			<Button type="submit" class="submit">Wyślij wiadomość</Button>
		{/if}
	</form>
</section>

<section class="wrap">
	<div class="split-rev rule section" style="align-items: start">
		<h2 class="h2">W jakich sprawach warto się skontaktować</h2>
		<ul class="reasons">
			{#each reasons as r}
				<li>
					<span class="dot" style="margin-top: 10px"></span>
					<span class="body">{r}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/zbiornik-dron.jpg"
			alt="Zbiornik biogazowni z zieloną kopułą otoczony lasem, widok z drona"
			caption="Zbiornik fermentacyjny z dachem membranowym · zdjęcie poglądowe"
			height="420px"
			position="center 45%"
		/>
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Pierwsza wiadomość</div>
			<h2 class="h2">Jak ją przygotować</h2>
			<p class="body">
				Dla sprawnego rozpoczęcia rozmowy wystarczy wskazać lokalizację, rodzaj przedsięwzięcia,
				przewidywaną skalę, dostępne surowce lub infrastrukturę, obecny etap przygotowania i oczekiwany
				model współpracy.
			</p>
			<p class="body">
				Jeśli dysponujesz mapą, koncepcją lub podstawowymi dokumentami, możesz zaznaczyć ich
				dostępność. Informacji poufnych nie trzeba przekazywać w pierwszej wiadomości.
			</p>
		</div>
	</div>
</section>

<section class="wrap">
	<p class="closing rule">
		Ecotermcomplex — łączymy wiedzę inżynieryjną, doświadczenie inwestycyjne i zrozumienie lokalnych
		uwarunkowań, aby rozwijać projekty energetyczne mające solidne podstawy do realizacji.
	</p>
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
	.form :global(.submit) {
		align-self: flex-start;
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
	.reasons {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.reasons li {
		display: flex;
		gap: 16px;
	}
	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.closing {
		padding-top: var(--section);
		font-size: clamp(20px, 1.7vw, 24px);
		line-height: 1.55;
		letter-spacing: -0.01em;
		max-width: 900px;
	}
	@media (max-width: 860px) {
		.intro {
			grid-template-columns: 1fr;
			row-gap: 40px;
		}
	}
</style>
