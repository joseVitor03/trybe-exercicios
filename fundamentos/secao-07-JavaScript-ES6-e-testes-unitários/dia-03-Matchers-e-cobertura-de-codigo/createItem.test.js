const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana','kg',1.99,20)).toEqual({
        name: 'banana',
        unit: 'kg',
        price: 1.99,
        quantity: 20
    });
  });
  it('este se a função createItem utiliza zero como quantidade-padrão.', () => {
    expect(createItem('banana', 'kg', 1.99)).toEqual({
        name: 'banana',
        unit: 'kg',
        price: 1.99,
        quantity: 0
    })
  })
  it('Teste se a função createItem lança algum erro quando não recebe parâmetros.', () => {
    expect(() => {createItem()}).toThrow(new Error('O nome do item deve ser uma string'))
  })
  it('Teste se a função createItem lança algum erro quando não recebe parâmetros.', () => {
    expect(() => {createItem()}).toThrow(new Error('O nome do item deve ser uma string'))
  })
  it('Teste se a função createItem lança um erro caso o preço do item seja negativo ou zero.', () => {
    expect(() => {createItem('banana','kg', 0, 5)}).toThrow(new Error('O preço do item deve ser maior que zero'))
  })
  it('Teste se a função createItem lança um erro caso o preço do item seja negativo.', () => {
    expect(() => {createItem('banana','kg', -10, 5)}).toThrow(new Error('O preço do item deve ser maior que zero'))
  })
});