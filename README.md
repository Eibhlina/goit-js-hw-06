# Zadanie 1. Konto użytkownika

Przed odejściem, programista popsuł kod źródłowy zarządzania kontami użytkowników naszego serwisu dostawy jedzenia. Przeprowadź refaktoryzację metod obiektu customer, dodając brakujące this przy odwołaniach do właściwości obiektu.

Użyj tego kodu startowego i wykonaj refaktoryzację. Po deklaracji obiektu dodaliśmy wywołania metod. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Zadanie 2. Magazyn

Stwórz klasę Storage, która będzie tworzyć obiekty do zarządzania magazynem towarów. Klasa oczekuje tylko jednego argumentu — początkowej tablicy towarów, która jest zapisywana do utworzonego obiektu w prywatnej właściwości items.


Ogłoś następujące metody klasy:

* getItems() — zwraca tablicę bieżących towarów w prywatnej właściwości items.
* addItem(newItem) — przyjmuje nowy towar newItem i dodaje go do tablicy towarów w prywatnej właściwości items obiektu.
* removeItem(itemToRemove) — przyjmuje ciąg znaków z nazwą towaru itemToRemove i usuwa go z tablicy towarów w prywatnej właściwości items obiektu.

Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy, aby sprawdzić poprawność działania. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Zadanie 3. Konstruktor ciągów

Napisz klasę StringBuilder, która przyjmuje jeden parametr initialValue — dowolny ciąg znaków, który jest zapisywany w prywatnej właściwości value obiektu, który jest tworzony.

Ogłoś następujące metody klasy:

* getValue() — zwraca aktualną wartość prywatnej właściwości value.
* padEnd(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na końcu wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.
* padStart(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.
* padBoth(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku i na końcu wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.

Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy, aby sprawdzić poprawność działania. W konsoli zostaną wyświetlone wyniki ich pracy. Proszę, nic tam nie zmieniaj.
