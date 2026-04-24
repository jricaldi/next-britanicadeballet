performance.mark('app-init');

const reportMetric = (name, value, rating) => {
  console.log(`Métrica Web Vital: ${name} = ${value} (${rating})`);
};

import('web-vitals').then(({ onLCP, onCLS, onTTFB, onINP }) => {
  onLCP(metric => {
    const value = metric.value.toFixed(2);
    let rating = 'good';
    if (value > 2500) rating = 'needs-improvement';
    if (value > 4000) rating = 'poor';
    reportMetric('LCP', value, rating);
  });

  onCLS(metric => {
    const value = metric.value.toFixed(3);
    let rating = 'good';
    if (value > 0.1) rating = 'needs-improvement';
    if (value > 0.25) rating = 'poor';
    reportMetric('CLS', value, rating);
  });

  onTTFB(metric => {
    const value = metric.value.toFixed(2);
    let rating = 'good';
    if (value > 800) rating = 'needs-improvement';
    if (value > 1800) rating = 'poor';
    reportMetric('TTFB', value, rating);
  });

  onINP(metric => {
    const value = metric.value.toFixed(2);
    let rating = 'good';
    if (value > 200) rating = 'needs-improvement';
    if (value > 500) rating = 'poor';
    reportMetric('INP', value, rating);
  });
});

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
