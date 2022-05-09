import ReactDOM from "react-dom";
import App from "./App";

function Renderizar(){
    return(
        <App />
    );
}

const renderizacao = Renderizar();
ReactDOM.render(renderizacao, document.querySelector(".root"));