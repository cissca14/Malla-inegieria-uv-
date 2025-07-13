const ramos = [
  // 1° Semestre
  { nombre: "Fundamentos de matemáticas", semestre: 1 },
  { nombre: "Desarrollo personal", semestre: 1 },
  { nombre: "Desafíos de ingeniería", semestre: 1 },
  { nombre: "Fundamentos de programación", semestre: 1 },
  { nombre: "Fundamentos de física", semestre: 1 },

  // 2° Semestre
  { nombre: "Cálculo diferencial", semestre: 2 },
  { nombre: "Álgebra", semestre: 2 },
  { nombre: "Ingeniería, innovación y emprendimiento", semestre: 2 },
  { nombre: "Programación", semestre: 2 },
  { nombre: "Química para ingeniería", semestre: 2 },

  // 3° Semestre
  { nombre: "Cálculo integral y series", semestre: 3 },
  { nombre: "Álgebra lineal", semestre: 3 },
  { nombre: "Física mecánica", semestre: 3 },
  { nombre: "Tópicos de formación general", semestre: 3 },
  { nombre: "Alfabetización académica para ingeniería I", semestre: 3 },
  { nombre: "Tipo sello UV I", semestre: 3 },
  { nombre: "Idioma I", semestre: 3 },

  // 4° Semestre
  { nombre: "Cálculo en varias variables", semestre: 4 },
  { nombre: "Ecuaciones diferenciales ordinarias", semestre: 4 },
  { nombre: "Física calor y ondas", semestre: 4 },
  { nombre: "Administración de empresas y organizaciones", semestre: 4 },
  { nombre: "Tipo sello UV II", semestre: 4 },
  { nombre: "Idioma II", semestre: 4 },

  // 5° Semestre
  { nombre: "Física electromagnetismo", semestre: 5 },
  { nombre: "Estadística y probabilidades", semestre: 5 },
  { nombre: "Análisis financieros y contable", semestre: 5 },
  { nombre: "Termodinámica", semestre: 5 },
  { nombre: "Análisis de materiales y diseño de productos", semestre: 5 },
  { nombre: "Data science", semestre: 5 },
  { nombre: "Idioma III", semestre: 5 },
  { nombre: "Práctica básica", semestre: 5 },

  // 6° Semestre
  { nombre: "Inferencia estadística", semestre: 6 },
  { nombre: "Costos y presupuestos", semestre: 6 },
  { nombre: "Pensamiento sistémico", semestre: 6 },
  { nombre: "Alfabetización académica para ingeniería II", semestre: 6 },
  { nombre: "Microeconomía y macroeconomía", semestre: 6 },
  { nombre: "Idioma IV", semestre: 6 },

  // 7° Semestre
  { nombre: "Procesos industriales", semestre: 7 },
  { nombre: "Gestión de talento en las organizaciones", semestre: 7 },
  { nombre: "Modelamiento", semestre: 7 },
  { nombre: "Sistemas de información y administración de datos", semestre: 7 },
  { nombre: "Economía circular y sostenibilidad", semestre: 7 },
  { nombre: "Gestión de la innovación y emprendimiento", semestre: 7 },

  // 8° Semestre
  { nombre: "Gestión de operaciones I", semestre: 8 },
  { nombre: "Análisis y estrategia de negocios", semestre: 8 },
  { nombre: "Visualización de datos e inteligencia de negocios", semestre: 8 },
  { nombre: "Estrategia de marketing", semestre: 8 },
  { nombre: "Ingeniería económica", semestre: 8 },
  { nombre: "Proyecto de licenciatura", semestre: 8 },

  // 9° Semestre
  { nombre: "Investigación de operaciones", semestre: 9 },
  { nombre: "Gestión de operaciones II", semestre: 9 },
  { nombre: "Dirección estratégica", semestre: 9 },
  { nombre: "Formulación y evaluación de proyectos", semestre: 9 },
  { nombre: "Simulación de procesos y sistemas", semestre: 9 },
  { nombre: "Desarrollo organizacional", semestre: 9 },

  // 10° Semestre
  { nombre: "Gestión de riesgos", semestre: 10 },
  { nombre: "Gestión de la cadena de suministros", semestre: 10 },
  { nombre: "Project management", semestre: 10 },
  { nombre: "Gestión energética", semestre: 10 },
  { nombre: "Electivo profesional I", semestre: 10 },
  { nombre: "Finanzas", semestre: 10 },
  { nombre: "Taller de comunicación efectiva", semestre: 10 },

  // 11° Semestre
  { nombre: "Proyecto de título", semestre: 11 },
  { nombre: "Electivo profesional II", semestre: 11 },
  { nombre: "Práctica profesional", semestre: 11 }
];

let aprobados = JSON.parse(localStorage.getItem("aprobados-industrial")) || [];

function crearMalla() {
  const contenedor = document.querySelector(".semestres-container");
  for (let s = 1; s <= 11; s++) {
    const div = document.createElement("div");
    div.classList.add("semestre");
    div.innerHTML = `<h2>${s}° Semestre</h2>`;
    ramos
      .filter(r => r.semestre === s)
      .forEach(ramo => {
        const btn = document.createElement("div");
        btn.textContent = ramo.nombre;
        btn.classList.add("ramo");
        btn.dataset.nombre = ramo.nombre;

        if (aprobados.includes(ramo.nombre)) {
          btn.classList.add("aprobado");
        }

        btn.addEventListener("click", () => toggleRamo(ramo.nombre));
        div.appendChild(btn);
      });
    contenedor.appendChild(div);
  }
}

function toggleRamo(nombre) {
  const index = aprobados.indexOf(nombre);
  if (index >= 0) {
    aprobados.splice(index, 1);
  } else {
    aprobados.push(nombre);
  }
  localStorage.setItem("aprobados-industrial", JSON.stringify(aprobados));
  document.querySelector(".semestres-container").innerHTML = "";
  crearMalla();
}

crearMalla();
