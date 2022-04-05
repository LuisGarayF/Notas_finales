// Variables globales

let btnDatos = document.getElementById("datos");
let btnNotasHTML = document.querySelectorAll("btnNotasHTML");
let btnNotasCSS = document.getElementById("btnNotasCSS");
let btnNotasJS = document.getElementById("btnNotasJS");


// ----------------------------------------------------------------
// Ingreso de datos del alumnos de



function datos(){

let nombre = prompt("Ingrese el nombre del alumno");
let nombreAlumno = document.getElementById("inputNombre");
console.log(nombre);
nombreAlumno.textContent = nombre;
console.log(nombreAlumno);

let carrera = prompt("Ingrese la carrera de "+ nombre);

let carreraAlumno = document.getElementById("inputCarrera");
carreraAlumno.textContent = carrera;
return nombre;
}



//----------------------------------------------------------------
// Ingreso de notas

function ingresoNotasHTML(nombre){

    // Nota 1 HTML
    let nota1HTML = parseInt(prompt("Ingrese nota 1 de [HTML]"));
    let nota1HTMLitem = document.getElementById("nota1HTML");
    
    nota1HTMLitem.innerHTML =nota1HTML;
    notaUnoHTML = nota1HTML;
    console.log(notaUnoHTML);

    // Nota 2
    let nota2HTML = parseInt(prompt("Ingrese nota 2 de [HTML]"));
    let nota2HTMLitem = document.getElementById("nota2HTML");
    
    nota2HTMLitem.innerHTML = nota2HTML;
    notaDosHTML = nota2HTML;
    console.log(notaDosHTML);

    // Nota 3
    let nota3HTML = parseInt(prompt("Ingrese nota 3 de [HTML]"));
    let nota3HTMLitem = document.getElementById("nota3HTML");
    
    nota3HTMLitem.innerHTML = nota3HTML;
    notaTresHTML = nota3HTML;
    console.log(nota3HTML);
  
    let promedioNotasHTML = Math.round(((nota1HTML+ nota2HTML + nota3HTML)/3));
    let promedioHTMLitem = document.getElementById("promedioHTML");
    promedioHTMLitem.innerHTML = promedioNotasHTML;
    console.log(promedioNotasHTML);

    if( promedioNotasHTML < 40){
        //promedioNotasHTML.classList.add("reprobado");
        $('#promedioHTML').addClass('reprobado');
        console.log("REPROBADO!");
    } else {
        if(promedioNotasHTML >= 40){
        $('#promedioHTML').addClass('aprobado');
        console.log("APROBADO!");
        }
    }

    return promedioNotasHTML;
}

function ingresoNotasCSS(){

    // Nota 1 HTML
    let nota1CSS = parseInt(prompt("Ingrese nota 1 de [CSS]"));
    let nota1CSSitem = document.getElementById("nota1CSS");
    
    nota1CSSitem.innerHTML = nota1CSS;
    notaUnoCSS = nota1CSS;
    console.log(notaUnoCSS);

    // Nota 2
    let nota2CSS = parseInt(prompt("Ingrese nota 2 de [CSS]"));
    let nota2CSSitem = document.getElementById("nota2CSS");
    
    nota2CSSitem.innerHTML = nota2CSS;
    notaDosCSS = nota2CSS;
    console.log(notaDosCSS);

    // Nota 3
    let nota3CSS = parseInt(prompt("Ingrese nota 3 de [CSS]"));
    let nota3CSSitem = document.getElementById("nota3CSS");
    
    nota3CSSitem.innerHTML = nota3CSS;
    notaTresCSS = nota3CSS;
    console.log(notaTresCSS);

    let promedioNotasCSS = Math.round(((nota1CSS+ nota2CSS + nota3CSS)/3));
    let promedioCSSitem = document.getElementById("promedioCSS");
    promedioCSSitem.innerHTML = promedioNotasCSS;
    console.log(promedioNotasCSS);
    
    
    if( promedioNotasCSS < 40){
        //promedioNotasCSS.classList.add("reprobado");
        $('#promedioCSS').addClass('reprobado');
        console.log("REPROBADO!");
    } else {
        if(promedioNotasCSS >= 40){
        $('#promedioCSS').addClass('aprobado');
        console.log("APROBADO!");
        }
    }
    return promedioNotasCSS;
}

function ingresoNotasJS(){

    // Nota 1 HTML
    let nota1JS = parseInt(prompt("Ingrese nota 1 de [JS]"));
    let nota1JSitem = document.getElementById("nota1JS");
    
    nota1JSitem.innerHTML = nota1JS;
    notaUnoJS = nota1JS;
    console.log(notaUnoJS);

    // Nota 2
    let nota2JS = parseInt(prompt("Ingrese nota 2 de [JS]"));
    let nota2JSitem = document.getElementById("nota2JS");
    
    nota2JSitem.innerHTML = nota2JS;
    notaDosJS = nota2JS;
    console.log(notaDosJS);

    // Nota 3
    let nota3JS = parseInt(prompt("Ingrese nota 3 de [JS]"));
    let nota3JSitem = document.getElementById("nota3JS");
    
    nota3JSitem.innerHTML = nota3JS;
    notaTresJS = nota3JS;
    console.log(notaTresJS);

    let promedioNotasJS = Math.round(((nota1JS+ nota2JS + nota3JS)/3));
    let promedioJSitem = document.getElementById("promedioJS");
    promedioJSitem.innerHTML = promedioNotasJS;
    console.log(promedioNotasJS);

    if( promedioNotasJS < 40){
        //promedioNotasCSS.classList.add("reprobado");
        $('#promedioJS').addClass('reprobado');
        console.log("REPROBADO!");
    } else {
        if(promedioNotasJS>=40){
        $('#promedioJS').addClass('aprobado');
        console.log("APROBADO!");
        }
    }
    return promedioNotasJS;
}








