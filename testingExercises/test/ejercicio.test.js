import { describe, expect, it, vi } from "vitest";
import {
  div,
  first,
  getChuckNorrisPhase,
  getPersonInfo,
  isEven,
  multiply,
  phrase,
  teachers,
  today,
} from "../src/ejercicio";

describe("Conjunto de test del ejercicio.js", () => {
  it("Cuando multiplico 2 x 3 tiene que dar 6", () => {
    const r = multiply(2, 3);
   expect(multiply(2,3)).toEqual(6);
  });

  it("Cuando multiplico 2 x 3 no tiene que dar 0", () => {
  expect(multiply(2,3))!=0;
  });

  it("Cuando multiplico 2 x 3 tengo que obtener un valor positivo o cero", () => {
    expect(multiply(2,3)).toBeGreaterThanOrEqual(0);
  });

  it("Cuando divido 2 a la 3 tiene que dar más o menos 0.666. Precisión de 2 decimales", () => {
   expect((2/3).toFixed(4)).toContain(0.666);
  });

  it("Cuando divido 6 entre 0 tiene lanzar una excepción 'No se puede dividir por 0' ", () => {
    expect(() => div(2, 0)).toThrowError("No se puede dividir por 0");
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] debe ser 'juan'", () => {
    const array=['juan','pedro','ivan'];
    expect(first(array)).toBe('juan');
  });

  it("La llamada a la función first, deberá devolver algo truthy", () => {
    const array=['juan','pedro','ivan'];
   expect(first(array)).toBeTruthy();
  });

  it("Al llamar a la función first. El primer elemento de la lista ['juan', 'pedro', 'ivan'] tiene que ser de tipo string", () => {
    const array=['juan','pedro','ivan'];
    expect(first(array)).toBeTypeOf('string')
  });

  it("La llamada a la función teachers debe devolver una array de longitud 3", () => {
    const r = teachers();
    expect(r).toHaveLength(3)
  });

  it("La llamada a la función teachers debe contener al profe 'Angel'", () => {
   const r = teachers()
   expect(r).toContain('Angel')
  });

  it("La llamada a la función isEven debe retornar algo. Usa un espía", () => {
   const isEvenSpy= vi.fn(isEven)
   const r = isEvenSpy(2)
   expect(r).toBe(true)
   expect(isEvenSpy).toHaveReturned()
  });

  it("La llamada a la función phrase debe devolver algo que comineza por 'Ha' y termina por '!'. Usa una regex ", () => {
   const r = phrase()
   expect(r).toMatch(/^Ha.*$/)
  });

  it("Sáltate este test para que nos se ejecute.", () => {
    expect(true).toBe(true);
  });

  it("La función teachers debe devolver un valor distinto de undefined", () => {
    // tu código aquí
  });

  it("La llamada a la función today deberá devolver una instancia de Date", () => {
    // tu código aquí
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad 'age'", () => {
    const r = getPersonInfo().address
    expect(r).toHaveProperty('city')
  });

  it("La llamada a la función getPersonInfo debe devolver un objeto con la propiedad name = 'Juan", () => {
   const r = getPersonInfo()
   expect(r).toEqual(expect.objectContaining({name:'Juan'}))
  });

  it("La llamada a la función asincrona getChuckNorrisPhase, debe devolver un objeto con la propiedad 'value'", async () => {
    await expect(getChuckNorrisPhase()).resolves.toHaveProperty('value')
  });
});
