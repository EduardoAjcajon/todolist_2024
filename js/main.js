import { tareas } from "./data_todo.js";

function cargar_tareas(){

    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if(cada_tarea.estado){
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[/]</div>
        `;
        }else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
        `;
        }

        cuadro_de_tareas.appendChild(div_tarea);

    });

}

cargar_tareas();

function cargar_botones () {
    let caja_btn = document.querySelector('.botones');

    caja_btn.innerHTML = `
        <div class="contenerdor_btn">
            <div class="btn"> + </div>
            <p class="txt_nuevo"> Nuevo </p> 
        </div>
    `
}

cargar_botones();

function cargar_formulario () {
    let ventana_formulario = document.querySelector('.formulario');
    ventana_formulario.classList.add(`acrivar_b`);
    ventana_formulario.innerHTML = `    
    <div class="div_formulario">
    <div class="btn_cerar2"> x </div>

    <input type="txt" class="entrada_tarea">
    </div>

    <div class="btn_crear">Crear</div>

    `;

    let btn_crear = document.querySelector(".btn_crear");
    btn_crear.addEventListener("click", ()=> {
        let tarea = document.querySelector(".entrada_tarea").value;

        let estructura_de_tarea = {
            estado: true,
            id: tarea,
            texto: tarea,
        }

        tareas.push(estructura_de_tarea);

        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML=`
        <div class="transparente"></div>
        `;
        
        
        cargar_tareas( ventana_formulario.classList.remove(`acrivar_b`));

        let btna_formulario2 = document.querySelector('.transparente');
        btna_formulario2.addEventListener('click', cargar_formulario);

        
    })
    
    let btn_cerar2 = document.querySelector('.btn_cerar2');
    btna_formulario.addEventListener('click', cargar_formulario);
}

let btna_formulario2 = document.querySelector('.transparente');
btna_formulario2.addEventListener('click', cargar_formulario);


// Programacion del boxDecorationBreak: 
let btna_formulario = document.querySelector('.btn');
btna_formulario.addEventListener('click', cargar_formulario);