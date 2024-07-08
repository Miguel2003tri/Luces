document.addEventListener("DOMContentLoaded", function () {
  // Función para generar la tabla 5x5
  function generarTabla(size) {
    const container = document.getElementById('tabla-container');
    container.innerHTML = ''; // Limpiamos el contenedor

    const table = document.createElement('table');
    table.className = 'table-auto border-collapse border border-gray-400';

    for (let i = 0; i < size; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < size; j++) {
        const td = document.createElement('td');
        td.className = 'border border-gray-400 px-4 py-2';
        td.textContent = `${i + 1},${j + 1}`;
        td.style.backgroundColor = 'white';
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    container.appendChild(table);
  }

  // Función para pintar la tabla de arriba a abajo, fila por fila
  function pintarFilas() {
    const table = document.querySelector('table');
    const rows = table.rows;

    let delay = 0;

    // Pintar filas de arriba a abajo
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].cells.length; j++) {
        setTimeout(() => {
          rows[i].cells[j].style.backgroundColor = 'blue';
        }, delay);
        delay += 100; // Ajusta el tiempo de espera para cambiar la velocidad de la ola
      }
    }
  }

  // Función para pintar la tabla de abajo a arriba, columna por columna
  function pintarColumnas() {
    const table = document.querySelector('table');
    const rows = table.rows;

    let delay = 0;

    // Pintar columnas de abajo a arriba
    for (let j = 0; j < rows[0].cells.length; j++) {
      for (let i = rows.length - 1; i >= 0; i--) {
        setTimeout(() => {
          rows[i].cells[j].style.backgroundColor = 'green';
        }, delay);
        delay += 100; // Ajusta el tiempo de espera para cambiar la velocidad de la ola
      }
    }
  }

// Función para pintar la tabla en forma de ola diagonal
function pintarOlaDiagonal() {
  const table = document.querySelector('table');
  const rows = table.rows;

  // Pintar ola diagonal
  for (let step = 0; step < rows.length * 2 - 1; step++) {
    setTimeout(() => {
      for (let i = Math.min(step, rows.length - 1); i >= Math.max(0, step - rows.length + 1); i--) {
        const j = step - i;
        if (j < rows[i].cells.length) {
          rows[i].cells[j].style.backgroundColor = 'red'; // Cambia el color según tu preferencia
        }
      }
    }, step * 100); // Ajusta el tiempo de espera para cambiar la velocidad de la ola
  }
}

  // Generar la tabla al cargar la página
  generarTabla(50); // Puedes ajustar el tamaño de la tabla aquí

  // Agregar evento de clic al botón para pintar filas
  document.getElementById('pintar-filas-btn').addEventListener('click', pintarFilas);

  // Agregar evento de clic al botón para pintar columnas
  document.getElementById('pintar-columnas-btn').addEventListener('click', pintarColumnas);

  // Agregar evento de clic al botón para pintar ola diagonal
  document.getElementById('pintar-ola-btn').addEventListener('click', pintarOlaDiagonal);
});
