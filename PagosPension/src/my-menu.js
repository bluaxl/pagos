import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";
import './my-pago';
import './my-codigo';
import './my-comprobante';

export class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }
    static properties = {
        componente : {Number}
    }
    constructor() {
        super(),
        this.componente = 0;
    }
    obtenerCom (nombreComponente){
        if (nombreComponente === "pago") {
            this.componente = 1
        }else if(nombreComponente === "banco"){
            this.componente = 2
        }else if(nombreComponente === "comprobante"){
            this.componente = 3
        }}

    render() {
        return html`
        <div class="nav">
            <div class="icon"><img src="img/clare.png"></div>
        </div>
        <div class="contene">
            <div class="registrarUsu">
                <b>Menu Pago Pensión</b>
            </div>
            <div class="contenedormenumate">
                    <div class="bienvenida"><P>Bienvenido!, Por favor sigue el menu en orden consecutivo</P></div>
                    <div class="ejerciciosmate">
                        <a href="#" @click=${() => this.obtenerCom("pago")}><p>Datos de Pago pensión</P></a>
                        <a href="#" @click=${() => this.obtenerCom("banco")}><p>Datos de Banco</P></a>
                        <a href="#" @click=${() => this.obtenerCom("comprobante")}><p>Comprobante de Pago</P></a>
                    </div>
            </div>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>

        ${this.componente === 1 ? html`<my-pago></my-pago>` : ""}
        ${this.componente === 2 ? html`<my-codigo></my-codigo>` : ""}
        ${this.componente === 3 ? html`<my-comprobante></my-comprobante>` : ""}
        `;
    }


}
customElements.define('my-menu', pagopension);
