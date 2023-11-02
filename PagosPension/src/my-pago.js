import { LitElement, html } from "lit-element";
import styleScss from "./my-elementStyle";

class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }

    static get properties() {
        return {
          pago: { type: Array },
          serviciopagar: { type: String },
          codestudiante: { type: String },
          mes: { type: String },
          cantmeses: { type: Number },
          valorpension: { type: String },
          totalPagar: { type: String },
          confirmar: { type: String },
          nombresEstu: { type: String },
          apellidosEstu: { type: String },
          gradoEstu: { type: String },
          nombresAcu: { type: String },
          apellidosAcu: { type: String },
          tipoDoc: { type: String },
          numDoc: { type: String },
          telefono: { type: String },
          correo: { type: String },
          medioPago: { type: String },
        };
      }

      constructor() {
        super();
        this.pago = [];
        this.serviciopagar = 'Pago de Pensión Colegio Claretiano de Bosa';
        this.codestudiante = '';
        this.mes = '';
        this.cantmeses = '';
        this.valorpension = '';
        this.totalPagar = '';
        this.confirmar = 'si';
        this.nombresEstu = '';
        this.apellidosEstu = '';
        this.gradoEstu = '';
        this.nombresAcu = '';
        this.apellidosAcu = '';
        this.tipoDoc = '';
        this.numDoc = '';
        this.telefono = '';
        this.correo = '';
        this.medioPago = '';
      }

    render() {
        return html`
        <div class="nav">
            <div class="icon"><img src="img/clare.png"></div>
        </div>
        <div class="contene">
            <div class="registrarUsu">
                <b>Pago Pensión</b>
            </div>
            <form @submit=${this._envioUs} class="formulario">
            <ul>
            ${this.pago.map(
              (pagos) =>
                html`
                <div class="separ">
                <div class="contenedor">
                <div class="registrarUsua">
                <b>Datos Pensión</b>
                </div>
                    <div class="input-contene">
                        <div class="datos">Servicio a pagar:</div>
                        <p>${pagos.serviciopaga}</p>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Código estudiante:</div>
                            <p>${pagos.codestudiant}</p>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Confirma cod estu:</div>
                            <p>${pagos.codestudiant}</p>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Meses:</div>
                            <p>${pagos.me}</p>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Cantidad meses:</div>
                            <p>${pagos.cantmese}</p>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Valor pens mensual:</div>
                            <p>${pagos.valorpensio}</p>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Tot Pagar:</div>
                            <p>${pagos.totalPaga}</p>
                        </div>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">¿Confirmas tu pago?:</div>
                        <p>${pagos.confirma}</p>
                    </div>
                    <div class="separacion">
                      <div class="input-conteni">
                          <div class="datos">Código:</div>
                          <p>${pagos.codestudiant}</p>
                      </div>
                      <div class="input-conteni">
                          <div class="datos">Nombres:</div>
                          <p>${pagos.nombreestu}</p>
                      </div>
                    </div>
                    <div class="separacion">
                      <div class="input-conteni">
                          <div class="datos">Apellidos:</div>
                          <p>${pagos.apellidoestu}</p>
                      </div>
                      <div class="input-conteni">
                          <div class="datos">Grado:</div>
                          <p>${pagos.gradoestu}</p>
                      </div>
                    </div>
                    <div class="separacion">
                      <div class="input-conteni">
                          <div class="datos">Nombres:</div>
                          <p>${pagos.nombreacu}</p>
                      </div>
                      <div class="input-conteni">
                          <div class="datos">Apellidos:</div>
                          <p>${pagos.apellidoacu}</p>
                      </div>
                    </div>
                    <div class="separacion">
                      <div class="input-conteni">
                          <div class="datos">Tipo Doc:</div>
                          <p>${pagos.tipodocu}</p>
                      </div>
                      <div class="input-conteni">
                          <div class="datos">Num Doc:</div>
                          <p>${pagos.numdocu}</p>
                      </div>
                    </div>
                    <div class="separacion">
                      <div class="input-conteni">
                          <div class="datos">Teléfono:</div>
                          <p>${pagos.telefo}</p>
                      </div>
                      <div class="input-conteni">
                          <div class="datos">Correo:</div>
                          <p>${pagos.corre}</p>
                      </div>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">Medio de Pago:</div>
                        <p>${pagos.mediopag}</p>
                    </div>
                </div>
            </ul>
            </div>
                `
            )}             
               <div class="contenedor">
                <div class="registrarUsua">
                <b>Datos de Pago</b>
                </div>
                <div class="input-contene">
                    <div class="datos">Servicio a pagar:</div>
                    <select>
                        <option disabled selected="">Obligatorio</option>
                        <option .value=${this.serviciopagar} @input=${this._EntradaServicio}> Pago de Pensión Colegio Claretiano de Bosa</option>
                    </select>
                </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Código estudiante:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.codestudiante} @input=${this._EntradaCodigo}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Confirma cod estu:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.codestudiante} @input=${this._ConfirmarCodigo}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Meses:</div>
                            <input type="text" placeholder="nombre meses a pagar" .value=${this.mes} @input=${this._EntradaMes}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Cantidad meses:</div>
                            <input type="text" placeholder="número meses a pagar" .value=${this.cantmeses} @input=${this._EntradaCantM}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Valor pens mensual:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.valorpension} @input=${this._EntradaValorM}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Tot Pagar:</div>
                            <input type="text" placeholder="0" value=${this.totalPagar} @input=${this._ConfirmTotal}>
                        </div>
                    </div>
                    <div class="registrarUsua">
                        <b>Confirmar Pago</b>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">¿Confirmas tu pago?:</div>
                        <input type="text" placeholder="si o no (minúsculas)" .value=${this.confirmar} @input=${this._EntradaConfirm}>
                    </div>
                    <div class="registrarUsua">
                <b>Datos Estudiante</b>
                </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Código:</div>
                            <input type="text" placeholder="obligatorio"  .value=${this.codestudiante} @input=${this._ConfirmarCodigo}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Nombres:</div>
                            <input type="text" placeholder="obligatorio"  .value=${this.nombresEstu} @input=${this._EntradaNombresEstu}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Apellidos:</div>
                            <input type="text" placeholder="obligatorio"  .value=${this.apellidosEstu} @input=${this._EntradaApellidosEstu}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Grado:</div>
                            <input type="text" placeholder="número grado"  .value=${this.gradoEstu} @input=${this._EntradaGradoEstu}>
                        </div>
                    </div>
                    <div class="registrarUsua">
                        <b>Datos Acudiente</b>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Nombres:</div>
                            <input type="text" placeholder="obligatorio"  .value=${this.nombresAcu} @input=${this._EntradaNombresAcu}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Apellidos:</div>
                            <input type="text" placeholder="obligatorio"  .value=${this.apellidosAcu} @input=${this._EntradaApellidosAcu}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Tipo Doc:</div>
                            <input type="text" placeholder="siglas en mayúscula"  .value=${this.tipoDoc} @input=${this._EntradaTipoDocumen}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Num Doc:</div>
                            <input type="text" placeholder="sin puntos" .value=${this.numDoc} @input=${this._EntradaNumDocumen}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Teléfono:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.telefono} @input=${this._EntradaTelefonoAcu}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Correo:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.correo} @input=${this._EntradaCorreoAcu}>
                        </div>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">Medio de Pago:</div>
                        <input type="text" placeholder="BAVV-B.Btá-B.Occi-B.Popu" .value=${this.medioPago} @input=${this._EntradaMediodePago}>
                    </div>
                    <div class="boton">
                        <input type="button" class="btnre" value="REGISTRAR" ?disabled=${!this.confirmar} @click=${this._envioUs}>
                    </div>
                </div>
                </div>
            </form>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>
        `;
    }

    _EntradaServicio(event) {
        this.serviciopagar= event.target.value;
      }
    
    _EntradaCodigo(event) {
        this.codestudiante = event.target.value;
      }

    _ConfirmarCodigo(event) {
        const codigoConfirmacion = event.target.value;
        if (codigoConfirmacion === this.codestudiante) {
          this.confirmar = true;
        } else {
          this.confirmar = false;
        }
      }
      // Compara el código ingresado con el código de confirmación

    _EntradaMes(event) {
        this.mes = event.target.value;
      }

      _CalcularTotal() {
        const meses = parseFloat(this.cantmeses);
        const valorPension = parseFloat(this.valorpension);
        const total = meses * valorPension;
        this.totalPagar = total.toFixed(2);
      }
      //Función para convertir y calcular la cantidad de meses por el valor de la pensión a números y combierte el total a dos decimales

    _EntradaCantM(event) {
        this.cantmeses = event.target.value;
        this._CalcularTotal();
      }
      
    _EntradaValorM(event) {
        this.valorpension = event.target.value;
        this._CalcularTotal();
      }
      

    _ConfirmTotal(event) {
        this.totalPagar = event.target.value;
      }

    _EntradaConfirm(event) {
        this.confirmar = event.target.value;
      }

    _EntradaNombresEstu(event) {
      this.nombresEstu = event.target.value;
    }

    _EntradaApellidosEstu(event) {
      this.apellidosEstu = event.target.value;
    }

    _EntradaGradoEstu(event) {
      this.gradoEstu = event.target.value;
    }

    _EntradaNombresAcu(event) {
      this.nombresAcu = event.target.value;
    }

    _EntradaApellidosAcu(event) {
      this.apellidosAcu = event.target.value;
    }

    _EntradaTipoDocumen(event) {
      this.tipoDoc = event.target.value;
    }

    _EntradaNumDocumen(event) {
      this.numDoc = event.target.value;
    }

    _EntradaTelefonoAcu(event) {
      this.telefono = event.target.value;
    }

    _EntradaCorreoAcu(event) {
      this.correo = event.target.value;
    }

    _EntradaMediodePago(event) {
      this.medioPago = event.target.value;
    }
    
    _envioUs(event) {
        event.preventDefault();
        const nuevoPago = { serviciopaga: this.serviciopagar, codestudiant: this.codestudiante, me: this.mes, cantmese: this.cantmeses, valorpensio: this.valorpension, totalPaga: this.totalPagar, confirma: this.confirmar,
        nombreestu: this.nombresEstu, apellidoestu: this.apellidosEstu, gradoestu: this.gradoEstu, nombreacu: this.nombresAcu, apellidoacu: this.apellidosAcu, tipodocu: this.tipoDoc, numdocu: this.numDoc, telefo: this.telefono, corre: this.correo, mediopag: this.medioPago };
        this.pago = [...this.pago, nuevoPago];
        this.serviciopagar = ''; 
        this.codestudiante = '';  
        this.mes = ''; 
        this.cantmeses = ''; 
        this.valorpension = ''; 
        this.totalPagar = ''; 
        this.confirmar = '';
        this.nombresEstu = '';
        this.apellidosEstu = '';
        this.gradoEstu = '';
        this.nombresAcu = '';
        this.apellidosAcu = '';
        this.tipoDoc = '';
        this.numDoc = '';
        this.telefono = '';
        this.correo = '';
        this.medioPago = '';
        console.log(this.pago);
        localStorage.setItem('pago', JSON.stringify(this.pago)) 
      }

      
      
}

customElements.define('my-pago', pagopension);