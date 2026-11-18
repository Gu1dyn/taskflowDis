# TaskFlow — Electiva I: Diseño de Aplicaciones Web I

Versión académica de TaskFlow organizada en **HTML5, CSS3 y JavaScript**. Este proyecto se separó del archivo `index.html` original sin modificar las pantallas ni sus interacciones.

## Estructura

```text
TaskFlow_Web_Separado/
├── index.html         # Estructura principal y vínculo a recursos
├── css/
│   └── styles.css     # Estilos, diseño responsivo y colores
├── js/
│   └── app.js         # Datos ilustrativos, vistas y navegación
└── README.md
```

## Ejecutar localmente

1. Abre la carpeta `TaskFlow_Web_Separado` en Visual Studio Code.
2. Abre `index.html` en un navegador (doble clic) o utiliza la extensión **Live Server**.
3. Navega por el menú lateral. La página inicial es `#dashboard`. Puedes abrir `#login` para ver el inicio de sesión.

**No requiere** Node.js, `npm install`, backend ni base de datos.

## Alcance actual

- Pantallas de Dashboard, Proyectos, Mis tareas (tablero y lista), Calendario, Equipo, Nueva tarea, Detalle, Perfil, Confirmación e Inicio de sesión.
- Navegación de prueba mediante el hash de la URL (`#tareas`, `#calendario`, etc.).
- Las tareas y proyectos son **datos ilustrativos**. El botón «Guardar tarea» solo navega a una confirmación; aún no hay persistencia.
- La búsqueda y el inicio de sesión son demostrativos; no validan ni filtran realmente.

## Para continuar con la actividad 4

1. Implementar creación/consulta/búsqueda funcional de tareas, si se desea un mayor nivel de funcionalidad.
2. Agregar los elementos de contenido pedidos por la rúbrica (información, tablas, listas, imágenes y video) donde aporten valor.
3. Publicar el sitio en un hosting gratuito y probar el enlace público.
4. Incluir el video demostrativo y entregar su URL.

## Commit sugerido

```bash
git add index.html css/styles.css js/app.js README.md
git commit -m "refactor: separar estructura, estilos y lógica de TaskFlow"
git push origin main
```

Ajusta la rama en el último comando según el nombre de la rama activa. Antes de subir, comprueba que el repositorio corresponda **a este frontend académico**, no al repositorio del backend de otra asignatura.
