// Datos del grupo que se muestran en la página de inicio.
// Para completar un integrante, escribe su nombre en "nombre" (si queda vacío, se muestra "Por confirmar").

export const GRUPO = {
  nombre: 'Equipo Serpiente',
  institucion: 'Instituto Técnico TECBA',
  carrera: 'Sistemas Informáticos',
  materia: 'Redes de Computadoras II',
  practica: 'Práctica grupal UT5 y UT6',
  docente: 'Ing. José Luis Yacelly R.',
  dominio: 'snakepoda.modaldevj.com',
}

export type IconoRol = 'lider' | 'servidor' | 'pantalla' | 'pruebas' | 'red'

export interface Integrante {
  nombre: string
  rol: string
  icono: IconoRol
  tareas: string[]
}

export const INTEGRANTES: Integrante[] = [
  {
    nombre: 'Jesus Villarroel',
    rol: 'Líder de proyecto y DevOps',
    icono: 'lider',
    tareas: ['Repositorio en GitHub y tablero en ClickUp', 'CI/CD con GitHub Actions', 'Despliegue en Vercel y Cloudflare'],
  },
  {
    nombre: 'Joshua Terceros',
    rol: 'Backend y base de datos',
    icono: 'servidor',
    tareas: ['API REST con Node.js y Express', 'Modelo en dbdiagram.io', 'PostgreSQL en Neon'],
  },
  {
    nombre: 'Wili Chambi',
    rol: 'Frontend',
    icono: 'pantalla',
    tareas: ['Simulación 3D del robot', 'Acceso y reservas', 'Conexión con la API'],
  },
  {
    nombre: 'Nataly Mallea',
    rol: 'QA y pruebas',
    icono: 'pruebas',
    tareas: ['Pruebas de la API con Postman', 'Validación de la base de datos', 'Revisión de la simulación'],
  },
  {
    nombre: 'Luis Sejas',
    rol: 'DNS y redes',
    icono: 'red',
    tareas: ['Dominio y registros DNS', 'Proxy, SSL/TLS y WAF de Cloudflare', 'Limitación de tasa'],
  },
]

/** Recorrido de una visita a la plataforma, de la guía UT5/UT6 (sección 4). */
export const ARQUITECTURA = [
  { capa: 'Cliente', nombre: 'Navegador', detalle: 'Computadora o celular con WebGL', dato: 'HTTPS · 443' },
  { capa: 'DNS y borde', nombre: 'Cloudflare', detalle: 'DNS, proxy inverso, CDN, WAF y SSL/TLS', dato: 'snakepoda.modaldevj.com' },
  { capa: 'Servidor', nombre: 'Vercel', detalle: 'API REST con Node.js y Express', dato: 'api-snakepoda.modaldevj.com' },
  { capa: 'Base de datos', nombre: 'Neon', detalle: 'PostgreSQL serverless', dato: 'TCP 5432 · SSL' },
] as const

/** El proyecto resumido en tres ideas. */
export const PROYECTO = [
  {
    titulo: 'El problema',
    texto: 'Podar árboles altos obliga a trepar con escaleras y motosierras: caídas, cortes y contacto con cables.',
  },
  {
    titulo: 'Nuestra solución',
    texto: 'Un robot serpiente controlado desde el suelo que trepa, se enrosca en la rama y la corta por presión.',
  },
  {
    titulo: 'La plataforma',
    texto: 'Una web que lo demuestra en 3D y permite a los clientes agendar el servicio de poda.',
  },
] as const
