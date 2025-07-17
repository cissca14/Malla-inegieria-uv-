const data = [
  {
    "semestre": "1° Semestre",
    "ramos": [
      {
        "id": "fund_mat",
        "nombre": "Fundamentos de matemáticas"
      },
      {
        "id": "desarrollo_pers",
        "nombre": "Desarrollo personal"
      },
      {
        "id": "desafios",
        "nombre": "Desafíos de ingeniería"
      },
      {
        "id": "fund_prog",
        "nombre": "Fundamentos de programación"
      },
      {
        "id": "fund_fisica",
        "nombre": "Fundamentos de física"
      }
    ]
  },
  {
    "semestre": "2° Semestre",
    "ramos": [
      {
        "id": "calc_diff",
        "nombre": "Cálculo diferencial",
        "prereqs": [
          "fund_mat"
        ]
      },
      {
        "id": "algebra",
        "nombre": "Álgebra",
        "prereqs": [
          "fund_mat"
        ]
      },
      {
        "id": "innovacion",
        "nombre": "Ingeniería, innovación y emprendimiento",
        "prereqs": [
          "desafios"
        ]
      },
      {
        "id": "programacion",
        "nombre": "Programación",
        "prereqs": [
          "fund_prog"
        ]
      },
      {
        "id": "quimica",
        "nombre": "Química para ingeniería"
      }
    ]
  },
  {
    "semestre": "3° Semestre",
    "ramos": [
      {
        "id": "calc_int",
        "nombre": "Cálculo integral y series",
        "prereqs": [
          "calc_diff"
        ]
      },
      {
        "id": "algebra_lin",
        "nombre": "Álgebra lineal",
        "prereqs": [
          "algebra"
        ]
      },
      {
        "id": "fisica_mec",
        "nombre": "Física Mecánica",
        "prereqs": [
          "fund_fisica",
          "calc_diff"
        ]
      },
      {
        "id": "topicos_industrial",
        "nombre": "Tópicos formación general ingeniería industrial",
        "prereqs": [
          "desarrollo_pers",
          "innovacion"
        ]
      },
      {
        "id": "alf_aca_i",
        "nombre": "Alfabetización académica I"
      },
      {
        "id": "tipe_uv_i",
        "nombre": "Tipe sello UV I",
        "prereqs": [
          "innovacion"
        ]
      },
      {
        "id": "idioma_i",
        "nombre": "Idioma I"
      }
    ]
  },
  {
    "semestre": "4° Semestre",
    "ramos": [
      {
        "id": "calc_varias",
        "nombre": "Cálculo en varias variables",
        "prereqs": [
          "calc_int",
          "algebra_lin"
        ]
      },
      {
        "id": "edo",
        "nombre": "Ecuaciones diferenciales ordinarias",
        "prereqs": [
          "calc_int",
          "algebra_lin"
        ]
      },
      {
        "id": "fisica_ondas",
        "nombre": "Física calor y ondas",
        "prereqs": [
          "calc_int",
          "fisica_mec"
        ]
      },
      {
        "id": "admin_empresas",
        "nombre": "Administración de empresas",
        "prereqs": [
          "topicos_industrial",
          "alf_aca_i"
        ]
      },
      {
        "id": "tipe_uv_ii",
        "nombre": "Tipe sello UV II",
        "prereqs": [
          "tipe_uv_i"
        ]
      },
      {
        "id": "idioma_ii",
        "nombre": "Idioma II",
        "prereqs": [
          "idioma_i"
        ]
      }
    ]
  },
  {
    "semestre": "5° Semestre",
    "ramos": [
      {
        "id": "fisica_electro",
        "nombre": "Física electromagnetismo",
        "prereqs": [
          "calc_int",
          "fisica_mec"
        ]
      },
      {
        "id": "estadistica",
        "nombre": "Estadística y probabilidades",
        "prereqs": [
          "calc_varias",
          "programacion"
        ]
      },
      {
        "id": "analisis_contable",
        "nombre": "Análisis financieros y contable",
        "prereqs": [
          "algebra",
          "admin_empresas"
        ]
      },
      {
        "id": "termo",
        "nombre": "Termodinámica",
        "prereqs": [
          "fisica_ondas",
          "quimica"
        ]
      },
      {
        "id": "analisis_materiales",
        "nombre": "Análisis de materiales y diseño de productos",
        "prereqs": [
          "innovacion",
          "quimica"
        ]
      },
      {
        "id": "data_science",
        "nombre": "Data science",
        "prereqs": [
          "algebra_lin",
          "programacion"
        ]
      },
      {
        "id": "idioma_iii",
        "nombre": "Idioma III",
        "prereqs": [
          "idioma_ii"
        ]
      },
      {
        "id": "practica_basica",
        "nombre": "Práctica básica",
        "prereqs": [
          "calc_varias",
          "edo",
          "fisica_ondas",
          "admin_empresas",
          "tipe_uv_ii",
          "idioma_ii"
        ]
      }
    ]
  },
  {
    "semestre": "6° Semestre",
    "ramos": [
      {
        "id": "inferencia",
        "nombre": "Inferencia estadística",
        "prereqs": [
          "estadistica"
        ]
      },
      {
        "id": "costos",
        "nombre": "Costos y presupuestos",
        "prereqs": [
          "analisis_contable"
        ]
      },
      {
        "id": "pensamiento",
        "nombre": "Pensamiento sistémico",
        "prereqs": [
          "admin_empresas",
          "data_science"
        ]
      },
      {
        "id": "alf_aca_ii",
        "nombre": "Alfabetización académica II",
        "prereqs": [
          "alf_aca_i"
        ]
      },
      {
        "id": "micro_macro",
        "nombre": "Micro y macroeconomía",
        "prereqs": [
          "calc_int",
          "admin_empresas"
        ]
      },
      {
        "id": "idioma_iv",
        "nombre": "Idioma IV",
        "prereqs": [
          "idioma_iii"
        ]
      }
    ]
  },
  {
    "semestre": "7° Semestre",
    "ramos": [
      {
        "id": "procesos_ind",
        "nombre": "Procesos industriales",
        "prereqs": [
          "termo"
        ]
      },
      {
        "id": "gestion_talento",
        "nombre": "Gestión de talento en las organizaciones",
        "prereqs": [
          "pensamiento",
          "admin_empresas"
        ]
      },
      {
        "id": "modelamiento",
        "nombre": "Modelamiento",
        "prereqs": [
          "inferencia",
          "algebra_lin"
        ]
      },
      {
        "id": "sistemas_info",
        "nombre": "Sistemas de información y administración de datos",
        "prereqs": [
          "pensamiento",
          "data_science"
        ]
      },
      {
        "id": "economia_circular",
        "nombre": "Economía circular y sostenibilidad",
        "prereqs": [
          "analisis_materiales",
          "micro_macro"
        ]
      },
      {
        "id": "gestion_innovacion",
        "nombre": "Gestión de la innovación y emprendimiento",
        "prereqs": [
          "topicos_industrial",
          "analisis_materiales"
        ]
      }
    ]
  },
  {
    "semestre": "8° Semestre",
    "ramos": [
      {
        "id": "gestion_op_i",
        "nombre": "Gestión de operaciones I",
        "prereqs": [
          "modelamiento"
        ]
      },
      {
        "id": "estrategia_negocios",
        "nombre": "Análisis y estrategia de negocios",
        "prereqs": [
          "costos",
          "micro_macro"
        ]
      },
      {
        "id": "visual_datos",
        "nombre": "Visualización de datos e inteligencia de negocios",
        "prereqs": [
          "sistemas_info"
        ]
      },
      {
        "id": "marketing",
        "nombre": "Estrategia de marketing",
        "prereqs": [
          "gestion_innovacion"
        ]
      },
      {
        "id": "ing_economica",
        "nombre": "Ingeniería económica",
        "prereqs": [
          "costos",
          "micro_macro"
        ]
      },
      {
        "id": "proyecto_lic",
        "nombre": "Proyecto de licenciatura",
        "prereqs": [
          "procesos_ind",
          "gestion_talento",
          "modelamiento",
          "sistemas_info",
          "economia_circular",
          "gestion_innovacion"
        ]
      }
    ]
  },
  {
    "semestre": "9° Semestre",
    "ramos": [
      {
        "id": "inv_operaciones",
        "nombre": "Investigación de operaciones",
        "prereqs": [
          "modelamiento"
        ]
      },
      {
        "id": "gestion_op_ii",
        "nombre": "Gestión de operaciones II",
        "prereqs": [
          "gestion_op_i"
        ]
      },
      {
        "id": "direccion_estrategica",
        "nombre": "Dirección estratégica",
        "prereqs": [
          "estrategia_negocios"
        ]
      },
      {
        "id": "evaluacion_proyectos",
        "nombre": "Formulación y evaluación de proyectos",
        "prereqs": [
          "ing_economica",
          "economia_circular"
        ]
      },
      {
        "id": "simulacion",
        "nombre": "Simulación de procesos y sistemas",
        "prereqs": [
          "procesos_ind",
          "modelamiento"
        ]
      },
      {
        "id": "desarrollo_org",
        "nombre": "Desarrollo organizacional",
        "prereqs": [
          "gestion_talento",
          "estrategia_negocios"
        ]
      }
    ]
  },
  {
    "semestre": "10° Semestre",
    "ramos": [
      {
        "id": "gestion_riesgos",
        "nombre": "Gestión de riesgos",
        "prereqs": [
          "estrategia_negocios",
          "economia_circular"
        ]
      },
      {
        "id": "cadena_suministro",
        "nombre": "Gestión de la cadena de suministros",
        "prereqs": [
          "inv_operaciones",
          "gestion_op_ii"
        ]
      },
      {
        "id": "project_mgmt",
        "nombre": "Project management",
        "prereqs": [
          "direccion_estrategica",
          "evaluacion_proyectos"
        ]
      },
      {
        "id": "gestion_energetica",
        "nombre": "Gestión energética",
        "prereqs": [
          "economia_circular"
        ]
      },
      {
        "id": "electivo_i",
        "nombre": "Electivo profesional I",
        "prereqs": [
          "gestion_op_i",
          "estrategia_negocios",
          "visual_datos",
          "marketing",
          "ing_economica",
          "proyecto_lic"
        ]
      },
      {
        "id": "finanzas",
        "nombre": "Finanzas",
        "prereqs": [
          "ing_economica"
        ]
      },
      {
        "id": "comunicacion",
        "nombre": "Taller de comunicación efectiva",
        "prereqs": [
          "gestion_op_i",
          "estrategia_negocios",
          "visual_datos",
          "marketing",
          "ing_economica",
          "proyecto_lic"
        ]
      }
    ]
  },
  {
    "semestre": "11° Semestre",
    "ramos": [
      {
        "id": "proyecto_titulo",
        "nombre": "Proyecto de título",
        "prereqs": [
          "gestion_riesgos",
          "cadena_suministro",
          "project_mgmt",
          "gestion_energetica",
          "electivo_i",
          "finanzas",
          "comunicacion"
        ]
      },
      {
        "id": "electivo_ii",
        "nombre": "Electivo profesional II",
        "prereqs": [
          "gestion_op_i",
          "estrategia_negocios",
          "visual_datos",
          "marketing",
          "ing_economica",
          "proyecto_lic"
        ]
      },
      {
        "id": "practica_profesional",
        "nombre": "Práctica profesional",
        "prereqs": [
          "gestion_riesgos",
          "cadena_suministro",
          "project_mgmt",
          "gestion_energetica",
          "electivo_i",
          "finanzas",
          "comunicacion",
          "practica_basica"
        ]
      }
    ]
  }
];

