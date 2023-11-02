import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";

export class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }

    static get properties(){
        return{
            usuario: { type: Text },
            contraseña: { type: Number },
            verificar: { type: Number },
            mensaje: { type: Text }
        };
    }

    constructor(){
        super()
        this.verificarUsu = "AndyBob"
        this.usuario = ""
        this.contraseña = 0
        this.verificarContra = 1920
        this.mensaje = ""
    }


    render() {
        return html`
        <div class="nav">
            <div class="icon"><img src="img/clare.png"></div>
        </div>
        <div class="contene">
            <div class="registrarUsu">
                <b>Datos Banco</b>
            </div>
            <form method="post" class="formulario2">
                <div class="contenedor">
                    <div class="separacion2">
                        <div class="input-contenedor">
                            <div class="datos">Usuario:</div>
                            <input type="text" placeholder="obligatorio" id="datosbanco1">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Contraseña:</div>
                            <input type="text" placeholder="obligatorio" id="datosbanco2">
                        </div>
                    </div>
                    <div class="boton">
                    <button type="button" class="btnPag" @click=${this.Validacion}>PAGAR</button>
                    </div>
                    <p>${this.mensaje}</p>
                </div>
            </form>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>
        `;
    }

    Validacion(){
        const usuario = this.shadowRoot.getElementById("datosbanco1").value
        const contraseña = parseInt(this.shadowRoot.getElementById("datosbanco2").value)
        if ((usuario == this.verificarUsu) && (contraseña == this.verificarContra)){
            this.mensaje = "Señor Usuario, su pago de Pensión ha sido exitoso!, ya puede ver su comprobante de pago"
        }else {
            this.mensaje = "Datos Incorrectos!"
        }
    }


}
customElements.define('my-codigo', pagopension);
