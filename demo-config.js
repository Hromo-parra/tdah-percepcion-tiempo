window.DEMO_CONFIG = {
  team: 'Equipo 2 · Percepción temporal', title: 'TDAH y percepción del tiempo', duration: '1–2 minutos',
  intro: 'Haz un ensayo breve de producción temporal, sin reloj visible. La demo muestra la mecánica y un resultado de ejemplo.',
  outro: 'La sesión real usa 36 ensayos de seis intervalos. Los resultados se analizan a nivel grupal; esta tarea no diagnostica TDAH.',
  steps: [
    {type:'info', title:'Cómo se aplica', text:'En el protocolo se registra un código anónimo, se realizan tres ensayos de práctica y después tres bloques sin retroalimentación.', points:['Intervalos objetivo de 2, 6, 12, 24, 36 y 48 segundos.','Se usa la barra espaciadora o un botón para iniciar y detener.','Se anotan interrupciones y pérdidas de foco.']},
    {type:'timer', title:'Produce dos segundos', text:'Pulsa iniciar; cuando creas que transcurrieron dos segundos, pulsa detener.', target:'2 s'},
    {type:'info', title:'Resultado y exportación', text:'En la aplicación completa se calcula cuánto se separa cada respuesta del intervalo objetivo.', points:['Tiempo producido y error con signo.','Error absoluto y proporcional.','Exportación de ensayos y resúmenes en CSV y JSON.']}
  ]
};
