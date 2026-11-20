import { useCallback, useEffect, useRef, useState } from 'react'
import { Logo } from '../componentes/Logo'
import type { Bloque, Portada as DatosPortada, Presentacion as DatosPresentacion } from '../contenido/presentacion'

function Portada({ datos }: { datos: DatosPortada }) {
  return (
    <div className="diap-portada">
      <Logo tamano={56} conTexto={false} />
      <p className="diap-etiqueta">{datos.etiqueta}</p>
      <h2>{datos.titulo}</h2>
      <p className="diap-producto">{datos.subtitulo}</p>
      <p className="texto-suave">{datos.detalle}</p>
      <ul className="diap-integrantes" aria-label="Integrantes">
        {datos.integrantes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p className="texto-suave">{datos.pie}</p>
    </div>
  )
}

function VistaBloque({ bloque }: { bloque: Bloque }) {
  switch (bloque.tipo) {
    case 'cita':
      return <blockquote className="diap-cita">{bloque.texto}</blockquote>
    case 'tarjetas':
      return (
        <div className="diap-tarjetas">
          {bloque.items.map((i) => (
            <div key={i.titulo} className="diap-tarjeta">
              <h4>{i.titulo}</h4>
              <p>{i.texto}</p>
            </div>
          ))}
        </div>
      )
    case 'lista':
      return (
        <div>
          {bloque.titulo && <h4 className="diap-subtitulo">{bloque.titulo}</h4>}
          <ul className="diap-lista">
            {bloque.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )
    case 'tabla':
      return (
        <div>
          {bloque.titulo && <h4 className="diap-subtitulo">{bloque.titulo}</h4>}
          <div className="diap-tabla-marco">
            <table className="diap-tabla">
              <thead>
                <tr>
                  {bloque.cabecera.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloque.filas.map((f) => (
                  <tr key={f[0]}>
                    {f.map((celda, i) => (
                      <td key={i}>{celda}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
  }
}

/** Visor de diapositivas. La portada es la número 1; las demás vienen de `datos.diapositivas`. */
export function Presentacion({ datos }: { datos: DatosPresentacion }) {
  const diapositivas = datos.diapositivas
  const TOTAL = diapositivas.length + 1
  const [actual, setActual] = useState(0)
  const marco = useRef<HTMLDivElement>(null)
  const [pantallaCompleta, setPantallaCompleta] = useState(false)

  const ir = useCallback((n: number) => setActual(Math.min(TOTAL - 1, Math.max(0, n))), [TOTAL])

  useEffect(() => {
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') ir(actual + 1)
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') ir(actual - 1)
    }
    window.addEventListener('keydown', alTeclear)
    return () => window.removeEventListener('keydown', alTeclear)
  }, [actual, ir])

  useEffect(() => {
    const alCambiar = () => setPantallaCompleta(document.fullscreenElement === marco.current)
    document.addEventListener('fullscreenchange', alCambiar)
    return () => document.removeEventListener('fullscreenchange', alCambiar)
  }, [])

  const alternarPantallaCompleta = () => {
    if (document.fullscreenElement) void document.exitFullscreen()
    else void marco.current?.requestFullscreen?.()
  }

  const diap = actual === 0 ? null : diapositivas[actual - 1]

  return (
    <div className="pagina">
      <header className="encabezado-pagina">
        <h1>{datos.titulo}</h1>
        <p className="texto-suave">{datos.ayuda}</p>
      </header>

      <div className={`diap-marco${pantallaCompleta ? ' diap-completa' : ''}`} ref={marco}>
        <section className="diap" aria-live="polite" aria-label={`Diapositiva ${actual + 1} de ${TOTAL}`}>
          {diap ? (
            <>
              <p className="diap-etiqueta">{diap.seccion}</p>
              <h2>{diap.titulo}</h2>
              <div className="diap-cuerpo">
                {diap.bloques.map((b, i) => (
                  <VistaBloque key={i} bloque={b} />
                ))}
              </div>
            </>
          ) : (
            <Portada datos={datos.portada} />
          )}
        </section>

        <div className="diap-controles">
          <button type="button" className="btn btn-secundario btn-chico" onClick={() => ir(actual - 1)} disabled={actual === 0}>
            ← Anterior
          </button>
          <div className="diap-puntos" role="tablist" aria-label="Diapositivas">
            {Array.from({ length: TOTAL }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === actual}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                className={`diap-punto${i === actual ? ' activo' : ''}`}
                onClick={() => ir(i)}
              />
            ))}
          </div>
          <span className="diap-contador">
            {actual + 1} / {TOTAL}
          </span>
          <button type="button" className="btn btn-secundario btn-chico" onClick={alternarPantallaCompleta}>
            {pantallaCompleta ? 'Salir' : 'Pantalla completa'}
          </button>
          <button type="button" className="btn btn-primario btn-chico" onClick={() => ir(actual + 1)} disabled={actual === TOTAL - 1}>
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  )
}
