/* eslint-disable import/prefer-default-export */
export function applyMixins(derivedConstructor: any, baseConstructors: any[]) {
  baseConstructors.forEach((baseConstructor) => {
    Object.getOwnPropertyNames(baseConstructor.prototype)
      .forEach((name) => Object.defineProperty(derivedConstructor.prototype,
        name,
        (Object as any).getOwnPropertyDescriptor(
          baseConstructor.prototype,
          name,
        )));
  });
}
