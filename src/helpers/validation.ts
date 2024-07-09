export function isDefined(v: any): boolean {
  return !!(v !== null && typeof v !== 'undefined');
}

export function isObject(value: any): boolean {
  return (
    typeof value === 'object' &&
    value !== null &&
    !(value instanceof RegExp) &&
    !(value instanceof Error) &&
    !(value instanceof Date) &&
    !Array.isArray(value)
  )
}

export function isObjectEmpty(obj: object = {}): boolean {
  if (!obj) return true
  return !Object.keys(obj)?.length
}

export function emptyObjectArrayValidate(arr?: any[]) {
  if (!arr) return false;
  return arr.filter(env => Object.keys(env).length).length;
}

export function discObjectValuesValidate<T extends object>(object: T): boolean {
  if (!object) return false;
  return Object.values(object)?.some(value => value >= 1);
}

export function deleteProps(objeto, props) {
  props?.forEach(propriedade => {
    if (objeto.hasOwnProperty(propriedade)) {
      delete objeto[propriedade]
    }
  })
  return objeto
}
