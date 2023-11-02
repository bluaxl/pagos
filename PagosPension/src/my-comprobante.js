import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";

export class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }


    render() {
        // Obtener los datos del localStorage
        const localStorageData = JSON.parse(localStorage.getItem('pago') || '[]'); // Si no hay datos, asigna un arreglo vacío
    
        if (localStorageData.length > 0) {
            const {
                serviciopaga,
                codestudiant,
                me,
                cantmese,
                valorpensio,
                totalPaga,
                confirma,
                nombreestu,
                apellidoestu,
                gradoestu,
                nombreacu,
                apellidoacu,
                tipodocu,
                numdocu,
                telefo,
                corre,
                mediopag
            } = localStorageData[0];
    
            return html`
            <ul>
            <div class="separ">
            <div class="contenedor">
            <div class="registrarUsua">
            <b>Comprobante de Pago</b>
                <div class="input-contene">
                    <div class="datos">Servicio a pagar:</div>
                    <p>${serviciopaga}</p>
                </div>
                <div class="separacion">
                    <div class="input-contenedor">
                        <div class="datos">Código estudiante:</div>
                        <p>${codestudiant}</p>
                    </div>
                    <div class="input-contenedor">
                        <div class="datos">Confirma cod estu:</div>
                        <p>${codestudiant}</p>
                    </div>
                </div>
                <div class="separacion">
                    <div class="input-contenedor">
                        <div class="datos">Meses:</div>
                        <p>${me}</p>
                    </div>
                    <div class="input-contenedor">
                        <div class="datos">Cantidad meses:</div>
                        <p>${cantmese}</p>
                    </div>
                </div>
                <div class="separacion">
                    <div class="input-contenedor">
                        <div class="datos">Valor pens mensual:</div>
                        <p>${valorpensio}</p>
                    </div>
                    <div class="input-contenedor">
                        <div class="datos">Tot Pagar:</div>
                        <p>${totalPaga}</p>
                    </div>
                </div>
                <div class="input-conteni">
                    <div class="datos">¿Confirmas tu pago?:</div>
                    <p>${confirma}</p>
                </div>
                <div class="separacion">
                  <div class="input-conteni">
                      <div class="datos">Código:</div>
                      <p>${codestudiant}</p>
                  </div>
                  <div class="input-conteni">
                      <div class="datos">Nombres:</div>
                      <p>${nombreestu}</p>
                  </div>
                </div>
                <div class="separacion">
                  <div class="input-conteni">
                      <div class="datos">Apellidos:</div>
                      <p>${apellidoestu}</p>
                  </div>
                  <div class="input-conteni">
                      <div class="datos">Grado:</div>
                      <p>${gradoestu}</p>
                  </div>
                </div>
                <div class="separacion">
                  <div class="input-conteni">
                      <div class="datos">Nombres:</div>
                      <p>${nombreacu}</p>
                  </div>
                  <div class="input-conteni">
                      <div class="datos">Apellidos:</div>
                      <p>${apellidoacu}</p>
                  </div>
                </div>
                <div class="separacion">
                  <div class="input-conteni">
                      <div class="datos">Tipo Doc:</div>
                      <p>${tipodocu}</p>
                  </div>
                  <div class="input-conteni">
                      <div class="datos">Num Doc:</div>
                      <p>${numdocu}</p>
                  </div>
                </div>
                <div class="separacion">
                  <div class="input-conteni">
                      <div class="datos">Teléfono:</div>
                      <p>${telefo}</p>
                  </div>
                  <div class="input-conteni">
                      <div class="datos">Correo:</div>
                      <p>${corre}</p>
                  </div>
                </div>
                <div class="input-conteni">
                    <div class="datos">Medio de Pago:</div>
                    <p>${mediopag}</p>
                </div>
            </div>
        </ul>
        </div>
            `;
        } else {
            // Manejo de caso en el que no hay datos en el localStorage
            return html`
                <!-- Mensaje de que no hay datos disponibles en el localStorage -->
                <p>No hay datos disponibles en el localStorage.</p>
            `;
        }
    }
    

}
customElements.define('my-comprobante', pagopension);
