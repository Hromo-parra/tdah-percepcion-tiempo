# TDAH y percepción subjetiva del tiempo

Aplicación de investigación académica para administrar una tarea de **producción temporal** en adultos jóvenes. La persona produce intervalos de 2, 6, 12, 24, 36 y 48 segundos sin una referencia temporal visible.

**Aplicación publicada:** <https://hromo-parra.github.io/tdah-percepcion-tiempo/>

> Esta aplicación no evalúa, detecta ni diagnostica TDAH ni ninguna otra condición. Los resultados individuales carecen de valor clínico.

## Diseño de la tarea

| Fase | Ensayos | Retroalimentación |
|---|---:|---|
| Práctica | 3 intervalos: 3, 5 y 8 s | Sí |
| Bloque experimental 1 | 12 | No |
| Pausa | — | — |
| Bloque experimental 2 | 12 | No |
| Pausa | — | — |
| Bloque experimental 3 | 12 | No |

Los 36 ensayos experimentales contienen seis repeticiones de cada intervalo objetivo: 2, 6, 12, 24, 36 y 48 segundos. La presentación sigue exactamente esta secuencia:

```text
12 36  2 48  6 24
48 36 24 12  6  2
24  2 48  6 36 12
 6 48 24 36  2 12
 2  6 12 24 36 48
36 12  6  2 48 24
```

La semilla se conserva como identificador de trazabilidad, pero ya no modifica el orden experimental.

## Funciones incorporadas

- Configuración mediante código anónimo de participante.
- Registro de grupo de estudio, situación de medicación y código del aplicador.
- Respuesta mediante barra espaciadora o botón en pantalla.
- Práctica con retroalimentación y una repetición opcional.
- Tarea experimental sin retroalimentación.
- Solicitud de pantalla completa y ocultamiento de referencias temporales.
- Registro con `performance.now()` para mejorar la resolución temporal.
- Detección de pérdidas de foco, cambios de visibilidad, salida de pantalla completa, redimensionamiento y tiempos agotados.
- Recuperación de sesiones interrumpidas.
- Exportación de ensayos y resúmenes en CSV y JSON.
- Eliminación local con confirmación después del respaldo.

## Uso local

La versión original funciona con doble clic. Para reproducir las mismas condiciones que en GitHub Pages puede iniciarse un servidor local desde esta carpeta:

```bash
python3 -m http.server 8011
```

Después abre `http://localhost:8011/` en Chrome o Firefox.

## Aplicación estandarizada

Para conservar la comparabilidad entre participantes:

1. Usa el mismo modelo de computadora, navegador y teclado para toda la muestra.
2. Prefiere teclado alámbrico y conecta el equipo a la corriente.
3. Oculta relojes visibles y elimina ritmos, notificaciones e interrupciones.
4. Usa pantalla completa y una sola pestaña.
5. No proporciones retroalimentación verbal o gestual durante los ensayos experimentales.
6. Exporta CSV y JSON inmediatamente después de cada sesión.

El procedimiento completo, manejo de incidencias y plan analítico se encuentran en [MANUAL-DE-APLICACION.md](MANUAL-DE-APLICACION.md).

## Variables principales

La aplicación conserva, entre otras variables:

- intervalo objetivo y producido;
- error con signo y error absoluto;
- error proporcional y razón de producción;
- tiempos de inicio y finalización;
- latencia entre ensayos;
- indicadores de foco, visibilidad, pantalla completa y timeout;
- identificadores de sesión, semilla y dispositivo.

La relación entre TDAH y producción temporal debe evaluarse a nivel grupal mediante un modelo apropiado para medidas repetidas. Una diferencia descriptiva individual no permite inferir diagnóstico, causalidad ni mecanismo.

## Estructura del repositorio

```text
.
├── index.html                  # Aplicación autocontenida
├── MANUAL-DE-APLICACION.md    # Manual operativo y anexos técnicos
├── README.md                  # Documentación del proyecto
└── .nojekyll                  # Publicación directa en GitHub Pages
```

`index.html` incluye estilos, React y el motor de la tarea en un único archivo. No requiere instalar paquetes ni ejecutar una compilación.

## Datos y privacidad

- La aplicación no solicita nombres reales.
- Los datos se procesan en el navegador y no se envían a un servidor.
- GitHub Pages no funciona como base de datos ni recibe las respuestas.
- El equipo investigador debe descargar y resguardar los archivos con controles institucionales apropiados.
- No deben escribirse datos identificables en el campo de notas.

Antes de reclutar participantes deben aprobarse el consentimiento, los criterios de exclusión, el plan estadístico, la política de conservación de datos y el manejo de incidentes.

## Publicación en GitHub Pages

El proyecto está preparado para publicarse directamente desde la raíz de la rama `main`:

1. Abre **Settings → Pages** en GitHub.
2. Selecciona **Deploy from a branch**.
3. Elige `main` y `/ (root)`.
4. Guarda la configuración.

## Versiones

- Aplicación: 1.1.0
- Manual: 1.1
- Adaptación para GitHub Pages: agosto de 2026
