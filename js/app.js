// TaskFlow — Navegacion y vistas originales.

const nav = [
  ['dashboard', '⌂', 'Dashboard'],
  ['proyectos', '▣', 'Proyectos'],
  ['tareas', '☑', 'Mis tareas'],
  ['calendario', '▦', 'Calendario'],
  ['equipo', '♧', 'Equipo']
];

const tasks = [
  ['Optimizar tabla Servicios y Filtros', 'Por hacer', 'Media', 'Ana Gómez', '14 nov. 2026'],
  ['Landing Page Revamp', 'Por hacer', 'Baja', 'Carlos Pérez', '16 nov. 2026'],
  ['Home Screen UI/UX', 'Por hacer', 'Media', 'Laura Martínez', '18 nov. 2026'],
  ['Implementar API de Proyectos', 'En curso', 'Alta', 'Sofía Torres', '12 nov. 2026'],
  ['Desarrollo de tablero Kanban', 'En curso', 'Media', 'Diego López', '15 nov. 2026'],
  ['Integración con base de datos', 'En curso', 'Alta', 'Valentina Ruiz', '17 nov. 2026'],
  ['Documentación Swagger', 'En revisión', 'Media', 'Laura Martínez', '13 nov. 2026'],
  ['Diseño de componentes', 'En revisión', 'Baja', 'Andrés Castaño', '16 nov. 2026'],
  ['Configuración del entorno', 'Completadas', 'Baja', 'Carlos Pérez', '10 nov. 2026'],
  ['Estructura del proyecto', 'Completadas', 'Media', 'Ana Gómez', '11 nov. 2026']
];

// Navegacion y estructura general.
function go(name) {
  location.hash = name;
  render();
  window.scrollTo(0, 0);
}

function header() {
  return `
    <aside class="side">
      <div class="brand">
        <span class="brandicon">◈</span>
        TaskFlow
      </div>
      <small>Principal</small>
      ${nav.map(([id, ico, label]) => `
        <button class="nav ${page() === id ? 'active' : ''}" onclick="go('${id}')">
          <span class="ico">${ico}</span>
          ${label}
        </button>
      `).join('')}
      <small>Configuración</small>
      <button class="nav ${page() === 'perfil' ? 'active' : ''}" onclick="go('perfil')">
        <span class="ico">♙</span>
        Perfil
      </button>
      <div class="bottom">
        <button class="nav" onclick="go('login')">
          <span class="ico">⇥</span>
          Cerrar sesión
        </button>
      </div>
    </aside>
    <div class="main">
      <header class="top">
        <input placeholder="⌕  Buscar tareas, proyectos..." aria-label="Buscar">
        <div class="identity">
          <span style="font-size:20px">♧</span>
          <span class="avatar">RB</span>
          <div>
            <strong>Rodrigo Bonilla</strong>
            <br>
            Desarrollador
          </div>
        </div>
      </header>
      <main class="content">
  `;
}

function page() {
  return (location.hash || '#dashboard').slice(1).split('?')[0];
}

function head(title, desc, button = '') {
  return `
    <div class="pagehead">
      <div>
        <h1>${title}</h1>
        <p class="sub">${desc}</p>
      </div>
      ${button}
    </div>
  `;
}

function taskcard(task) {
  return `
    <article class="task" onclick="go('detalle')">
      <span class="tag ${task[2] === 'Alta' ? 'red' : task[2] === 'Baja' ? 'green' : ''}">
        ● ${task[2]}
      </span>
      <strong>${task[0]}</strong>
      <p>Consultar el detalle y dar seguimiento a esta actividad del proyecto.</p>
      <div class="taskfoot">
        <span>▦ ${task[4]}</span>
        <span>● ${task[3]}</span>
      </div>
    </article>
  `;
}

