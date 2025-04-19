// Este archivo se carga antes que el código frontend de la aplicación
// Ideal para configurar monitoreo de rendimiento y analítica temprana

// Marcar el inicio de la aplicación para medir rendimiento
performance.mark('app-init');

// Configurar captura de errores no manejados
window.addEventListener('error', (event) => {
  console.error('Error no manejado:', event.error);
  // Aquí puedes enviar a un servicio de monitoreo como Sentry
  // reportError(event.error);
});

// Función para reportar métricas (puedes adaptarla para enviar a tu backend o Google Analytics)
const reportMetric = (name, value, rating) => {
  console.log(`Métrica Web Vital: ${name} = ${value} (${rating})`);
  // Aquí podrías enviar las métricas a un servicio de análisis o a tu servidor
  // analytics.send({ metric: name, value, rating });
};

// Monitoreamos Core Web Vitals
if ('web-vitals' in window) {
  import('web-vitals').then(({ onLCP, onFID, onCLS, onTTFB, onINP }) => {
    // Largest Contentful Paint - mide el tiempo que tarda en renderizarse 
    // el elemento más grande visible en la ventana gráfica
    onLCP(metric => {
      const value = metric.value.toFixed(2);
      let rating = 'good';
      if (value > 2500) rating = 'needs-improvement';
      if (value > 4000) rating = 'poor';
      reportMetric('LCP', value, rating);
    });

    // First Input Delay - mide el tiempo desde que el usuario interactúa 
    // hasta que el navegador puede comenzar a procesar esa interacción
    onFID(metric => {
      const value = metric.value.toFixed(2);
      let rating = 'good';
      if (value > 100) rating = 'needs-improvement';
      if (value > 300) rating = 'poor';
      reportMetric('FID', value, rating);
    });

    // Cumulative Layout Shift - mide la inestabilidad visual de la página
    onCLS(metric => {
      const value = metric.value.toFixed(3);
      let rating = 'good';
      if (value > 0.1) rating = 'needs-improvement';
      if (value > 0.25) rating = 'poor';
      reportMetric('CLS', value, rating);
    });

    // Time to First Byte - mide la capacidad de respuesta del servidor
    onTTFB(metric => {
      const value = metric.value.toFixed(2);
      let rating = 'good';
      if (value > 800) rating = 'needs-improvement';
      if (value > 1800) rating = 'poor';
      reportMetric('TTFB', value, rating);
    });
    
    // Interaction to Next Paint - mide la responsividad de la interacción
    onINP(metric => {
      const value = metric.value.toFixed(2);
      let rating = 'good';
      if (value > 200) rating = 'needs-improvement';
      if (value > 500) rating = 'poor';
      reportMetric('INP', value, rating);
    });
  });
} else {
  console.warn('Las métricas Web Vitals no están disponibles en este navegador');
}

// Monitorear el rendimiento de navegación
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        console.log(`Tiempo de carga de la página: ${entry.loadEventEnd}ms`);
      }
    });
  });
  observer.observe({ entryTypes: ['navigation'] });
}

// También podrías inicializar herramientas de analítica aquí
console.log('Instrumentación del cliente inicializada'); 