document.addEventListener("DOMContentLoaded", function() {

    // Clase Alumno
    class Alumno {
        constructor(nombre, edad, curso) {
            this.nombre = nombre;
            this.edad = edad;
            this.curso = curso;
        }
    }

    // Array de alumnos
    const alumnos = [
        new Alumno("Alumno 1", 18, "DAW"),
        new Alumno("Alumno 2", 19, "DAW"),
        new Alumno("Alumno 3", 20, "DAW"),
        new Alumno("Alumno 4", 21, "DAW"),
        new Alumno("Alumno 5", 22, "DAW"),
        new Alumno("Alumno 6", 23, "DAW"),
        new Alumno("Alumno 7", 24, "DAW"),
        new Alumno("Alumno 8", 25, "DAW"),
        new Alumno("Alumno 9", 26, "DAW"),
        new Alumno("Alumno 10", 27, "DAW"),
        new Alumno("Alumno 11", 28, "DAW"),
        new Alumno("Alumno 12", 29, "DAW"),
        new Alumno("Alumno 13", 30, "DAW"),
        new Alumno("Alumno 14", 31, "DAW"),
        new Alumno("Alumno 15", 32, "DAW"),
        new Alumno("Alumno 16", 33, "DAW"),
        new Alumno("Alumno 17", 34, "DAW"),
        new Alumno("Alumno 18", 35, "DAW"),
        new Alumno("Alumno 19", 36, "DAW"),
        new Alumno("Alumno 20", 37, "DAW"),
        new Alumno("Alumno 21", 20, "DAW"),
        new Alumno("Alumno 22", 21, "DAW")
    ];


    let alumnosGenerados = [];

    // Función para generar alumnos
    function generarAlumno() {
        if (alumnosGenerados.length >= alumnos.length) {
            alert("Ya se han generado todos los alumnos");
            return;
        }

        let alumno;
        do {
            alumno = alumnos[Math.floor(Math.random() * alumnos.length)];
        } while (alumnosGenerados.includes(alumno));

        alumnosGenerados.push(alumno);
        crearCarta(alumno);
    }

    // Función para crear contenedores 
    function crearCarta(alumno) {
        const container = document.getElementById("container");
        const card = document.createElement("div");
        card.classList.add("card");

        const nombre = document.createElement("p");
        nombre.textContent = `Nombre: ${alumno.nombre}`;

        const edad = document.createElement("p");
        edad.textContent = `Edad: ${alumno.edad}`;

        const curso = document.createElement("p");
        curso.textContent = `Curso: ${alumno.curso}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            container.removeChild(card);
            alumnosGenerados = alumnosGenerados.filter(a => a !== alumno);
        });

        card.appendChild(nombre);
        card.appendChild(edad);
        card.appendChild(curso);
        card.appendChild(deleteBtn);
        container.appendChild(card);
    }

    // Botón para generar alumno
    document.getElementById("generateBtn").addEventListener("click", generarAlumno);
});
