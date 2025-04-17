export const dev = process.env.NODE_ENV !== 'production';
export const isServer = typeof window === 'undefined';
export const apiUrl = process.env.NEXT_PUBLIC_URL_API || '';

export function getBaseURL(port = 3333) {
  if (dev) {
    let base = apiUrl;
    if (!isServer && !base) {
      if (global?.window?.origin !== 'http://localhost:3000') {
        const [protocol, localHost] = global?.window?.origin.split(':');
        base = `${protocol}:${localHost}:${port}`;
      } else {
        base = `http://localhost:${port}`;
      }
    }
    return base || `http://localhost:${port}`;
  }
  return apiUrl;
}

export const baseUrl = `${getBaseURL()}/api/v1`;