const STORAGE_KEY = "estadoMallaUV";
const estados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estados));
}

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  data.forEach((sem) => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    divSem.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

      const bloqueado = ramo.prereqs?.some((req) => !estados[req]);

      if (bloqueado) {
        divRamo.classList.add("bloqueado");
      } else if (estados[ramo.id]) {
        divRamo.classList.add("aprobado");
      }

      divRamo.onclick = () => {
        if (bloqueado) return;
        estados[ramo.id] = !estados[ramo.id];
        guardarEstado();
        renderMalla();
      };

      divSem.appendChild(divRamo);
    });

    container.appendChild(divSem);
  });
}

renderMalla();

// Mostrar porcentaje de avance
const porcentajeDiv = document.createElement("div");
porcentajeDiv.style.marginTop = "20px";
porcentajeDiv.style.fontSize = "18px";
porcentajeDiv.style.fontWeight = "bold";
porcentajeDiv.style.color = "#003366";
document.body.insertBefore(porcentajeDiv, document.getElementById("malla"));

// Crear contenedor de barra de progreso
const barraContainer = document.createElement("div");
barraContainer.style.width = "80%";
barraContainer.style.margin = "10px auto 20px auto";
barraContainer.style.backgroundColor = "#d0dff2";
barraContainer.style.borderRadius = "8px";
barraContainer.style.height = "25px";
barraContainer.style.overflow = "hidden";

