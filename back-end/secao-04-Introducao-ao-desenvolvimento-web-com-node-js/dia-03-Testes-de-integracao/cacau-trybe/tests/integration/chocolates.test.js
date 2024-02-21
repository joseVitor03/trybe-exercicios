const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const mockFile = require('../../src/mockFile');
// const cacauTrybe = require('../../src/cacauTrybe');
const app = require('../../src/app');
const { expect } = chai;

const chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('Usando o GET em /chocolates', function () {
  beforeEach(() => {
    sinon.stub(fs, 'readFile').resolves(mockFile);
  });
  afterEach(() => {
    sinon.restore();
  })
  it('Retorna uma lista', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equals(200);
    expect(response.body.data).to.deep.equal(output);
  });

  it('buscando chocolate especifico com id 4 GET /chocolates/:id', async function () {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equals(200);
    expect(response.body).to.be.deep.equals({
      id: 4,
      name: 'Mounds',
      brandId: 3,
    });
  });

  it('busca lista de chocolates com mesma marca com brandId 1. GET /chocolates/brand/:brandId', async function() {
    const response = await chai.request(app).get('/chocolates/brand/1');

    expect(response.status).equals(200);
    expect(response.body).deep.equals(
      [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      }
    ]
    )
  });

  it('quantidate total de chocolate. GET /chocolates/total', async function () {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).equals(200);
    expect(response.body).deep.equals(
      {
        "totalChocolates": 4 
      }
    )
  });
});