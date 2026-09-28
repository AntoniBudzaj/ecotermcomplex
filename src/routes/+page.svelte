<script lang="ts">
	import HeroScene from '$lib/components/HeroScene.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const teasers = [
		{ href: '/jak-to-dziala/', title: 'Jak to działa', text: 'Pięć kroków od surowca z pola do prądu, ciepła i nawozu.' },
		{ href: '/surowce/', title: 'Surowce', text: 'Co przyjmujemy od rolników i jak zostać naszym dostawcą.' },
		{ href: '/energia/', title: 'Energia', text: 'Dokąd płynie prąd i ciepło oraz co zyskuje okolica.' }
	];

	const facts = [
		{ v: '24/7', l: 'Praca niezależna od pogody, przez całą dobę i cały rok.' },
		{ v: '[X] t', l: 'Odpadów rolniczych przetwarzanych każdego roku.' },
		{ v: '[X] MWh', l: 'Energii elektrycznej oddawanej rocznie do sieci.' },
		{ v: '[X] km', l: 'Promień, z którego pochodzą nasze surowce.' }
	];

	const benefits = [
		{ t: 'Dla rolników', d: 'Odbieramy gnojowicę, obornik i resztki roślinne, a w zamian oddajemy naturalny nawóz.' },
		{ t: 'Dla mieszkańców', d: 'Ciepło z instalacji ogrzewa budynki w okolicy, a pieniądze za energię zostają w regionie.' },
		{ t: 'Dla klimatu', d: 'Metan z odpadów zamiast ulatniać się do atmosfery zamienia się w energię.' }
	];
</script>

<svelte:head>
	<title>BioEnergia – energia z tego, co daje ziemia</title>
	<meta
		name="description"
		content="Biogazownia przetwarzająca odpady rolnicze i organiczne na czystą energię elektryczną i cieplną, lokalnie i odpowiedzialnie."
	/>
</svelte:head>

<section class="hero">
	<div class="wrap text">
		<h1 class="display">Energia z tego, co daje ziemia</h1>
		<p class="lead">
			Przetwarzamy odpady rolnicze i organiczne na czystą energię elektryczną i cieplną, lokalnie i
			odpowiedzialnie.
		</p>
		<div class="actions">
			<a class="btn" href="/jak-to-dziala/">Poznaj naszą biogazownię</a>
			<a class="link-arrow" href="/jak-to-dziala/">Jak to działa →</a>
		</div>
	</div>
	<div class="scene">
		<HeroScene />
	</div>
</section>

<section class="wrap section">
	<div class="cols-3">
		{#each teasers as t}
			<a class="teaser rule-col" href={t.href}>
				<h2 class="h3">{t.title}</h2>
				<p class="small">{t.text}</p>
				<span class="more">Więcej →</span>
			</a>
		{/each}
	</div>
</section>

<section class="wrap">
	<div class="two section rule">
		<Photo
			src="/images/biogazownia-kopuly.jpg"
			alt="Biogazownia z lotu ptaka: kilkanaście zbiorników z szarymi kopułami otoczonych polami"
			caption="Zbiorniki fermentacyjne pośród pól · zdjęcie poglądowe"
			height="500px"
		/>
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">O biogazowni</div>
			<h2 class="h2">Z odpadów rolniczych powstaje czysta energia</h2>
			<p class="body">
				W szczelnych zbiornikach bakterie rozkładają gnojowicę, obornik i resztki roślin, wytwarzając
				biogaz. Spalamy go w agregacie kogeneracyjnym, który jednocześnie produkuje prąd i ciepło.
			</p>
			<p class="body">
				To, co zostaje po fermentacji, wraca na pola jako naturalny nawóz. Nic się nie marnuje, a
				obieg zamyka się w promieniu kilkunastu kilometrów.
			</p>
			<a class="link-arrow" href="/o-nas/">Poznaj nas bliżej →</a>
		</div>
	</div>
</section>

<section class="wrap">
	<div class="cols-4">
		{#each facts as f}
			<div class="rule-col">
				<span class="fact">{f.v}</span>
				<p class="small">{f.l}</p>
			</div>
		{/each}
	</div>
</section>

<div class="wrap section">
	<Photo
		src="/images/biogazownia-zachod.jpg"
		alt="Zbiorniki biogazowni na zielonych polach o zachodzie słońca"
		caption="Instalacja wpisana w wiejski krajobraz · zdjęcie poglądowe"
		height="520px"
		position="center 65%"
	/>
</div>

<section class="wrap">
	<div class="split-rev" style="align-items: center">
		<div class="stack" style="gap: 20px">
			<div class="eyebrow">Korzyści</div>
			<h2 class="h2">Dobry sąsiad dla całej okolicy</h2>
			<ul class="benefits">
				{#each benefits as b}
					<li>
						<span class="dot" style="margin-top: 8px"></span>
						<div>
							<h3 class="h3">{b.t}</h3>
							<p class="small">{b.d}</p>
						</div>
					</li>
				{/each}
			</ul>
			<a class="link-arrow" href="/energia/">Zobacz, dokąd płynie energia →</a>
		</div>
		<Photo
			src="/images/biogazownia-instalacja.jpg"
			alt="Nowoczesna instalacja biogazowa z zielonymi zbiornikami i rurociągami o wschodzie słońca"
			caption="Wizualizacja nowoczesnej instalacji · zdjęcie poglądowe"
			height="540px"
		/>
	</div>
</section>

<section class="section">
	<CtaBand
		text="Masz odpady rolnicze lub chcesz zwiedzić biogazownię? Porozmawiajmy."
		href="/kontakt/"
		label="Skontaktuj się"
	/>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(60vh, calc(100svh - 96px));
		overflow: hidden;
	}
	.text {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.text > * {
		max-width: 580px;
	}
	.text .lead {
		max-width: 500px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 28px;
		padding-top: 6px;
	}
	.scene {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.teaser {
		text-decoration: none;
	}
	.teaser:hover .more {
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	.more {
		font-weight: 500;
		font-size: 16px;
	}
	.fact {
		font-size: clamp(30px, 3vw, 42px);
		line-height: 1.1;
		letter-spacing: -0.03em;
	}
	.benefits {
		list-style: none;
		margin: 8px 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	.benefits li {
		display: flex;
		gap: 18px;
	}
	.benefits li > div {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	@media (max-width: 860px) {
		.hero {
			min-height: 0;
			display: flex;
			flex-direction: column;
		}
		.scene {
			position: relative;
			height: 290px;
			margin-top: 16px;
		}
		.actions .btn {
			width: 100%;
		}
		.actions .link-arrow {
			margin-inline: auto;
		}
	}
</style>
