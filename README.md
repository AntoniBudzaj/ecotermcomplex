# BioEnergia – strona biogazowni (SvelteKit)

Prosta, statyczna strona w SvelteKit (Svelte 5): strona główna z ilustracją line-art oraz podstrony
**Jak to działa**, **Surowce**, **Energia**, **O nas** i **Kontakt**.

## Uruchomienie

```bash
npm install
npm run dev        # serwer deweloperski: http://localhost:5173
npm run build      # statyczny eksport do folderu build/
npm run preview    # podgląd zbudowanej wersji
```

Folder `build/` po `npm run build` to gotowa strona – można ją wrzucić na dowolny hosting plików
statycznych (Netlify, Vercel, GitHub Pages, Cloudflare Pages, zwykły serwer FTP).

## Struktura

```
src/
  app.css                   kolory, typografia, siatki (zmienne CSS w :root)
  app.html                  szablon HTML, czcionka DM Sans
  lib/
    nav.js                  linki menu i dane kontaktowe (jedno miejsce do zmiany)
    components/
      Nav.svelte            menu (na telefonie rozwijane)
      Footer.svelte
      HeroScene.svelte      ilustracja SVG z animacją rysowania, wiatrakiem i parą
      PageIntro.svelte      nagłówek podstrony
      Photo.svelte          zdjęcie z podpisem
      CtaBand.svelte        zielony pas z wezwaniem do działania
  routes/
    +page.svelte            strona główna
    jak-to-dziala/ surowce/ energia/ o-nas/ kontakt/
static/
  images/                   zdjęcia (poglądowe – podmień na własne)
```

## Do uzupełnienia

- Wszystkie teksty w nawiasach `[…]` (liczby, adres, telefon, nazwiska, historia).
- Zdjęcia w `static/images/` są poglądowe – zastąp je własnymi, zachowując nazwy plików.
- Formularze na stronach **Surowce** i **Kontakt** tylko pokazują podziękowanie. Aby wysyłały
  wiadomości, podłącz np. Formspree, Netlify Forms albo własny endpoint (`src/routes/.../+page.server.js`
  z adapterem innym niż static).
- Mapa na stronie **Kontakt** to miejsce na osadzenie Google Maps lub OpenStreetMap.

## Kolory

| Zmienna        | Wartość   | Użycie                          |
| -------------- | --------- | ------------------------------- |
| `--green`      | `#91C73E` | akcent: kropki, linie, kopuła   |
| `--green-soft` | `#E9F2D8` | jasne tła sekcji                |
| `--ink`        | `#2B2B2B` | tekst, linie ilustracji, przyciski |
| `--bg`         | `#F7F5F0` | tło strony                      |
| `--muted`      | `#55524C` | tekst pomocniczy                |
