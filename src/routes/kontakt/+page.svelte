<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FormGrid from '$lib/components/FormGrid.svelte';
	import Field from '$lib/components/Field.svelte';
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
		class="form"
		onsubmit={(e) => {
			e.preventDefault();
			sent = true;
		}}
	>
		{#if sent}
			<h2 class="h3">Dziękujemy za wiadomość!</h2>
			<p class="form-note" role="status">Odezwiemy się, aby ustalić najbliższy możliwy krok.</p>
		{:else}
			<FormGrid>
				<Field half id="ec-name" name="name" label="Imię i nazwisko" autocomplete="name" required />
				<Field half id="ec-org" name="organization" label="Firma / organizacja" hint="Opcjonalne" autocomplete="organization" />
				<Field half id="ec-mail" name="email" type="email" label="E-mail" autocomplete="email" required />
				<Field half id="ec-tel" name="phone" type="tel" label="Telefon" hint="Opcjonalne" autocomplete="tel" />
				<Field half id="ec-topic" name="topic" type="select" label="Temat współpracy" options={topics} bind:value={topic} />
				<Field half id="ec-loc" name="location" label="Lokalizacja inwestycji" hint="Opcjonalne" />
				<Field id="ec-msg" name="message" type="textarea" label="Wiadomość" required />
				<!-- pole antyspamowe: ukryte przed ludźmi, boty je wypełniają -->
				<div class="hp" aria-hidden="true">
					<label for="ec-web">Nie wypełniaj tego pola</label>
					<input id="ec-web" name="website" type="text" tabindex="-1" autocomplete="off" />
				</div>
				<Field id="ec-rodo" name="consent" type="checkbox" required>
					Zgadzam się na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na wiadomość, zgodnie z <a href="/polityka-prywatnosci/">Polityką prywatności</a>.
				</Field>
				<div class="actions" data-span="full">
					<Button type="submit">Wyślij wiadomość</Button>
				</div>
			</FormGrid>
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
			caption="Zbiornik fermentacyjny z dachem membranowym, zdjęcie poglądowe"
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
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
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
		font-size: 0.875rem;
		color: var(--muted);
	}
	dd {
		margin: 4px 0 0;
		font-size: 1.125rem;
	}
	.form {
		gap: 20px;
    background-color: var(--green-soft);
		padding: clamp(24px, 3.3vw, 48px);
		border-radius: 0;
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
	.actions {
		display: flex;
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
		font-size: clamp(1.25rem, 1.7vw, 1.5rem);
		line-height: 1.55;
		letter-spacing: -0.01em;
		max-width: 900px;
	}
	@media (max-width: 860px) {
		.intro {
			grid-template-columns: minmax(0, 1fr);
			row-gap: 40px;
		}
	}
</style>
