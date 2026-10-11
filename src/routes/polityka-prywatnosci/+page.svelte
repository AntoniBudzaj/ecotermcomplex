<script lang="ts">
	import PageIntro from '$lib/components/PageIntro.svelte';
	import { contact } from '$lib/nav';

	const updated = '11 października 2026';

	const rights = [
		'dostępu do swoich danych oraz otrzymania ich kopii,',
		'sprostowania danych, które są nieprawidłowe,',
		'usunięcia danych lub ograniczenia ich przetwarzania,',
		'sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,',
		'przenoszenia danych, jeśli przetwarzamy je na podstawie zgody,',
		'cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania sprzed jej cofnięcia.'
	];

	const fields = [
		'imię i nazwisko,',
		'adres e-mail,',
		'nazwa firmy lub organizacji, numer telefonu i lokalizacja inwestycji (jeśli je podasz),',
		'wybrany temat współpracy i treść wiadomości.'
	];
</script>

<svelte:head>
	<title>Polityka prywatności – Ecotermcomplex</title>
	<meta name="description" content="Jak Ecotermcomplex przetwarza dane osobowe przekazane przez formularz kontaktowy i korzystanie ze strony." />
</svelte:head>

<PageIntro title="Polityka prywatności" lead="Wyjaśniamy, jakie dane osobowe zbieramy, po co, jak długo je przechowujemy i jakie masz prawa." />

<section class="wrap">
	<div class="prose">
		<p class="small updated">Ostatnia aktualizacja: {updated}</p>

		<h2 class="h3">1. Administrator danych</h2>
		<p class="body">
			Administratorem Twoich danych osobowych jest Ecotermcomplex Sp. z o.o. z siedzibą w Poznaniu, {contact.address}.
			Kontakt w sprawach danych osobowych: <a href="mailto:{contact.email}">{contact.email}</a>.
		</p>

		<h2 class="h3">2. Formularz kontaktowy</h2>
		<p class="body">Gdy piszesz do nas przez formularz, przetwarzamy dane, które w nim podasz:</p>
		<ul class="list">
			{#each fields as f}
				<li class="body">{f}</li>
			{/each}
		</ul>
		<p class="body">
			Używamy ich, żeby odpowiedzieć na wiadomość i ustalić kolejny krok współpracy. Podstawą jest Twoja zgoda
			(art. 6 ust. 1 lit. a RODO). Jeśli rozmowa przejdzie w ofertę lub umowę, przetwarzamy dane także po to,
			żeby podjąć działania przed zawarciem umowy (art. 6 ust. 1 lit. b RODO). Dane możemy zachować również
			po to, by ustalić, dochodzić lub obronić roszczenia, co jest naszym prawnie uzasadnionym interesem
			(art. 6 ust. 1 lit. f RODO).
		</p>
		<p class="body">
			Podanie danych jest dobrowolne, ale imię i nazwisko oraz adres e-mail są potrzebne, żebyśmy mogli
			odpowiedzieć. W pierwszej wiadomości nie przekazuj informacji poufnych.
		</p>

		<h2 class="h3">3. Dane techniczne strony</h2>
		<p class="body">
			Serwer, na którym działa strona, może zapisywać standardowe dane techniczne połączenia (np. adres IP,
			datę i godzinę, adres odwiedzanej strony). Służą one do zapewnienia bezpieczeństwa i poprawnego
			działania serwisu.
		</p>
		<p class="body">
			Strona wczytuje czcionki z usługi Google Fonts. Przeglądarka łączy się wtedy z serwerami Google, które
			mogą otrzymać Twój adres IP.
		</p>

		<h2 class="h3">4. Pliki cookies</h2>
		<p class="body">
			Nie stosujemy cookies analitycznych ani marketingowych. Strona nie zapisuje w Twojej przeglądarce
			plików potrzebnych do śledzenia aktywności.
		</p>

		<h2 class="h3">5. Odbiorcy danych</h2>
		<p class="body">
			Dane mogą być powierzane podmiotom, które obsługują nas technicznie, np. dostawcom hostingu i poczty
			elektronicznej. Nie sprzedajemy danych i nie przekazujemy ich do celów marketingowych osób trzecich.
		</p>

		<h2 class="h3">6. Jak długo przechowujemy dane</h2>
		<p class="body">
			Dane z formularza przechowujemy przez czas potrzebny do obsługi zapytania i dalszej korespondencji.
			Jeśli współpraca zostanie nawiązana, dane zachowujemy do końca okresu wynikającego z przepisów
			i przedawnienia roszczeń. Dane przetwarzane na podstawie zgody usuniemy po jej cofnięciu.
		</p>

		<h2 class="h3">7. Twoje prawa</h2>
		<p class="body">Masz prawo do:</p>
		<ul class="list">
			{#each rights as r}
				<li class="body">{r}</li>
			{/each}
		</ul>
		<p class="body">
			Aby skorzystać z tych praw, napisz na <a href="mailto:{contact.email}">{contact.email}</a>. Masz też
			prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
		</p>

		<h2 class="h3">8. Zmiany polityki</h2>
		<p class="body">
			Możemy zmienić tę politykę, np. gdy zmieni się sposób działania strony lub przepisy. Aktualna wersja
			jest zawsze tutaj, z datą ostatniej aktualizacji.
		</p>
	</div>
</section>

<style>
	.prose {
		max-width: 46rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: var(--section);
	}
	.prose .h3 {
		margin-top: 1.5rem;
	}
	.updated {
		color: var(--caption);
	}
	.list {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
	.prose a {
		color: var(--ink);
		text-decoration-color: var(--green);
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
	}
</style>