// Crear barra de avance
const barraProgreso = document.createElement("div");
barraProgreso.style.height = "100%";
barraProgreso.style.width = "0%";
barraProgreso.style.backgroundColor = "#4a90e2";
barraProgreso.style.transition = "width 0.3s ease";
barraProgreso.style.borderRadius = "8px";
barraContainer.appendChild(barraProgreso);

// Insertar debajo del título
const titulo = document.querySelector("h1");
titulo.insertAdjacentElement("afterend", barraContainer);

// Agregar mensaje motivacional al final (esperamos a que todo cargue)
window.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.createElement("p");
  mensaje.textContent = "Eres capaz de todo. Te amo mucho. 💙";
  mensaje.style.marginTop = "40px";
  mensaje.style.fontSize = "20px";
  mensaje.style.color = "#004080";
  mensaje.style.fontWeight = "bold";
  mensaje.style.textAlign = "center";
  document.body.appendChild(mensaje);
});

// Actualizar barra y porcentaje
function actualizarPorcentaje() {
  let total = 0;
  let aprobados = 0;

  data.forEach(sem => {
    sem.ramos.forEach(ramo => {
      total++;
      if (estados[ramo.id]) aprobados++;
    });
  });

  const porcentaje = total > 0 ? Math.round((aprobados / total) * 100) : 0;
  porcentajeDiv.textContent = `Avance: ${porcentaje}% (${aprobados} de ${total} ramos)`;
  barraProgreso.style.width = porcentaje + "%";
}

// Reemplazar renderMalla para incluir actualización
const originalRenderMalla = renderMalla;
renderMalla = function () {
  originalRenderMalla();
  actualizarPorcentaje();
};

renderMalla();

// Botón de reinicio
const botonReset = document.createElement("button");
botonReset.textContent = "Reiniciar malla";
botonReset.style.marginTop = "30px";
botonReset.style.padding = "10px 20px";
botonReset.style.backgroundColor = "#cc0000";
botonReset.style.color = "white";
botonReset.style.border = "none";
botonReset.style.borderRadius = "6px";
botonReset.style.cursor = "pointer";
botonReset.onclick = () => {
  if (confirm("¿Estás segura de que quieres reiniciar todo?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};
document.body.appendChild(botonReset);