// Vistas principales
function dashboard() {
  const stats = [
    ['Proyectos activos', '10', '+2 este mes'],
    ['Tareas pendientes', '18', 'En seguimiento'],
    ['Tareas completadas', '32', '+8 esta semana'],
    ['Avance general', '72%', 'Buen progreso']
  ];

  const chartValues = [52, 68, 61, 77, 63, 89, 72, 81, 61, 80, 73, 92];

  const recentActivity = [
    ['Sofía Torres', 'Actualizó la API de Proyectos'],
    ['Ana Gómez', 'Creó una nueva tarea'],
    ['Carlos Pérez', 'Completó configuración'],
    ['Laura Martínez', 'Revisó documentación']
  ];

  return `
    ${head(
      'Dashboard',
      'Resumen general de tus proyectos y actividades.',
      `<button class="btn" onclick="go('nueva')">+ Nueva tarea</button>`
    )}
    <div class="statgrid">
      ${stats.map(([label, metric, trend]) => `
        <div class="stat">
          <span class="lbl">${label}</span>
          <div class="metric">${metric}</div>
          <span class="trend">${trend}</span>
        </div>
      `).join('')}
    </div>
    <div class="layout2">
      <section class="panel">
        <h2>Actividad de proyectos</h2>
        <p class="sub">Progreso de actividades durante el año</p>
        <div class="chart">
          ${chartValues.map(height => `
            <div class="chartbar" style="height:${height}%"></div>
          `).join('')}
        </div>
        <p class="footnote">Ene　 Feb　 Mar　 Abr　 May　 Jun　 Jul　 Ago　 Sep　 Oct　 Nov　 Dic</p>
      </section>
      <section class="panel">
        <h2>Actividad reciente</h2>
        ${recentActivity.map(([name, activity]) => `
          <div class="feedrow">
            <div>
              <strong>${name}</strong>
              <br>
              <span>${activity}</span>
            </div>
            <span>Hoy</span>
          </div>
        `).join('')}
      </section>
    </div>
    <section class="panel" style="margin-top:20px">
      <h2>Próximas tareas</h2>
      ${tasks.slice(0, 3).map(task => `
        <div class="listrow">
          <div>
            <strong>${task[0]}</strong>
            <br>
            <span class="sub">${task[3]}</span>
          </div>
          <button class="btn secondary" onclick="go('detalle')">Ver detalle</button>
        </div>
      `).join('')}
    </section>
  `;
}

function tareas() {
  const lanes = [
    ['Por hacer', '#5d7ba1'],
    ['En curso', '#30a4ee'],
    ['En revisión', '#ffca2c'],
    ['Completadas', '#21bd8a']
  ];

  return `
    ${head(
      'Mis Tareas',
      'Organiza y da seguimiento a tus tareas.',
      `<button class="btn" onclick="go('nueva')">+ Nueva tarea</button>`
    )}
    <div class="toolrow">
      <div class="tabs">
        <button class="tab active">▦ Tablero</button>
        <button class="tab" onclick="go('tareaslista')">☷ Lista</button>
        <button class="tab" onclick="go('calendario')">▤ Cronograma</button>
      </div>
      <input class="search" placeholder="⌕ Buscar tareas...">
    </div>
    <div class="boards">
      ${lanes.map(([name, color]) => `
        <section class="lane">
          <div class="lanehead">
            <span class="dot" style="background:${color}"></span>
            ${name}
            <span class="count">${tasks.filter(task => task[1] === name).length}</span>
          </div>
          ${tasks.filter(task => task[1] === name).map(taskcard).join('')}
        </section>
      `).join('')}
    </div>
  `;
}

function tareaslista() {
  return `
    ${head(
      'Mis Tareas · Lista',
      'Vista alternativa de las tareas.',
      `<button class="btn" onclick="go('nueva')">+ Nueva tarea</button>`
    )}
    <div class="panel">
      <div class="toolrow">
        <button class="btn secondary" onclick="go('tareas')">← Volver al tablero</button>
      </div>
      ${tasks.map(task => `
        <div class="listrow">
          <div>
            <strong>${task[0]}</strong>
            <p class="sub">${task[1]} · ${task[3]} · ${task[4]}</p>
          </div>
          <button class="btn secondary" onclick="go('detalle')">Consultar</button>
        </div>
      `).join('')}
    </div>
  `;
}

