const fs = require('fs').promises;
const path = require('path');

const pathChocolates = path.resolve(__dirname, './files/cacauTrybeFile.json');

const readCacauTrybeFile = async () => {
  try {
    const response = await fs.readFile(pathChocolates);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
const allChocolates = async () => {
    const data = await readCacauTrybeFile();
    return data.chocolates
};

const chocolateSpecific = async (id) => {
  try {
    const data = await readCacauTrybeFile();
    const response = data.chocolates.find((candy) => candy.id === Number(id));
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const chocolatesByBrand = async (brandId) => {
  try {
    const data = await readCacauTrybeFile();
    const response = data.chocolates.filter((candy) => candy.brandId === Number(brandId));
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

const totalChocolates = async () => {
  try {
    const data = await readCacauTrybeFile();
    const response = data.chocolates.length;
    const result = {
      totalChocolates: response
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  allChocolates,
  chocolateSpecific,
  chocolatesByBrand,
  totalChocolates
}