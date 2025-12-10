// Kubiks OpenTelemetry Setup kwa HTML/CSS/JS Projects
// Hii file inatuma telemetry data kwa Kubiks platform

const KUBIKS_ENDPOINT = 'https://ingest.kubiks.app/v1/logs';
const KUBIKS_API_KEY = 'kubiks_3216f73e2ac07fe63a3b88d3270bd1eb470ad681887303f4f7c265c4224dc6f0';
const SERVICE_NAME = 'creator-game-quiz';

// Kabla ya kuandika logs
function sendLog(level, message, attributes = {}) {
  const payload = {
    resourceLogs: [{
      resource: {
        attributes: [
          { key: 'service.name', value: { stringValue: SERVICE_NAME } },
          { key: 'service.version', value: { stringValue: '1.0.0' } }
        ]
      },
      scopeLogs: [{
        scope: { name: 'kubiks-telemetry' },
        logRecords: [{
          timeUnixNano: String(Date.now() * 1000000),
          severityNumber: getSeverityNumber(level),
          severityText: level.toUpperCase(),
          body: { stringValue: message },
          attributes: Object.entries(attributes).map(([key, value]) => ({
            key,
            value: { stringValue: String(value) }
          }))
        }]
      }]
    }]
  };

  // Tuma kwa Kubiks
  fetch(KUBIKS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-kubiks-key': KUBIKS_API_KEY
    },
    body: JSON.stringify(payload)
  }).catch(err => console.error('Telemetry error:', err));
}

function getSeverityNumber(level) {
  const levels = { debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
  return levels[level.toLowerCase()] || 0;
}

// Track errors
window.addEventListener('error', (event) => {
  sendLog('error', event.message, {
    'error.type': 'uncaught_error',
    'error.stack': event.error?.stack || 'unknown'
  });
});

// Track page performance
window.addEventListener('load', () => {
  const perf = window.performance.timing;
  const loadTime = perf.loadEventEnd - perf.navigationStart;
  
  sendLog('info', 'Page loaded', {
    'duration_ms': loadTime,
    'page_url': window.location.href,
    'page_title': document.title
  });
});

// Export kwa kutumia katika HTML
window.Telemetry = { sendLog };
