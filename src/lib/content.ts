export interface Section {
	title: string;
	paras?: string[];
	items?: string[];
	note?: string;
}

export interface Photo {
	src: string;
	alt: string;
	caption: string;
	position?: string;
}

export interface PageContent {
	slug: string;
	/** Krótka nazwa w menu. */
	nav: string;
	eyebrow: string;
	title: string;
	/** Hasło strony; używane jako meta description. */
	tagline: string;
	lead: string;
	photo?: Photo;
	sections: Section[];
	cta: { text: string; label: string };
}

export const pages: PageContent[] = [
	{
		slug: 'o-nas',
		nav: 'O nas',
		eyebrow: 'O nas',
		title: 'Energia przyszłości zaczyna się od dobrze przygotowanego projektu.',
		tagline:
			'Rozwijamy przedsięwzięcia, które łączą potencjał lokalnych zasobów z technologią, bezpieczeństwem inwestycyjnym i realną wartością gospodarczą.',
		lead: 'Ecotermcomplex to firma działająca na styku energetyki odnawialnej, inżynierii środowiska i rozwoju inwestycji. Pomagamy przekształcać pomysły oraz lokalne możliwości w projekty o sprecyzowanych parametrach technicznych, uregulowanych uwarunkowaniach administracyjnych i uzasadnieniu ekonomicznym. Specjalizujemy się w projektach biogazowych i biometanowych, a także w rozwiązaniach uzupełniających: kogeneracji, fotowoltaice, magazynowaniu energii oraz infrastrukturze sieciowej.',
		photo: {
			src: '/images/biogazownia-kopuly.jpg',
			alt: 'Biogazownia z lotu ptaka: kilkanaście zbiorników z szarymi kopułami otoczonych polami',
			caption: 'Zbiorniki fermentacyjne pośród pól · zdjęcie poglądowe'
		},
		sections: [
			{
				title: 'Kim jesteśmy',
				paras: [
					'Łączymy kompetencje związane z analizą lokalizacji, koncepcją technologiczną, planowaniem przestrzennym, ochroną środowiska, projektowaniem instalacji, współpracą z operatorami sieci i przygotowaniem modeli inwestycyjnych. Dzięki temu traktujemy inwestycję jako całość, a nie zbiór odrębnych opracowań.',
					'Na wczesnym etapie najważniejsze są właściwe decyzje. Dlatego oceniamy nie tylko to, czy instalację można wybudować, ale także czy będzie miała stabilną bazę surowcową, realną możliwość odbioru energii lub gazu, odpowiedni dostęp komunikacyjny i uzasadniony model funkcjonowania. Takie podejście pozwala identyfikować ograniczenia, zanim staną się kosztownym problemem.'
				]
			},
			{
				title: 'Nasza specjalizacja',
				paras: [
					'Istotną częścią działalności Ecotermcomplex jest rozwój biogazowni i biometanowni wykorzystujących surowce rolnicze, produkty uboczne przemysłu rolno-spożywczego oraz wybrane strumienie bioodpadów. Rozumiemy złożoność całego łańcucha wartości: od pozyskania substratu, przez fermentację i uzdatnianie biogazu, po wykorzystanie produktu energetycznego oraz zagospodarowanie pofermentu.',
					'Jednocześnie patrzymy szerzej niż na samą technologię fermentacji. Analizujemy współpracę instalacji z siecią elektroenergetyczną lub gazową, integrację źródeł wytwórczych, bilansowanie potrzeb własnych, gospodarkę wodno-ściekową, logistykę i uwarunkowania środowiskowe. Pozwala to opracowywać rozwiązania dopasowane do konkretnego miejsca i inwestora.'
				]
			},
			{
				title: 'Od idei do projektu gotowego do realizacji',
				paras: [
					'W zależności od charakteru przedsięwzięcia występujemy jako inicjator rozwoju, projektant, koordynator procesu przygotowawczego albo partner inwestycyjny. Organizujemy prace międzybranżowe, przygotowujemy analizy, prowadzimy uzgodnienia i wspieramy pozyskiwanie decyzji. Współpracujemy z inwestorami, właścicielami gruntów, przedsiębiorstwami przemysłowymi, gospodarstwami rolnymi, samorządami oraz dostawcami technologii.',
					'W modelu developmentowym możemy rozpocząć od rozpoznania potencjalnej lokalizacji i doprowadzić projekt do stadium umożliwiającego ocenę przez inwestora finansowego, partnera branżowego lub podmiot realizacyjny. Zakres ryzyka, nakładów i odpowiedzialności każdorazowo określa indywidualna umowa.'
				]
			},
			{
				title: 'Jak pracujemy',
				items: [
					'Analizujemy uwarunkowania, zanim podejmiemy kluczowe decyzje technologiczne.',
					'Integrujemy wymagania techniczne, administracyjne, środowiskowe i finansowe.',
					'Weryfikujemy realność założeń przyłączeniowych, surowcowych i logistycznych.',
					'Rozważamy warianty oraz etapowanie zamiast narzucania jednego rozwiązania.',
					'Utrzymujemy czytelną komunikację z inwestorem i zainteresowanymi stronami.'
				]
			},
			{
				title: 'Dla kogo pracujemy',
				paras: [
					'Naszymi partnerami są podmioty planujące własne instalacje energetyczne, inwestorzy poszukujący projektów do rozwinięcia lub przejęcia, właściciele gruntów, rolnicy i producenci żywności, przedsiębiorstwa dysponujące strumieniami surowców organicznych oraz jednostki samorządu terytorialnego. Wspieramy zarówno nowe przedsięwzięcia, jak i ocenę projektów już przygotowywanych przez inne zespoły.'
				]
			}
		],
		cta: {
			text: 'Masz lokalizację, surowce lub pomysł na inwestycję? Porozmawiajmy o jego potencjale i o pierwszych krokach, które warto podjąć.',
			label: 'Omów projekt'
		}
	},
	{
		slug: 'rozwoj-inwestycji',
		nav: 'Rozwój inwestycji',
		eyebrow: 'Rozwój inwestycji',
		title: 'Od potencjału lokalizacji do dojrzałego projektu inwestycyjnego.',
		tagline:
			'Budujemy wartość inwestycji przez systematyczne ograniczanie ryzyk — od pierwszej analizy lokalizacji po projekt przygotowany do decyzji inwestycyjnej.',
		lead: 'Proces developmentu wymaga jednoczesnego zarządzania lokalizacją, technologią, dostępnością substratów, decyzjami administracyjnymi, przyłączeniami i ekonomią przedsięwzięcia. Ecotermcomplex łączy te obszary w spójną ścieżkę rozwoju, której celem jest stworzenie projektu możliwego do realizacji i atrakcyjnego dla przyszłego inwestora.',
		photo: {
			src: '/images/biogazownia-zachod.jpg',
			alt: 'Zbiorniki biogazowni na zielonych polach o zachodzie słońca',
			caption: 'Instalacja wpisana w wiejski krajobraz · zdjęcie poglądowe',
			position: 'center 65%'
		},
		sections: [
			{
				title: 'Identyfikacja lokalizacji i weryfikacja potencjału',
				paras: [
					'Punktem wyjścia jest ocena działki lub obszaru inwestycyjnego: przeznaczenia terenu, uwarunkowań własnościowych, dostępu do drogi, sąsiedztwa, ochrony przyrody, zasobów wodnych i możliwości doprowadzenia infrastruktury. Analizujemy ograniczenia wynikające z planowania przestrzennego, wymogi zabudowy oraz potencjalne kolizje techniczne.',
					'Dla projektów biogazowych szczególną uwagę poświęcamy relacji instalacji z otoczeniem. Uwzględniamy logistykę dostaw i wywozu, odległości transportowe, możliwość ograniczenia uciążliwości, a także skalę instalacji odpowiednią dla lokalnego rynku substratów.'
				]
			},
			{
				title: 'Baza substratowa i model operacyjny',
				paras: [
					'Ocenę źródeł surowców prowadzimy równolegle z koncepcją technologiczną. Weryfikujemy rodzaje, ilości, sezonowość i parametry substratów, możliwe modele dostaw, koszty transportu i magazynowania oraz perspektywę zawarcia długoterminowych umów. W analizie uwzględniamy także zagospodarowanie pofermentu, które wpływa na ekonomię i logistykę całego przedsięwzięcia.',
					'Nawet atrakcyjna technologia nie zastąpi pewności operacyjnej. Dlatego rozwój projektu opieramy na wiarygodnych bilansach masowych i energetycznych, realistycznej dyspozycyjności instalacji oraz dostępności odbiorców produktów.'
				]
			},
			{
				title: 'Koncepcja, wariantowanie i etapowanie',
				paras: [
					'Przygotowujemy możliwe scenariusze realizacji: produkcję energii elektrycznej i ciepła w kogeneracji, uzdatnianie biogazu do biometanu, rozwiązania hybrydowe oraz integrację z PV lub magazynowaniem energii. Porównujemy warianty pod kątem nakładów inwestycyjnych, kosztów eksploatacyjnych, przyłączy, uzysku energii i poziomu ryzyk.',
					'W projektach, w których warunki rynkowe lub infrastrukturalne wymagają elastyczności, przewidujemy etapowanie mocy oraz możliwość późniejszej rozbudowy bez utraty spójności zagospodarowania terenu.'
				]
			},
			{
				title: 'Ścieżka administracyjna i środowiskowa',
				paras: [
					'Koordynujemy przygotowanie dokumentacji niezbędnej do uzyskiwania wymaganych decyzji i uzgodnień, w tym dokumentów dotyczących warunków zabudowy lub zgodności z planowaniem przestrzennym, kwalifikacji środowiskowej, karty informacyjnej przedsięwzięcia, raportów i decyzji środowiskowych oraz dalszych etapów procedur budowlanych. Każdorazowy zakres postępowań wynika ze specyfiki inwestycji i obowiązujących przepisów.',
					'Istotnym elementem jest współpraca z organami administracji, gestorami infrastruktury i zainteresowanymi stronami, prowadzona na podstawie rzetelnych danych technicznych i środowiskowych.'
				]
			},
			{
				title: 'Przyłączenia i dostęp do rynku energii',
				paras: [
					'Badamy możliwości przyłączenia do sieci gazowej i elektroenergetycznej, zapotrzebowanie na media oraz dostępność infrastruktury wodno-kanalizacyjnej. Analizujemy warunki techniczne, zakres robót przyłączeniowych, warianty tras, konieczność uzyskania praw do nieruchomości i potencjalne terminy realizacji.',
					'Rozwijając projekt biometanowni, rozpatrujemy zarówno parametry produkcji, jak i warunki jakościowe, ciśnieniowe oraz ilościowe niezbędne dla określonego kierunku odbioru gazu. Wybór technologii uzdatniania jest powiązany z wymaganiami odbiorcy, bilansami procesu i kosztami całego łańcucha dostaw.'
				]
			},
			{
				title: 'Przygotowanie do transakcji i realizacji',
				paras: [
					'Porządkujemy dokumentację projektu tak, aby inwestor mógł przeanalizować jego stan prawny, techniczny, środowiskowy i ekonomiczny. Przygotowujemy materiały do procesu due diligence, identyfikujemy kluczowe zobowiązania, warunki zawieszające i ryzyka wymagające dalszego wyjaśnienia.',
					'Możliwe modele współpracy obejmują prowadzenie rozwoju na zlecenie, współpracę z właścicielem nieruchomości, rozwój na rzecz spółki celowej, wspólne przedsięwzięcie oraz przekazanie lub sprzedaż projektu na uzgodnionym etapie.'
				]
			},
			{
				title: 'Co otrzymuje inwestor',
				paras: [
					'Efektem jest nie tylko dokumentacja, lecz uporządkowany proces decyzyjny: mapa ryzyk, wariant technologiczny, stan postępowań, analiza substratowa, założenia modelu finansowego, harmonogram i zestaw działań niezbędnych do przejścia do następnej fazy inwestycji.'
				]
			}
		],
		cta: {
			text: 'Posiadasz grunt, strumień surowców lub projekt na wczesnym etapie? Sprawdzimy jego potencjał i zaproponujemy możliwą ścieżkę rozwoju.',
			label: 'Sprawdź potencjał lokalizacji'
		}
	},
	{
		slug: 'inzynieria-i-projektowanie',
		nav: 'Inżynieria',
		eyebrow: 'Inżynieria i projektowanie',
		title: 'Dobrze zaprojektowana instalacja to spójny system, nie zestaw urządzeń.',
		tagline:
			'Projektowanie, które łączy technologię procesu z realiami lokalizacji, wymogami formalnymi i późniejszą eksploatacją.',
		lead: 'W Ecotermcomplex prace inżynieryjne traktujemy jako narzędzie rozwiązywania rzeczywistych problemów inwestycyjnych. Łączymy koncepcję procesową z układem przestrzennym, infrastrukturą techniczną, bezpieczeństwem i wymaganiami eksploatacji. Przygotowujemy oraz koordynujemy opracowania potrzebne do podejmowania decyzji, prowadzenia postępowań administracyjnych i dalszego projektowania.',
		photo: {
			src: '/images/budowa-dron.jpg',
			alt: 'Budowa biogazowni widziana z drona: fundamenty i zbiorniki w trakcie montażu',
			caption: 'Budowa instalacji · zdjęcie poglądowe'
		},
		sections: [
			{
				title: 'Koncepcje technologiczne',
				paras: [
					'Opracowujemy założenia procesowe dla instalacji fermentacji beztlenowej, przygotowania i podawania substratów, gospodarki biogazem, oczyszczania i uzdatniania do biometanu, kogeneracji, gospodarki pofermentem i instalacji pomocniczych. Dobieramy strukturę procesu do rodzaju surowców, oczekiwanego produktu oraz wymagań lokalizacji.',
					'Uwzględniamy wymagania dotyczące zbiorników, mieszania, ogrzewania, odsiarczania, osuszania, sprężania, uzdatniania, pomiarów i systemów bezpieczeństwa. Na etapie koncepcyjnym nie zastępujemy szczegółowego projektu dostawcy urządzeń, lecz tworzymy spójne wymagania pozwalające porównywać rozwiązania technologiczne.'
				]
			},
			{
				title: 'Bilans masowy, energetyczny i media',
				paras: [
					'Podstawą projektowania są zweryfikowane bilanse: dopływu substratów i wody, powstawania biogazu, ilości pofermentu, zużycia ciepła i energii elektrycznej oraz potrzeb infrastruktury pomocniczej. Analizujemy wartości średnie, szczytowe i scenariusze pracy, aby uniknąć błędów wynikających z projektowania wyłącznie dla warunków nominalnych.',
					'W przypadku biometanowni rozpatrujemy zużycie energii przez upgrading i sprężanie, parametry gazu po oczyszczeniu, zagospodarowanie strumieni ubocznych i możliwości optymalizacji potrzeb własnych.'
				]
			},
			{
				title: 'Zagospodarowanie terenu i integracja branż',
				paras: [
					'Koordynujemy funkcjonalne rozmieszczenie obiektów, komunikację wewnętrzną, strefy rozładunku i magazynowania, przebieg instalacji oraz dostęp służb eksploatacyjnych. Rozwiązania przestrzenne weryfikujemy względem wymagań bezpieczeństwa, ochrony środowiska, przepisów budowlanych i możliwości etapowania.',
					'Analiza międzybranżowa obejmuje w zależności od projektu architekturę, konstrukcję, technologię, instalacje sanitarne, elektryczne, automatykę, sieci zewnętrzne i zagadnienia pożarowe. Projekty wymagające specjalistycznych uprawnień realizowane są przez odpowiednio uprawnionych uczestników procesu projektowego.'
				]
			},
			{
				title: 'Infrastruktura przyłączeniowa',
				paras: [
					'Przygotowujemy założenia techniczne dla przyłączy energetycznych i gazowych, stacji i urządzeń pomiarowych, układów zasilania oraz komunikacji z operatorami. Oceniamy przebieg tras przyłączy, uwarunkowania terenowo-prawne i wpływ inwestycji liniowych na harmonogram projektu głównego.',
					'Wspieramy również analizę infrastruktury wodociągowej, kanalizacyjnej, retencyjnej oraz wymaganych rozwiązań środowiskowych, w tym potencjalnych kolizji i niezbędnych uzgodnień.'
				]
			},
			{
				title: 'Dokumentacja i nadzór nad spójnością projektu',
				paras: [
					'W zależności od ustalonego zakresu przygotowujemy koncepcje, założenia do projektowania, specyfikacje i materiały do procedur administracyjnych, przetargów lub zapytań ofertowych. Koordynujemy informacje przekazywane między dostawcami technologii, projektantami i inwestorem, aby dane procesowe były zgodne z rozwiązaniami budowlanymi i sieciowymi.',
					'Zwracamy szczególną uwagę na kontrolę zmian: wprowadzenie nowego substratu, odmiennego układu technologicznego lub zmiany mocy może oddziaływać na dokumentację środowiskową, warunki przyłączenia, układ komunikacyjny i wyniki finansowe.'
				]
			},
			{
				title: 'Weryfikacja projektów zewnętrznych',
				paras: [
					'Prowadzimy przeglądy koncepcji oraz dokumentacji przygotowanych przez innych uczestników przedsięwzięcia. Identyfikujemy niespójności w bilansach, braki w zakresie technologii pomocniczych, ryzyka związane z logistyką i infrastrukturą oraz obszary wymagające doprecyzowania przed podjęciem zobowiązań inwestycyjnych.'
				]
			}
		],
		cta: {
			text: 'Potrzebujesz koncepcji technologicznej, koordynacji projektowej lub niezależnej weryfikacji rozwiązań? Przedstaw nam założenia inwestycji.',
			label: 'Zleć analizę projektu'
		}
	},
	{
		slug: 'doradztwo-inwestycyjne',
		nav: 'Doradztwo',
		eyebrow: 'Doradztwo inwestycyjne',
		title: 'Technologia ma sens wtedy, gdy uzasadniają ją liczby i warunki realizacji.',
		tagline:
			'Dobre decyzje kapitałowe wymagają połączenia wiedzy technicznej, ekonomiki projektu i rozumienia ryzyka regulacyjnego.',
		lead: 'Wspieramy inwestorów przy wyborze, ocenie i przygotowaniu przedsięwzięć związanych z energetyką odnawialną oraz gospodarką surowcową. Nasze doradztwo obejmuje zarówno wczesną identyfikację możliwości inwestycyjnych, jak i ocenę projektów już zaawansowanych pod względem formalnym lub technicznym.',
		sections: [
			{
				title: 'Analizy przedinwestycyjne i studia wykonalności',
				paras: [
					'Opracowujemy wariantowe analizy techniczno-ekonomiczne, które zestawiają potencjał surowcowy, możliwe technologie, koszty inwestycyjne i operacyjne, strukturę przychodów oraz ograniczenia infrastrukturalne. Ustalamy założenia modelu ekonomicznego, scenariusze rynkowe i parametry wymagające potwierdzenia przez przyszłych dostawców lub odbiorców.',
					'Studium wykonalności ma pomóc odpowiedzieć na pytania: jaki wariant jest uzasadniony, które elementy mają największy wpływ na wynik finansowy, na jakich warunkach przedsięwzięcie może przejść do realizacji i jakie ryzyka pozostają otwarte.'
				]
			},
			{
				title: 'Due diligence techniczne i inwestycyjne',
				paras: [
					'Analizujemy stan przygotowania projektu: decyzje, prawa do nieruchomości, warunki przyłączenia, dokumentację technologiczną, dostępność substratów, założenia wydajnościowe, model sprzedaży produktów i harmonogram. Wskazujemy luki, zależności oraz czynniki, które mogą wpływać na cenę, termin lub możliwość realizacji transakcji.',
					'Przy ocenie projektu rozróżniamy dokumenty już uzyskane, wnioski w toku, założenia oparte na wstępnych deklaracjach oraz obszary wymagające odrębnej opinii prawnej, finansowej albo technicznej.'
				]
			},
			{
				title: 'Model biznesowy i źródła przychodów',
				paras: [
					'W inwestycjach biogazowych możliwe są różne struktury przychodów: sprzedaż energii elektrycznej, ciepła, biometanu, usług zagospodarowania niektórych strumieni organicznych lub produktów ubocznych procesu, pod warunkiem spełnienia właściwych wymogów. Oceniamy wzajemne zależności między tymi strumieniami i ryzyka wynikające z przyjętego modelu kontraktacji.',
					'Uwzględniamy koszty pozyskania i logistyki substratów, zużycia mediów, obsługi instalacji, zagospodarowania pofermentu, utrzymania ruchu, ubezpieczeń oraz wymagań środowiskowych i jakościowych.'
				]
			},
			{
				title: 'Finansowanie, dotacje i systemy wsparcia',
				paras: [
					'Wspieramy przygotowywanie technicznej i ekonomicznej części dokumentacji związanej z finansowaniem inwestycji, w tym założeń do wniosków o wsparcie krajowe i europejskie. Pomagamy opracować harmonogram rzeczowo-finansowy, wskaźniki produktu i rezultatu oraz uzasadnienie technologiczne, środowiskowe i kosztowe przedsięwzięcia.',
					'Analizujemy warunki wybranych mechanizmów wsparcia właściwych dla danego projektu, przy czym dostępność finansowania i kwalifikowalność kosztów zawsze wymagają potwierdzenia według aktualnej dokumentacji konkretnego programu.'
				]
			},
			{
				title: 'Modele współpracy kapitałowej i transakcyjnej',
				paras: [
					'W zależności od potrzeb projektu rozważamy: zlecenie developmentu, wsparcie inwestora w istniejącym SPV, wspólne przedsięwzięcie, model success fee lub przygotowanie projektu do sprzedaży. Pomagamy ustalić podział prac, kamienie milowe, warunki przekazania dokumentacji i niezbędne obszary odpowiedzialności.',
					'Wspieramy rozmowy między właścicielem gruntu, partnerem technologicznym, dostawcą surowców, inwestorem i odbiorcą energii. Nie zastępujemy doradztwa prawnego, podatkowego ani regulowanej działalności inwestycyjnej.'
				]
			},
			{
				title: 'Współpraca z właścicielami gruntów i dostawcami surowców',
				paras: [
					'Dla właścicieli terenów oraz gospodarstw analizujemy możliwości długoterminowej współpracy: dzierżawy, dostaw substratów, odbioru produktów lub uczestnictwa w strukturze przedsięwzięcia. Celem jest stworzenie modelu, w którym interes gospodarczy partnerów lokalnych jest zrozumiały i możliwy do weryfikacji.'
				]
			}
		],
		cta: {
			text: 'Rozważasz inwestycję albo przejęcie projektu? Zidentyfikujmy jego rzeczywistą wartość i warunki dalszego rozwoju.',
			label: 'Zleć analizę projektu'
		}
	},
	{
		slug: 'badania-i-rozwoj',
		nav: 'B+R',
		eyebrow: 'Badania i rozwój',
		title: 'Od danych procesowych do lepszych decyzji w czasie rzeczywistym.',
		tagline:
			'Rozwijamy podejście do biogazowni i biometanowni jako inteligentnych systemów procesowych, wykorzystujących pomiary, modele i dane do wspierania decyzji operacyjnych.',
		lead: 'Transformacja energetyczna wymaga nie tylko nowych instalacji, lecz również nowych metod ich prowadzenia. Obszar B+R Ecotermcomplex koncentruje się na łączeniu pomiarów, analizy danych, modeli procesowych i narzędzi decyzyjnych. Kierunkiem rozwijanych prac jest poprawa przewidywalności produkcji, stabilności operacyjnej, efektywności surowcowej oraz jakości raportowania środowiskowego.',
		sections: [
			{
				title: 'Wyzwaniem nie jest brak danych, lecz ich wykorzystanie',
				paras: [
					'Typowa instalacja dysponuje informacjami o przepływach, temperaturach, ciśnieniach, poziomach, pracy urządzeń i jakości gazu. Jednocześnie część kluczowych właściwości substratów zmienia się między dostawami i nie jest mierzona wystarczająco szybko, aby wspierać bieżące decyzje.',
					'Nasze zainteresowania badawcze obejmują tworzenie powiązań między charakterystyką wsadu, stanem procesu fermentacji, uzyskiem metanu, bilansem energii, kosztami operacyjnymi i śladem emisji. Celem jest wsparcie operatora w wyborze działania, a nie jedynie prezentacja kolejnych wykresów.'
				]
			},
			{
				title: 'Szybka charakterystyka substratów',
				paras: [
					'Rozpatrujemy wykorzystanie metod spektroskopowych, optycznych i akustycznych do oceny zmienności surowców oraz estymacji istotnych parametrów, takich jak sucha masa, sucha masa organiczna czy potencjał biometanowy. Zestawienie pomiarów szybkich z referencyjnymi badaniami laboratoryjnymi może pozwolić opracować narzędzia do oceny substratów przed ich wprowadzeniem do procesu.',
					'Szczególnym problemem badawczym jest heterogeniczność materiału: różne struktury, zawartość wody i właściwości fizyczne utrudniają stworzenie wiarygodnego modelu dla szerokiego zakresu surowców. Dlatego kluczowe są walidacja, niepewność pomiaru i powtarzalność wyników.'
				]
			},
			{
				title: 'Wirtualne czujniki i modele hybrydowe',
				paras: [
					'Jednym z analizowanych kierunków jest połączenie modeli opisujących fizykochemiczne podstawy fermentacji z algorytmami uczenia maszynowego. Takie modele mogą szacować parametry trudne do ciągłego pomiaru, prognozować uzysk gazu oraz sygnalizować odchylenia od oczekiwanego stanu pracy.',
					'Badania dotyczą również obserwacji wskaźników, które mogą wyprzedzać spadek stabilności procesu, w tym zmian profilu lotnych kwasów tłuszczowych, równowagi azotowej czy oddziaływania wybranych inhibitorów. Podejście to wspiera utrzymanie procesu, ale nie przesuwa głównego celu systemu w stronę wyłącznie biologicznej diagnostyki.'
				]
			},
			{
				title: 'System wspomagania decyzji operacyjnych',
				paras: [
					'Docelową koncepcją jest narzędzie łączące dane z czujników, informacje laboratoryjne, systemy SCADA, modele prognozowania i algorytmy oceny wariantów pracy. Rozpatrywane decyzje mogą dotyczyć mieszaniny substratów, harmonogramu podawania, wykorzystania energii, planowania logistyki lub zarządzania ograniczeniami eksploatacyjnymi.',
					'Kryteria oceny nie ograniczają się do maksymalizacji produkcji biogazu. Obejmują również koszt wsadu, transport, zużycie energii, ograniczanie emisji metanu, przewidywalność pracy i wpływ na wskaźniki środowiskowe. To wielokryterialne ujęcie ma umożliwić świadome porównywanie wariantów, także przy niepełnych i niepewnych danych.'
				]
			},
			{
				title: 'Emisje GHG i śledzenie łańcucha wartości',
				paras: [
					'Rozwijany obszar badawczy obejmuje integrację danych o pochodzeniu i transporcie substratów, fermentacji, zagospodarowaniu pofermentu, oczyszczaniu gazu, zużyciu energii i potencjalnych emisjach niezorganizowanych. Celem jest stworzenie wiarygodnego toru danych wspierającego kalkulacje emisji gazów cieplarnianych oraz analizę działań redukcyjnych zgodnie z właściwymi metodykami i wymaganiami.',
					'W przypadku rozwiązań biometanowych ważna jest możliwość oceny, jak decyzje operacyjne zmieniają nie tylko ilość produktu, ale również jego jednostkowy ślad emisyjny.'
				]
			},
			{
				title: 'Droga od koncepcji do walidacji',
				paras: [
					'Prace B+R wymagają etapowego podejścia: sformułowania hipotez, zebrania danych referencyjnych, opracowania modeli, testów w warunkach laboratoryjnych oraz późniejszej walidacji w środowisku przemysłowym. Dopiero taki proces pozwala ocenić realne osiągi systemu, jego powtarzalność, odporność na zmianę substratów i użyteczność dla obsługi instalacji.'
				],
				note: 'Opisane technologie i funkcjonalności stanowią kierunki prowadzonych lub planowanych prac badawczo-rozwojowych. Nie należy interpretować ich jako potwierdzenia osiągniętego wyniku badawczego lub dostępności gotowego produktu komercyjnego.'
			},
			{
				title: 'Współpraca nauka–przemysł',
				paras: [
					'Poszukujemy praktycznych połączeń kompetencji z obszaru analityki procesowej, elektroniki pomiarowej, spektroskopii, automatyki, modelowania, informatyki i technologii biogazowej. Współpraca z jednostkami naukowymi, laboratoriami i dostawcami rozwiązań pomiarowych umożliwia weryfikowanie hipotez w warunkach odpowiadających realnym potrzebom operatorów.'
				]
			}
		],
		cta: {
			text: 'Rozwijasz aparaturę, sensory, algorytmy lub metody badawcze dla przemysłu? Porozmawiajmy o wspólnych pracach i demonstratorach.',
			label: 'Zaproponuj współpracę B+R'
		}
	},
	{
		slug: 'klimat-i-zrownowazony-rozwoj',
		nav: 'Klimat',
		eyebrow: 'Klimat i zrównoważony rozwój',
		title: 'Lokalne zasoby. Odpowiedzialna energia. Mierzalny wpływ.',
		tagline:
			'Korzyść środowiskowa musi wynikać z danych, technologii i odpowiedzialnej eksploatacji — nie wyłącznie z faktu, że inwestycja należy do sektora OZE.',
		lead: 'Postrzegamy projekty biogazowe i biometanowe jako element gospodarki obiegu zamkniętego oraz transformacji energetycznej. Ich potencjał wynika z możliwości wykorzystania odpowiednio dobranych strumieni materii organicznej, produkcji odnawialnych nośników energii oraz ograniczenia części emisji występujących w konwencjonalnych modelach zagospodarowania surowców. Wartość środowiskowa każdej inwestycji wymaga jednak indywidualnego potwierdzenia.',
		photo: {
			src: '/images/biogazownia-rzepak.jpg',
			alt: 'Biogazownia z zielonymi kopułami zbiorników wśród kwitnącego rzepaku',
			caption: 'Instalacja w otoczeniu pól · zdjęcie poglądowe',
			position: 'center 55%'
		},
		sections: [
			{
				title: 'Gospodarka obiegu zamkniętego',
				paras: [
					'Fermentacja beztlenowa może stanowić ogniwo lokalnego łańcucha wykorzystania produktów ubocznych rolnictwa, przetwórstwa spożywczego i innych dopuszczonych strumieni biodegradowalnych. Pozwala odzyskiwać energię z materii organicznej, a odpowiednio prowadzona gospodarka pofermentem może wspierać obieg składników pokarmowych.',
					'Zrównoważone rozwiązanie wymaga kontroli pochodzenia substratów, możliwości ich przetwarzania, jakości produktów, bezpieczeństwa transportu i zgodności z wymaganiami środowiskowymi.'
				]
			},
			{
				title: 'Biometan a dekarbonizacja',
				paras: [
					'Biometan uzyskany z odpowiednio oczyszczonego biogazu może stanowić odnawialny gaz wykorzystywany w zastosowaniach wymagających paliwa gazowego. Zakres redukcji emisji w porównaniu z rozwiązaniem referencyjnym zależy jednak od łańcucha dostaw, procesu wytwarzania, energii pomocniczej, strat metanu, metodyki obliczeń i sposobu wykorzystania produktu.',
					'Dlatego rozwijając projekty, analizujemy nie tylko wolumen produkowanego biometanu, lecz także źródła emisji i możliwe działania ograniczające ich poziom.'
				]
			},
			{
				title: 'Efektywność energetyczna i integracja technologii',
				paras: [
					'Zwracamy uwagę na potrzeby własne instalacji, bilans cieplny, możliwość odzysku ciepła, współpracę z kogeneracją, fotowoltaiką i magazynami energii. Optymalizacja energetyczna powinna uwzględniać rzeczywistą charakterystykę procesu i profil zapotrzebowania, a nie opierać się wyłącznie na mocach nominalnych urządzeń.'
				]
			},
			{
				title: 'Ochrona środowiska i ograniczanie uciążliwości',
				paras: [
					'Już na etapie lokalizacji analizujemy otoczenie przyrodnicze i społeczne inwestycji, natężenie transportu, gospodarkę wodami i ściekami, emisje do powietrza, potencjalne oddziaływanie zapachowe i akustyczne oraz rozwiązania minimalizujące. W projektowaniu znaczenie mają hermetyzacja odpowiednich operacji, właściwe magazynowanie substratów, uporządkowana logistyka i eksploatacyjne procedury kontroli.',
					'Nie zakładamy, że każdy problem można rozwiązać samą deklaracją technologiczną. Dlatego dokumentacja środowiskowa powinna odzwierciedlać rzeczywistą konfigurację instalacji i warunki konkretnej lokalizacji.'
				]
			},
			{
				title: 'Dialog z otoczeniem',
				paras: [
					'Inwestycje w infrastrukturę przetwarzania materii organicznej wymagają rzetelnej informacji. W komunikacji z mieszkańcami, władzami lokalnymi i sąsiadującymi podmiotami szczególnie ważne są: wyjaśnienie procesu, źródeł substratów, transportu, gospodarki pofermentem, zabezpieczeń i procedur reagowania na nieprawidłowości.',
					'Promujemy transparentny dialog oparty na faktach i dokumentach. Uważamy, że odpowiednio wcześnie przeprowadzona rozmowa pomaga rozpoznać lokalne obawy i przełożyć je na sprawdzalne rozwiązania projektowe.'
				]
			},
			{
				title: 'Pomiar wpływu zamiast ogólnych deklaracji',
				paras: [
					'Stosujemy podejście oparte na wskaźnikach: uzysk energii, zużycie mediów, wolumeny i źródła substratów, logistykę, straty gazu, gospodarkę pofermentem i bilans GHG. W opracowaniach rozróżniamy wartości prognozowane od wyników pomiarowych, a deklaracje o redukcji emisji od ocen potwierdzonych właściwą metodyką.'
				]
			}
		],
		cta: {
			text: 'Planujesz przedsięwzięcie oparte na lokalnych zasobach i chcesz poznać jego potencjał środowiskowy? Pomożemy ocenić możliwe korzyści i ograniczenia.',
			label: 'Skontaktuj się z nami'
		}
	},
	{
		slug: 'aktualnosci-i-wiedza',
		nav: 'Wiedza',
		eyebrow: 'Aktualności i wiedza',
		title: 'Wiedza, analizy i perspektywy transformacji energetycznej.',
		tagline:
			'Wiedza branżowa, która pomaga zrozumieć inwestycje, technologię, regulacje i ekonomię projektów energetycznych.',
		lead: 'Publikujemy materiały poświęcone rozwojowi projektów OZE, biogazu i biometanu, praktyce projektowej, zagadnieniom środowiskowym, modelom inwestycyjnym oraz badaniom nad nowymi narzędziami dla instalacji przemysłowych. Naszym celem jest przekładanie złożonych tematów technicznych i regulacyjnych na informacje pomocne inwestorom, samorządom, rolnikom oraz partnerom technologicznym.',
		sections: [
			{
				title: 'Co znajdziesz w centrum wiedzy',
				paras: [
					'Czytelnik znajdzie tu informacje o kolejnych etapach przygotowania inwestycji, interpretację zmian istotnych dla branży, omówienia technologii i praktyczne zestawienia zagadnień, o których warto pamiętać przed rozpoczęciem projektu. Rozdzielamy wiadomości o działalności firmy od artykułów eksperckich, komentarzy oraz poradników.'
				]
			},
			{
				title: 'Rozwój projektów — od pomysłu do decyzji',
				paras: ['Przykładowe tematy publikacji:'],
				items: [
					'jak ocenić grunt pod biometanownię',
					'jak przygotować bazę substratową',
					'co sprawdzić przed wystąpieniem o warunki przyłączenia',
					'dlaczego etapowanie instalacji ma znaczenie',
					'czym różni się projekt na etapie koncepcji od projektu gotowego do finansowania'
				]
			},
			{
				title: 'Technologia i eksploatacja',
				paras: ['Przykładowe tematy publikacji:'],
				items: [
					'bilans masowy w biogazowni',
					'metody uzdatniania biogazu',
					'najważniejsze parametry substratów',
					'rola VFA i innych wskaźników stanu procesu',
					'jak ograniczać zużycie energii pomocniczej',
					'w jaki sposób dane pomiarowe mogą wspierać operatora'
				]
			},
			{
				title: 'Rynek, przepisy i finansowanie',
				paras: ['Przykładowe tematy publikacji:'],
				items: [
					'warunki prowadzenia projektu biometanowego',
					'ryzyka przyłączeniowe',
					'systemy wsparcia dla OZE',
					'dokumenty potrzebne do analizy inwestora',
					'podejście do śladu węglowego biometanu',
					'praktyczne konsekwencje zmian regulacyjnych'
				],
				note: 'Artykuły dotyczące prawa i programów wsparcia nie stanowią indywidualnej opinii prawnej ani gwarancji uzyskania wsparcia.'
			},
			{
				title: 'Badania i innowacje',
				paras: ['Przykładowe tematy publikacji:'],
				items: [
					'metody NIR i techniki akustyczne w ocenie surowców',
					'wirtualne czujniki',
					'modele hybrydowe fermentacji',
					'predykcja uzysku metanu',
					'integracja danych SCADA z raportowaniem GHG',
					'wyzwania walidacji algorytmów w warunkach przemysłowych'
				]
			},
			{
				title: 'Aktualności firmy',
				paras: [
					'W tej kategorii mogą pojawiać się informacje o nawiązanych współpracach, udziale w wydarzeniach branżowych, nowych obszarach działalności, osiągnięciu istotnych etapów przygotowania projektów i uruchamianiu prac badawczych.'
				]
			},
			{
				title: 'Na początek: osiem artykułów',
				items: [
					'Biometanownia od podstaw: osiem kwestii do sprawdzenia przed wyborem lokalizacji.',
					'Substraty dla biogazowni: dlaczego ich dostępność jest ważniejsza niż teoretyczna wydajność.',
					'Biogaz czy biometan? Porównanie modeli wykorzystania gazu.',
					'Przyłączenie do sieci gazowej: najważniejsze parametry i ryzyka projektu.',
					'Jak czytać bilans masowy i energetyczny instalacji fermentacji.',
					'Due diligence projektu OZE: jakie dokumenty powinien zobaczyć inwestor.',
					'Emisje metanu i ślad GHG: co wpływa na ocenę środowiskową biometanu.',
					'Od czujników do decyzji: kierunki cyfryzacji nowoczesnej biogazowni.'
				]
			}
		],
		cta: {
			text: 'Chcesz porozmawiać o temacie poruszanym w naszych materiałach lub zaproponować współpracę ekspercką? Skontaktuj się z zespołem Ecotermcomplex.',
			label: 'Skontaktuj się z nami'
		}
	}
];

export const reasons = [
	'Rozwój projektu biogazowego, biometanowego lub hybrydowego źródła OZE.',
	'Ocena działki, bazy substratowej, infrastruktury lub istniejącego projektu.',
	'Wsparcie technologiczne, projektowe, środowiskowe lub przyłączeniowe.',
	'Studium wykonalności, due diligence i przygotowanie materiałów dla inwestora.',
	'Współpraca z gospodarstwem, zakładem przemysłowym, samorządem lub właścicielem gruntu.',
	'Partnerstwo badawczo-rozwojowe, pomiary, analityka, systemy cyfrowe i demonstratory.'
];
