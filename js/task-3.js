// Napisz klasę StringBuilder, która przyjmuje jeden parametr 
// initialValue — dowolny ciąg znaków, który jest zapisywany w prywatnej właściwości value obiektu, który jest tworzony.

// Ogłoś następujące metody klasy:

// getValue() — zwraca aktualną wartość prywatnej właściwości value.
// padEnd(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na końcu wartości prywatnej właściwości value obiektu, 
// który wywołuje tę metodę.
// padStart(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku wartości prywatnej właściwości value obiektu, 
// który wywołuje tę metodę.
// padBoth(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku i na końcu wartości prywatnej właściwości value obiektu, 
// który wywołuje tę metodę.



class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }
    getValue() {
        return this.#value;
    }
    padStart(str) {
        this.#value = str.concat(this.#value);
        // this.#value = str += this.#value;
    }
    padEnd(str) {
        this.#value = this.#value.concat(str);
        // this.#value += str;
    }
    padBoth(str) {
        this.#value = str.concat(this.#value).concat(str);
        // this.#value = str + this.#value + str;
    }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="