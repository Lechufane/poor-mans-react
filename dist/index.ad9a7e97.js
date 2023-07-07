//Hay 3 fundamentos en React: El virtual DOM, Hooks y modo concurrente.
let React = {
    /**
     * El primer fundamento, el virtual DOM es COMO react maneja el DOM, el dom es una estructura en forma de objeto anidado del documento HTML, 
     * cada etiqueta HTML es interpretada por JS como un objeto y sus atributos como propiedades de ese objeto. El virtual DOM aprovecha esto para 
     * generar objetos con las etiquetas HTML y sus atributos, y asi poder manipularlos de forma mas sencilla. Para esto, utiliza XML, que es un lenguaje
     * de marcado que permite crear etiquetas personalizadas, y asi poder crear objetos con las etiquetas HTML y sus atributos. Las etiquetas XML, no son
     * etiquetas HTML pero se les da el mismo nombre entonces cuando se interpretan, se convierten en etiquetas HTML. Es la magia del virtual DOM.
     * 
     * @param {string} tag - Etiqueta HTML
     * @param {object} props - Atributos de la etiqueta HTML
     * @param {array} children - Hijos de la etiqueta HTML si los tiene o primitivos si no tiene hijos
     * 
     * @returns {object} - Retorna un objeto con la etiqueta HTML y sus atributos
     * */ createElement: (tag, props, ...children)=>{
        if (typeof tag == "function") return tag(props);
        const element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        console.log(element);
        return element;
    },
    render: (reactElement, container)=>{
        if ([
            "string",
            "number"
        ].includes(typeof reactElement)) {
            container.appendChild(document.createTextNode(String(reactElement)));
            return;
        }
        const domElement = document.createElement(reactElement.tag);
        if (reactElement.props) Object.keys(reactElement.props).filter((p)=>p !== "children").forEach((p)=>domElement[p] = reactElement.props[p]);
        if (reactElement.props.children) reactElement.props.children.forEach((child)=>{
            React.render(child, domElement);
        });
        container.appendChild(domElement);
    },
    reRender: (reactElement, container)=>{
        container.innerHTML = "";
        React.render(reactElement, container);
    }
};
const App = ()=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: "Divino",
        __source: {
            fileName: "index.tsx",
            lineNumber: 64,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 65,
            columnNumber: 9
        },
        __self: this
    }, "Hola"), /*#__PURE__*/ React.createElement("div", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 66,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("input", {
        type: "text",
        placeholder: "Escribe algo",
        __source: {
            fileName: "index.tsx",
            lineNumber: 67,
            columnNumber: 13
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 69,
            columnNumber: 9
        },
        __self: this
    }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum dolor ratione labore, perferendis cum maiores minus beatae nobis qui soluta architecto adipisci, aut delectus. Molestias tempore adipisci aut officia!"));
};
React.render(/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 81,
        columnNumber: 14
    },
    __self: this
}), document.querySelector("#app"));

//# sourceMappingURL=index.ad9a7e97.js.map
