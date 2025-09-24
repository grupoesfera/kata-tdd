import { Sumador } from "./ejemplo";

describe('Ejemplo de test', () => {
  test('Sumar 1 y 2 da 3', () => {

    const sumador = new Sumador()
    expect(sumador.sumar(1, 2)).toBe(3);
  });
});

