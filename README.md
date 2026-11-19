# TaskFlow — Electiva I: Diseño de Aplicaciones Web I

Versión académica de TaskFlow organizada en **HTML5, CSS3 y JavaScript**. Este repositorio contiene el prototipo académico de TaskFlow. Se incorpora ajustes de diseño y navegación basados en Figma, conservando HTML, CSS y JavaScript puro.

## Estructura

```text
taskflow/
├── index.html         # Estructura principal y vínculo a recursos
├── css/
│   └── styles.css     # Estilos, diseño responsivo y colores
├── js/
│   └── app.js         # Datos ilustrativos, vistas y navegación
└── README.md
```

## Ejecutar localmente

1. Abre la carpeta `taskflow` en Visual Studio Code.
2. Abre `index.html` en un navegador (doble clic) o utiliza la extensión **Live Server**.
3. Navega por el menú lateral. La página inicial es `#dashboard`. Puedes abrir `#login` para ver el inicio de sesión.

**No requiere** Node.js, `npm install`, backend ni base de datos.

## Alcance actual

- Pantallas de Dashboard, Proyectos, Mis tareas (tablero y lista), Calendario, Equipo, Mensajes, Archivos, detalle de tarea, perfil, confirmación e inicio de sesión. El formulario de Nueva tarea se muestra en una ventana modal.
- Navegación de prueba mediante el hash de la URL (`#tareas`, `#calendario`, etc.).
- Las tareas y proyectos son **datos ilustrativos**. El botón «Guardar tarea» solo navega a una confirmación; aún no hay persistencia.
- La búsqueda y el inicio de sesión son demostrativos; no validan ni filtran realmente. El filtro de prioridad sí cambia las tarjetas mostradas, sin persistencia.

## Etapa 1 — Alineación visual con Figma

- Se reemplazaron símbolos del menú por iconos SVG.
- Se añadieron vistas de **Mensajes** y **Archivos**.
- La vista **Mis tareas** incluye las cuatro pestañas de Figma y un control de filtros por prioridad.
- La vista **Lista** ahora presenta una tabla con columnas de estado, prioridad y responsable.
- La creación de tareas se muestra en una **modal**, sin guardar datos todavía.
- Se armonizaron los nombres de los proyectos ilustrativos con el diseño.
- Se corrigió la disposición del calendario de noviembre de 2026.

**Pendiente para la etapa funcional:** búsquedas, creación y persistencia de tareas, mensajes reales, archivos adjuntos.

Funcionalidades
- Tablero de tareas por estado, con menú "…" para mover tareas de columna.
- Crear, ver, cambiar de estado y eliminar tareas (se guardan en localStorage).
- Búsqueda por título, estado, prioridad o responsable, y filtro por prioridad.
- Dashboard con métricas, gráfica semanal y dona de estados.
- Calendario con tareas por día y agenda del día.
- Pantalla de Ajustes para restablecer los datos de ejemplo.
