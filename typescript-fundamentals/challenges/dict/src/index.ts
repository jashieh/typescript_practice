// <T> captures the generic type of the variable/function 
// allowing this type to be used elsewhere to make the
// function more generic

export type Dict<T> = {
  [k: string]: T | undefined; 
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dKey, idx) => {
    const item = dict[dKey];
    if(typeof item !== 'undefined') {
      out[dKey] = fn(item,idx);
    }
  });
  return out;
}

// Array.prototype.reduce, but for Dict
// export function reduceDict<T>(dict: Dict<T>) {}