function proyectos() {
  const projects = [
    ['Portal de Servicios', '75', 'Diseño y desarrollo de portal de autogestión'],
    ['Aplicación TaskFlow', '60', 'Gestión de tareas y colaboración'],
    ['Sitio Web Corporativo', '90', 'Modernización de la experiencia de usuario'],
    ['API de Proyectos', '45', 'Servicios para operaciones CRUD'],
    ['Módulo de Reportes', '82', 'Visualización de resultados'],
    ['Landing de Producto', '30', 'Diseño de página de aterrizaje']
  ];

  return `
    ${head(
      'Proyectos',
      'Consulta los proyectos y su avance.',
      `<button class="btn" onclick="go('nueva')">+ Nueva tarea</button>`
    )}
    <div class="projects">
      ${projects.map(([name, progress, description]) => `
        <article class="project" onclick="go('detalle')">
          <span class="tag">Activo</span>
          <h2>${name}</h2>
          <p class="sub" style="min-height:50px">${description}</p>
          <p><strong>${progress}% completado</strong></p>
          <div class="bar">
            <b style="width:${progress}%"></b>
          </div>
          <p class="footnote">Abrir proyecto →</p>
        </article>
      `).join('')}
    </div>
  `;
}

function calendario() {
  const days = Array.from({ length: 35 }, (_, index) => index + 1);

  return `
    ${head(
      'Calendario',
      'Consulta fechas y actividades programadas.',
      `<button class="btn" onclick="go('nueva')">+ Nueva tarea</button>`
    )}
    <div class="panel">
      <h2>Noviembre de 2026</h2>
      <div class="calendar">
        ${['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => `
          <div style="font-weight:700;text-align:center;color:#65809d;padding:9px">${day}</div>
        `).join('')}
        ${days.map(day => `
          <div class="day">
            <strong>${day <= 30 ? day : ''}</strong>
            ${day === 12 ? '<div class="pill" onclick="go(\'detalle\')">API Proyectos</div>' : ''}
            ${day === 15 ? '<div class="pill" onclick="go(\'detalle\')">Tablero Kanban</div>' : ''}
            ${day === 18 ? '<div class="pill" onclick="go(\'detalle\')">Home UI/UX</div>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function equipo() {
  const members = [
    ['AG', 'Ana Gómez', 'Diseño UX/UI'],
    ['ST', 'Sofía Torres', 'Backend'],
    ['CP', 'Carlos Pérez', 'Frontend'],
    ['LM', 'Laura Martínez', 'QA'],
    ['DL', 'Diego López', 'Frontend'],
    ['VR', 'Valentina Ruiz', 'Base de datos'],
    ['AC', 'Andrés Castaño', 'Diseño visual'],
    ['RB', 'Rodrigo Bonilla', 'Desarrollador']
  ];

  return `
    ${head('Equipo', 'Personas que colaboran en los proyectos.')}
    <div class="teams">
      ${members.map(([initials, name, role]) => `
        <div class="teamcard">
          <div class="round">${initials}</div>
          <strong>${name}</strong>
          <p class="sub">${role}</p>
          <p><span class="tag">Miembro activo</span></p>
        </div>
      `).join('')}
    </div>
  `;
}

// Formularios y pantallas secundarias
function nueva() {
  return `
    ${head(
      'Nueva tarea',
      'Formulario de creación conceptual; no almacena información.',
      `<button class="btn secondary" onclick="go('tareas')">← Volver</button>`
    )}
    <div class="form">
      <div class="field">
        <label>Nombre de la tarea</label>
        <input placeholder="Ej. Diseñar pantalla de inicio">
      </div>
      <div class="field">
        <label>Descripción</label>
        <textarea placeholder="Describe el objetivo de la tarea"></textarea>
      </div>
      <div class="two">
        <div class="field">
          <label>Proyecto</label>
          <select>
            <option>Aplicación TaskFlow</option>
            <option>Portal de Servicios</option>
          </select>
        </div>
        <div class="field">
          <label>Prioridad</label>
          <select>
            <option>Media</option>
            <option>Alta</option>
            <option>Baja</option>
          </select>
        </div>
      </div>
      <div class="two">
        <div class="field">
          <label>Responsable</label>
          <select>
            <option>Ana Gómez</option>
            <option>Sofía Torres</option>
          </select>
        </div>
        <div class="field">
          <label>Fecha de entrega</label>
          <input type="date" value="2026-11-18">
        </div>
      </div>
      <div class="notice">
        Prototipo de bajo nivel: «Guardar» muestra una pantalla de confirmación sin registrar datos reales.
      </div>
      <button class="btn" onclick="go('confirmacion')">Guardar tarea</button>
      <button class="btn secondary" onclick="go('tareas')">Cancelar</button>
    </div>
  `;
}

function detalle() {
  return `
    ${head(
      'Detalle de tarea',
      'Visualización informativa de una actividad.',
      `<button class="btn secondary" onclick="go('tareas')">← Volver a tareas</button>`
    )}
    <div class="detail">
      <span class="tag red">Prioridad alta</span>
      <h2>Implementar API de Proyectos</h2>
      <p>
        Crear los endpoints para la gestión de proyectos (CRUD), revisar las validaciones
        y documentar el comportamiento esperado de la API REST.
      </p>
      <div class="listrow">
        <strong>Estado</strong>
        <span class="tag">En curso</span>
      </div>
      <div class="listrow">
        <strong>Responsable</strong>
        <span>Sofía Torres</span>
      </div>
      <div class="listrow">
        <strong>Fecha de entrega</strong>
        <span>12 de noviembre de 2026</span>
      </div>
      <div class="listrow">
        <strong>Proyecto</strong>
        <span>Aplicación TaskFlow</span>
      </div>
      <div style="margin-top:22px">
        <button class="btn" onclick="go('tareas')">Volver al tablero</button>
      </div>
    </div>
  `;
}

function perfil() {
  return `
    ${head('Mi perfil', 'Datos ilustrativos del usuario.')}
    <div class="detail">
      <div class="round" style="margin-left:0">RB</div>
      <h2>Rodrigo Bonilla</h2>
      <p>Rol: Desarrollador</p>
      <p>Preferencia: gestión sencilla y visual de proyectos.</p>
      <button class="btn secondary" onclick="go('dashboard')">Volver al inicio</button>
    </div>
  `;
}

function confirmacion() {
  return `
    ${head(
      'Tarea creada · Simulación',
      'Demostración de navegación sin persistencia de datos.'
    )}
    <div class="detail">
      <h2>✓ Acción simulada correctamente</h2>
      <p>
        En un producto real, la tarea se almacenaría en la base de datos.
        Este prototipo académico únicamente demuestra el flujo de interacción.
      </p>
      <button class="btn" onclick="go('tareas')">Ir a Mis tareas</button>
    </div>
  `;
}

function login() {
  return `
    <div class="loginpage">
      <div class="loginbox">
        <div class="brand" style="color:#17395e;border:0;padding:0">
          <span class="brandicon">◈</span>
          TaskFlow
        </div>
        <h1>Bienvenido de nuevo</h1>
        <p>Accede al espacio de trabajo de tu equipo.</p>
        <label>Correo electrónico</label>
        <input placeholder="usuario@ejemplo.com">
        <label>Contraseña</label>
        <input type="password" placeholder="••••••••">
        <button class="btn" onclick="go('dashboard')">Iniciar sesión</button>
        <p class="hint">
          Prototipo académico: el botón permite acceder sin autenticación real.
        </p>
      </div>
    </div>
  `;
}

// Renderizado de la aplicación
function render() {
  const currentPage = page();
  const views = {
    dashboard,
    tareas,
    tareaslista,
    proyectos,
    calendario,
    equipo,
    nueva,
    detalle,
    perfil,
    confirmacion,
    login
  };

  document.getElementById('app').innerHTML =
    currentPage === 'login'
      ? login()
      : `<div class="shell">${header()}${(views[currentPage] || dashboard)()}</main></div></div>`;

  document.title = 'TaskFlow · ' + currentPage;
}

window.addEventListener('hashchange', render);
render();
