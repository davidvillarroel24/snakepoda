// Contenido de la presentación del Plan de Negocio (sección "Presentación").
// Para cambiar un texto, edítalo aquí: la página no necesita tocarse.

export const PLAN = {
  titulo: 'Plan de Negocio',
  producto: 'Sistema Modular de Poda Trepadora «Serpiente»',
  asignatura: 'Emprendimiento Productivo',
  carrera: 'TS. Sistemas Informáticos',
  lugar: 'Cochabamba, Bolivia · noviembre de 2026',
  integrantes: ['David Jesus Villarroel', 'Luis Zurita', 'Katerine Pinto', 'Luis Gerardo Sejas'],
}

export type Bloque =
  | { tipo: 'tarjetas'; items: { titulo: string; texto: string }[] }
  | { tipo: 'lista'; titulo?: string; items: string[] }
  | { tipo: 'tabla'; titulo?: string; cabecera: string[]; filas: string[][] }
  | { tipo: 'cita'; texto: string }

export interface Diapositiva {
  seccion: string
  titulo: string
  bloques: Bloque[]
}

export const DIAPOSITIVAS: Diapositiva[] = [
  {
    seccion: '1 · Resumen ejecutivo',
    titulo: 'Poda segura desde el suelo',
    bloques: [
      {
        tipo: 'cita',
        texto: 'Podar árboles altos sigue exigiendo que una persona suba, con riesgo de caídas. «Serpiente» es un equipo trepador modular que poda desde el suelo.',
      },
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Producto', texto: 'Equipo mecánico trepador con corte por cable y control remoto; servicio de poda por árbol.' },
          { titulo: 'Público objetivo', texto: 'Municipios, agricultores, empresas de áreas verdes y podadores independientes.' },
          { titulo: 'Ventajas', texto: 'Seguridad, modularidad, bajo consumo y sin competidor directo equivalente identificado en Bolivia.' },
          { titulo: 'Ingresos', texto: 'Servicio de poda por árbol; alquiler y venta del equipo como líneas adicionales.' },
        ],
      },
    ],
  },
  {
    seccion: '2 · El emprendimiento',
    titulo: 'Quiénes somos y hacia dónde vamos',
    bloques: [
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Misión', texto: 'Hacer la poda en altura segura, rápida y accesible para instituciones y productores bolivianos, con un equipo trepador que corta desde el suelo.' },
          { titulo: 'Visión', texto: 'Ser la primera solución boliviana de poda trepadora modular, presente en varias ciudades con venta y alquiler de equipos.' },
          { titulo: 'Valores', texto: 'Seguridad, innovación local, calidad, responsabilidad y orientación al cliente.' },
          { titulo: 'Propuesta de valor', texto: 'Elimina la necesidad de subir al árbol; modular (2–3 m, ampliable), liviano y de bajo consumo.' },
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Objetivos',
        items: [
          'Construir el equipo comercial y hacer 2 pilotos (un municipio y una asociación de agricultores) en 6 meses.',
          'Alcanzar 60 servicios mensuales en promedio durante el primer año.',
          'Llegar a 80–95 servicios al mes y abrir alquiler y venta del equipo en los años 2 y 3.',
        ],
      },
    ],
  },
  {
    seccion: '3 · Análisis del entorno',
    titulo: 'PESTEL: lo que nos rodea',
    bloques: [
      {
        tipo: 'tabla',
        cabecera: ['Dimensión', 'Factor 1 y efecto', 'Factor 2 y efecto'],
        filas: [
          ['Económico', 'Presupuestos limitados: el precio debe justificarse por seguridad', 'Insumos importados pueden subir: afecta el costo del equipo'],
          ['Social', 'Alta exposición a accidentes: se valora la seguridad', 'Trabajo rural con poca maquinaria: equipo simple y portátil'],
          ['Tecnológico', 'Motores de bajo consumo y electrónica accesible', 'Redes y video permiten demostrar el equipo a bajo costo'],
          ['Cultural', 'Aceptación de soluciones que protegen al trabajador', 'Desconfianza inicial: se supera con demostraciones'],
          ['Político y legal', 'Posible apoyo a proyectos innovadores', 'Normas de seguridad y permisos municipales'],
          ['Ambiental', 'Bajo consumo energético y sin residuos peligrosos', 'Una mala poda daña el árbol: exige capacitación'],
        ],
      },
      {
        tipo: 'lista',
        items: [
          'Oportunidades: poca oferta tecnológica, interés institucional en seguridad laboral y ferias.',
          'Amenazas: desconfianza, alza de costos de componentes y trámites de permisos.',
          'Decisiones: pilotos y demostraciones, cotizar con varios proveedores y gestionar permisos desde el inicio.',
        ],
      },
    ],
  },
  {
    seccion: '4 · Investigación de mercados',
    titulo: '¿Existe demanda? Diseño del estudio',
    bloques: [
      {
        tipo: 'cita',
        texto: '¿Existe aceptación y necesidad de un sistema de poda automatizado entre municipios, agricultores y empresas de mantenimiento, y qué precio aceptarían?',
      },
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Tipo', texto: 'Descriptiva, con metodología mixta de predominio cuantitativo.' },
          { titulo: 'Muestra', texto: '50 personas: 15 municipios, 15 agricultores, 10 empresas y 10 podadores independientes.' },
          { titulo: 'Técnicas', texto: 'Encuesta (principal), entrevistas semiestructuradas y observación de trabajos de poda.' },
          { titulo: 'Criterio de éxito', texto: 'Al menos 60 % de intención de compra.' },
        ],
      },
    ],
  },
  {
    seccion: '4 · Investigación de mercados',
    titulo: 'Competencia e instrumentos',
    bloques: [
      {
        tipo: 'tabla',
        cabecera: ['Competidor', 'Fortalezas', 'Debilidades'],
        filas: [
          ['Cuadrillas que suben al árbol (directo)', 'Flexibilidad y experiencia', 'Riesgo de caída y escasez de personal'],
          ['Plataforma o grúa (directo)', 'Alcance en altura', 'Costosa y requiere acceso vehicular'],
          ['Escalera y motosierra propias (indirecto)', 'Costo inicial bajo', 'Riesgo alto y poca altura'],
          ['Serpiente', 'Seguridad, portabilidad, bajo consumo', 'Tecnología nueva; capacidad limitada por equipo'],
        ],
      },
      {
        tipo: 'lista',
        items: [
          'Encuesta de 15 preguntas: perfil, hábitos, necesidad, interés, precio y barreras.',
          'Entrevista de 7 preguntas abiertas para profundizar en motivos y expectativas.',
          'Aún no se aplicaron: se encuestará a las 50 personas y se harán 5–6 entrevistas. No se presentan resultados inventados.',
        ],
      },
    ],
  },
  {
    seccion: '5 · Mercado objetivo',
    titulo: 'Segmentación y buyer persona',
    bloques: [
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Demográfica', texto: 'Responsables de áreas verdes, productores y podadores de 25–60 años.' },
          { titulo: 'Geográfica', texto: 'Cochabamba (ciudad y valle) al inicio; luego otras ciudades.' },
          { titulo: 'Psicográfica', texto: 'Valoran la seguridad laboral y están abiertos a tecnología útil.' },
          { titulo: 'Conductual', texto: 'Podan con frecuencia y prefieren ver el equipo funcionando.' },
        ],
      },
      {
        tipo: 'cita',
        texto: 'Segmento elegido: municipios y agricultores con muchos árboles. «Don Ramiro», 48 años, jefe de áreas verdes de un municipio del valle: quiere podar sin accidentes y con poco personal, prefiere demostraciones en vivo y decide por licitación o cotización.',
      },
    ],
  },
  {
    seccion: '6 · Plan de marketing',
    titulo: 'Marketing mix y estrategia',
    bloques: [
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Producto', texto: 'Equipo modular ligero (2–3 m) con control remoto y maletín de transporte.' },
          { titulo: 'Plaza', texto: 'Venta y demostración directa, ferias, web con formulario; luego distribuidores.' },
          { titulo: 'Promoción', texto: 'Demostraciones en vivo, video corto, redes sociales y alianza con TECBA.' },
          { titulo: 'Personas', texto: 'Operador técnico, responsable comercial y ayudante; capacitación al cliente.' },
        ],
      },
      {
        tipo: 'lista',
        items: [
          'Estrategia: nicho con diferenciación por innovación; se compite por seguridad, no por precio.',
          'Objetivos: 2 pilotos con testimonios en 6 meses y 60 servicios mensuales en el primer año.',
        ],
      },
    ],
  },
  {
    seccion: '6 · Plan de marketing',
    titulo: 'Campaña: «Que Serpiente suba por ti»',
    bloques: [
      { tipo: 'cita', texto: 'Poda en altura sin subir al árbol: más seguro, más rápido.' },
      {
        tipo: 'tabla',
        cabecera: ['Elemento', 'Propuesta'],
        filas: [
          ['Objetivo', 'Dar a conocer el equipo y conseguir las primeras demostraciones'],
          ['Público', 'Municipios y agricultores del valle de Cochabamba'],
          ['Publicación', 'Video de 20 segundos: el equipo asciende, corta y baja. «Pide tu demostración gratis.»'],
          ['Primeros clientes', 'Pilotos gratuitos o de bajo costo y demostración en una feria local'],
          ['Canales', 'Facebook, Instagram, WhatsApp, ferias y visitas a alcaldías'],
          ['Indicadores', 'Demostraciones, solicitudes de cotización, seguidores nuevos y pilotos convertidos en contrato'],
        ],
      },
    ],
  },
  {
    seccion: '7 · Innovación y crecimiento',
    titulo: 'SCAMPER y plan de crecimiento',
    bloques: [
      {
        tipo: 'tabla',
        titulo: 'Innovación de producto y de marketing',
        cabecera: ['SCAMPER', 'Cambio propuesto', 'Beneficio'],
        filas: [
          ['Sustituir', 'Reemplazar al podador en altura por un equipo trepador', 'Menos accidentes'],
          ['Combinar', 'Agarre, avance, sensores y corte con un solo control remoto', 'Un solo operador desde el suelo'],
          ['Adaptar', 'Imitar el movimiento de una serpiente', 'Ascenso estable sin infraestructura'],
          ['Modificar', 'Módulos ampliables (2–3 m; 2”–3”)', 'Sirve para distintos árboles'],
          ['Eliminar', 'Escaleras, arneses y andamios', 'Menor costo operativo y riesgo'],
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Crecimiento',
        items: [
          'Alquiler y venta del equipo a otros podadores y empresas.',
          'Contratos anuales de mantenimiento con alcaldías y alianzas con distribuidores.',
          'Más automatización (sensores y control) y expansión a otras ciudades.',
        ],
      },
    ],
  },
  {
    seccion: '8 · Riesgos y conclusiones',
    titulo: 'Riesgos, viabilidad y próximos pasos',
    bloques: [
      {
        tipo: 'tabla',
        cabecera: ['Riesgo', 'Mitigación'],
        filas: [
          ['Técnico: falla de agarre o desvío del cable', 'Gomas de alta fricción, doble sujeción, aro de precisión y calibración'],
          ['Comercial: desconfianza en tecnología nueva', 'Demostraciones, pilotos y testimonios'],
          ['Financiero: ventas menores a lo previsto', 'Control de gastos, capital de trabajo y alquiler del equipo'],
          ['Proveedores y legal', 'Dos proveedores por componente; tramitar permisos antes de operar'],
        ],
      },
      {
        tipo: 'lista',
        titulo: 'Conclusiones',
        items: [
          'Comercialmente prometedora, técnicamente factible pero pendiente de probar el prototipo, y legalmente manejable.',
          'Recomendación: aplicar la encuesta y entrevistas, probar el prototipo en distintos árboles y gestionar permisos.',
        ],
      },
    ],
  },
]
