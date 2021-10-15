//Factory crea objetos basado en condiciones

class InputHtmlFactory {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    };
    crearInput() {
        return `<input type="${this.type}" id="${this.name}"></input>`;
    }
}

class HTMLInputHtmlFactory {
    crearCrearElemento(type, name) {
        switch (type) {
            case "text":
                return new InputHtmlFactory(type, name);
            case "number":
                return new InputHtmlFactory(type, name);
            default:
                return;
        }
    }
}

const createdinput = new HTMLInputHtmlFactory();
const createdHTMLInput = createdinput.crearCrearElemento("text", "cliente");
const createdHTMLInputN = createdinput.crearCrearElemento("number", "age");

console.log(createdHTMLInput.crearInput());
console.log(createdHTMLInputN.crearInput());

