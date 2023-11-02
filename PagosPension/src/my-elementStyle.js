import { css } from 'lit-element';

export default css `
* {
    margin: 0;
    padding: 0;
}

body{
    background: #FFF;
    max-height: auto;
    padding: 5px;
}

.nav {
    background: #71c55b;
    widht: auto;
    height: auto;
    padding: 2px;
    border-radius: 5px;
}

.icon img {
    widht: 80px;
    height: 60px;
    margin-left: 92%;
}

footer{
    background: #71c55b;
    widht: auto;
    min-height: 8vh;
    padding: 2px;
    border-radius: 5px;
}

footer p {
    font-size: 20px;
    margin-left: 87vh;
    margin-top: 10px;
}

.contene{
    max-width: auto;
    max-width: auto;
    margin: 0 0 90px 35vh;
}

.registrarUsu{
    color: #385B56;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    line-height: normal;
    margin: 3% 0 0 3%;
}

.registrarUsua{
    color: #385B56;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    margin: 0 0 1% 3%;
}

.formulario{
    border-radius: 40px;
    height: auto;
    width: 850px;
    background: #D9D9D9;
    margin-top: 2%;
    padding: 35px;
}

.formulario2{
    border-radius: 40px;
    height: 200px;
    width: 500px;
    background: #D9D9D9;
    margin-top: 2%;
    padding: 35px;
}

input{
    color: #333;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: auto;
    max-height: auto;
    border: none;
    outline: none;
}

.separacion{
    display: flex;
    justify-content: space-around;
}

.separacion2{
    display: inline;
    justify-content: center;
    align-items: center;
}

select > option{
    color: #333;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: auto;
    max-height: auto;
    border: none;
    outline: none;
}

select{
    color: #333;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: auto;
    max-height: auto;
    border: none;
    outline: none;
    appearance: none;
}

.input-contenedor{
    margin-bottom: 25px;
    width: 400px;
    height: auto;
    background: white;
    display: flex;
    border-radius: 5px;
    border: none;
}

.input-contene{
    margin-bottom: 25px;
    margin-left: 12px;
    width: 600px;
    height: auto;
    background: white;
    display: flex;
    border-radius: 5px;
    border: none;
}

.input-conteni{
    margin-bottom: 25px;
    margin-left: 12px;
    width: 415px;
    height: auto;
    background: white;
    display: flex;
    border-radius: 5px;
    border: none;
}

.datos{
    max-height: auto;
    max-width: auto;
    margin: 0px 15px 0 0px;
    color: #999;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #EFEFEF;
    padding: 5px;
    border-radius: 3PX;
}

.contralea{
    display: flex;
    border-radius: 5px;
}

.btn{
	display: block;
	width: 35px;
	height: auto;
    border-radius: 5px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #39A900, #52a12a, #6cbc44);
	background-size: 200%;
	font-size: 20px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	transition: .5s;
    margin: 2.5px 0 0 32px;
}
.btn:hover{
	background-position: right;
}

.btnre{
	display: block;
	width: 150px;
	height: 40px;
    border-radius: 5px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #39A900, #52a12a, #6cbc44);
	background-size: 200%;
	font-size: 17px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	transition: .5s;
    margin: 20px 0px 0 77%;
}
.btnre:hover{
	background-position: right;
}

.btntot{
	display: block;
	width: 46px;
	height: 30px;
    border-radius: 5px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #39A900, #52a12a, #6cbc44);
	background-size: 200%;
	font-size: 15px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	transition: .5s;
    margin: 0px 0px 0px 33px;
}
.btnre:hover{
	background-position: right;
}

.btnPag{
	display: block;
	width: 100px;
	height: 30px;
    border-radius: 5px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #39A900, #52a12a, #6cbc44);
	background-size: 200%;
	font-size: 17px;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	transition: .5s;
    margin: 45px 0px 0 5px;
}
.btnre:hover{
	background-position: right;
}

.contenedormenumate{
    color: black;
    display: block;
    background-color: #D9D9D9;
    width: 600px;
    padding: 1rem;
    border-radius: 2rem;
    gap: 0.5rem;
    margin-top: 25px;
}

.bienvenida {
    min-widht: auto;
    height: auto;
    padding: 8px;
}

p {
    font-family: Inter;
    font-size: 18px;
    margin: 4px 0px 3px 0px;
}

a p {
    font-size: 19px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
}

.ejerciciosmate{
    min-widht: auto;
    padding: 8px;
    margin-top: 20px;
}

a p:hover{
    background: #b5b5b5;
}

.separ {
    background: #cccccc;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 40px;
}

`;