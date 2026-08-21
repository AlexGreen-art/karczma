# Karczma pod Starym Kasztanem — strona demonstracyjna

Fikcyjna karczma, drugi przykład realizacji do portfolio.
Miejsce, ceny, nazwiska i numer telefonu są zmyślone.

## Czym różni się od „Starego Sadu"

- **Brak paska u góry.** Menu, godziny otwarcia i telefon siedzą w stałej
  bocznej kolumnie po lewej; treść przewija się obok. Na telefonie kolumna
  zwija się w niski pasek z przewijanym poziomo menu.
- **Niski pas otwierający** zamiast zdjęcia na cały ekran — od razu widać,
  że pod spodem coś jest.
- Inna kolorystyka (sadza, miód, wiśnia) i inne kroje (Zilla Slab + Inter).
- Jedna strona zamiast trzech — dla karczmy to naturalne.

## Element charakterystyczny

**Tablica dnia** — siedem dni tygodnia, każdy z zupą, daniem głównym
i napojem. Po wejściu podświetla się dzisiejszy dzień. To odpowiednik
tablicy przy wejściu do lokalu, a nie kolejny PDF z kartą.

## Pliki

```
index.html   cała strona
styl.css     arkusz stylów
skrypt.js    tablica dnia + zastępniki brakujących zdjęć
img/         zdjęcia (na razie puste — patrz BRIEF-ZDJEC.md)
```

## Zdjęcia

Wszystkie sześć jest na miejscu, w folderze `img/`, skompresowane.
Cała strona waży ok. 1,7 MB. Lista proporcji w BRIEF-ZDJEC.md.

## Publikacja na GitHub Pages

Nowe repozytorium, np. `karczma-pod-kasztanem`, wgraj zawartość tego folderu,
potem Settings → Pages → gałąź `main`, folder `/ (root)`.

Po publikacji odkomentuj w `index.html` cztery linijki z `og:image` i `og:url`
i wstaw w nich prawdziwy adres — bez tego link wrzucony na Facebooka
nie pokaże zdjęcia.
