const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
   expect(typeof(productDetails)).toBe('function') // Teste se productDetails é uma função.
   expect(Array.isArray(productDetails('a','b'))).toBe(true)// Teste se o retorno da função é um array.
    expect(productDetails('a','b').length).toBe(2)// Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof(productDetails('a','b')[1])).toBe('object')// Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('a','b')).toStrictEqual( [{"details": {"productId": "a123"}, "name": "a"}, {"details": {"productId": "b123"}, "name": "b"}])// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('a','b')[0].details.productId).toBe('a123')// Teste se os dois productIds terminam com 123.
  });
});
