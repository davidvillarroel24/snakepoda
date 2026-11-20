import type { Presentacion } from './presentacion'

// Presentación del informe de la guía UT5 y UT6 (infraestructura cloud, DNS y base de datos).
// Para cambiar un texto o un integrante, edítalo aquí.

export const GUIA_REDES: Presentacion = {
  id: 'redes',
  titulo: 'Presentación de la guía UT5 y UT6',
  ayuda: 'Informe de infraestructura cloud, DNS y base de datos. Usa las flechas del teclado o los botones.',
  portada: {
    etiqueta: 'Práctica grupal UT5 y UT6',
    titulo: 'SNAKE PODA',
    subtitulo: 'Despliegue de infraestructura cloud, DNS y bases de datos',
    detalle: 'Equipo Serpiente · Redes de Computadoras II · Instituto Técnico TECBA · Docente: Ing. José Luis Yacelly R.',
    integrantes: [
      'Jesus Villarroel · Líder y DevOps',
      'Joshua Terceros · Backend y DBA',
      'Wili Chambi · Frontend',
      'Nataly Mallea · QA y Tester',
      'Luis Sejas · DNS y Redes',
    ],
    pie: 'snakepoda.modaldevj.com',
  },
  diapositivas: [
    {
      seccion: '1 · Definición del sistema',
      titulo: 'El problema y la solución',
      bloques: [
        {
          tipo: 'cita',
          texto: 'Problema central: alto riesgo de accidentes y dificultad técnica para podar árboles de gran altura o con ramas de difícil acceso.',
        },
        {
          tipo: 'tarjetas',
          items: [
            { titulo: 'Efectos', texto: 'Accidentes laborales graves, servicio de poda caro y lento, y podas deficientes y poco estéticas.' },
            { titulo: 'Causas', texto: 'Trabajo manual en altura, herramientas que no se adaptan a ramas difíciles y falta de tecnología local y de medios para mostrarla.' },
            { titulo: 'Solución', texto: 'SNAKE PODA: plataforma web con simulación 3D del robot serpiente y reserva del servicio de poda.' },
          ],
        },
      ],
    },
    {
      seccion: '2 · Objetivos',
      titulo: 'Objetivos del proyecto',
      bloques: [
        {
          tipo: 'cita',
          texto: 'General: desarrollar y desplegar en la nube, bajo el dominio snakepoda.modaldevj.com, la plataforma SNAKE PODA, que demuestre en 3D el robot podador y permita agendar el servicio.',
        },
        {
          tipo: 'tabla',
          cabecera: ['Objetivo', 'Responde a', 'Qué se logra'],
          filas: [
            ['Específico 1', 'Causa 1: trabajo manual en altura', 'Simular en 3D el ciclo completo del robot, controlado desde tierra, sin que el operario suba al árbol.'],
            ['Específico 2', 'Causa 2: herramientas que no se adaptan', 'Acceso por roles y agenda de reservas con API REST en Vercel y PostgreSQL en Neon.'],
            ['Específico 3', 'Causa 3: falta de medios digitales', 'Publicar con DNS, proxy, SSL/TLS Full (strict) y WAF de Cloudflare.'],
          ],
        },
      ],
    },
    {
      seccion: '3 · Alcance técnico',
      titulo: 'Qué conceptos de UT5 y UT6 aplicamos',
      bloques: [
        {
          tipo: 'tabla',
          cabecera: ['Unidad', 'Concepto', 'Aplicación en SNAKE PODA'],
          filas: [
            ['UT5', 'DNS', 'Zona modaldevj.com en Cloudflare con CNAME para el frontend y la API'],
            ['UT5', 'Proxies', 'Proxy inverso y CDN de Cloudflare: oculta el origen y guarda en caché los estáticos'],
            ['UT5', 'Balanceo de carga', 'Red anycast de Cloudflare y escalado automático de Vercel'],
            ['UT6', 'Servidores', 'API Node.js + Express serverless en Vercel; frontend en un Worker de Cloudflare'],
            ['UT6', 'Contenedores', 'Docker Compose local (API + PostgreSQL) que replica producción'],
            ['UT6', 'Auditoría', 'Tabla auditoria, logs de Vercel y eventos del WAF'],
            ['UT6', 'Integración cloud', 'Cloudflare, Vercel y Neon unidos con variables de entorno'],
          ],
        },
      ],
    },
    {
      seccion: '4 · Equipo',
      titulo: 'Roles y responsabilidades',
      bloques: [
        {
          tipo: 'tabla',
          cabecera: ['Integrante', 'Rol', 'Responsabilidades'],
          filas: [
            ['Jesus Villarroel', 'Líder de proyecto y DevOps', 'Repositorio, CI/CD, despliegues, tablero en ClickUp y coordinación'],
            ['Joshua Terceros', 'Backend y DBA', 'dbdiagram.io, DDL en Neon, API REST y variables de entorno'],
            ['Wili Chambi', 'Frontend', 'Simulación 3D, acceso, reservas, panel del administrador y despliegue'],
            ['Nataly Mallea', 'QA y Tester', 'Pruebas de endpoints, validación de la base de datos y verificación cruzada'],
            ['Luis Sejas', 'Administrador DNS y Redes', 'DNS, proxy, SSL/TLS Full (strict), WAF y limitación de tasa'],
          ],
        },
        { tipo: 'lista', items: ['Repositorio: github.com/wilichambisis24-png/snakepoda', 'Gestión de tareas: tablero en ClickUp'] },
      ],
    },
    {
      seccion: '5 · Arquitectura',
      titulo: 'Topología, flujo y API REST',
      bloques: [
        {
          tipo: 'tarjetas',
          items: [
            { titulo: 'Cliente', texto: 'Navegador con WebGL · HTTPS puerto 443' },
            { titulo: 'Cloudflare', texto: 'DNS, proxy inverso, CDN, WAF y SSL/TLS Full (strict)' },
            { titulo: 'Frontend', texto: 'Worker de Cloudflare · snakepoda.modaldevj.com' },
            { titulo: 'Backend', texto: 'Vercel serverless · api-snakepoda.modaldevj.com' },
            { titulo: 'Base de datos', texto: 'Neon PostgreSQL · TCP 5432 con SSL' },
          ],
        },
        {
          tipo: 'lista',
          items: [
            'Flujo: Cloudflare resuelve el DNS y entrega el frontend; este llama a la API con un token JWT; la API valida el origen (CORS), consulta Neon con DATABASE_URL y deja registro en auditoria.',
            'Endpoints: registro, login y me; disponibilidad; listar y crear reservas; cancelar (dueño o admin) y cambiar estado (admin).',
            'Errores con código HTTP y mensaje en español (400, 401, 403, 404 y 409). Horarios de 08 a 16 h, de lunes a sábado.',
          ],
        },
      ],
    },
    {
      seccion: '6 · Base de datos',
      titulo: 'Modelo relacional en Neon',
      bloques: [
        {
          tipo: 'tabla',
          cabecera: ['Relación', 'Cardinalidad', 'Llave foránea'],
          filas: [
            ['roles → usuarios', '1 : N', 'usuarios.rol_id → roles.id'],
            ['usuarios → reservas', '1 : N', 'reservas.cliente_id → usuarios.id'],
            ['usuarios → auditoria', '1 : N (opcional)', 'auditoria.usuario_id → usuarios.id'],
          ],
        },
        {
          tipo: 'lista',
          items: [
            'Tablas: roles, usuarios, reservas y auditoria. Modelo en DBML (dbdiagram.io) y DDL ejecutado con Run SQL en Neon.',
            'Reglas en la base: 1–50 árboles, altura de 2 a 40 m y estados pendiente, confirmada, completada o cancelada.',
            'Un índice único parcial sobre (fecha, hora) donde el estado no es «cancelada» impide dos reservas activas en el mismo horario.',
            'La cadena de conexión se guarda como DATABASE_URL en Vercel, nunca en el repositorio.',
          ],
        },
      ],
    },
    {
      seccion: '7 · DNS y seguridad',
      titulo: 'Conectividad, seguridad y estado actual',
      bloques: [
        {
          tipo: 'tabla',
          cabecera: ['Tipo', 'Nombre', 'Destino'],
          filas: [
            ['CNAME', 'snakepoda', 'Worker de Cloudflare (proxy activado)'],
            ['CNAME', 'api-snakepoda', 'cname.vercel-dns.com (proxy activado)'],
            ['TXT', '_vercel', 'Verificación del dominio en Vercel'],
          ],
        },
        {
          tipo: 'tarjetas',
          items: [
            { titulo: 'SSL/TLS', texto: 'Full (strict), Always Use HTTPS, TLS 1.2 mínimo y HSTS de 6 meses.' },
            { titulo: 'Protección', texto: 'WAF con reglas administradas, Bot Fight Mode y límite de 20 solicitudes cada 10 s por IP en la API.' },
            { titulo: 'Variables', texto: 'DATABASE_URL, JWT_SECRET y CORS_ORIGIN en Vercel; VITE_API_URL en Cloudflare.' },
          ],
        },
        {
          tipo: 'lista',
          titulo: 'Estado actual',
          items: [
            'Hecho: frontend completo y publicado en https://snakepoda.modaldevj.com (modo simulado).',
            'Pendiente: API en Vercel, base de datos en Neon, conexión con VITE_API_URL, pruebas de QA y reglas de WAF.',
          ],
        },
      ],
    },
  ],
}
