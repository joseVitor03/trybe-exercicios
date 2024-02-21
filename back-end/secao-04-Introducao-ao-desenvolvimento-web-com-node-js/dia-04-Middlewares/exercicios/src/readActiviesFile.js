const fs = require('fs').promises;
const path = require('path');

const pathActiviesFile = path.resolve(__dirname, './activiesFile.json');

const readActiviesFile =  async () => {
  try {
    
    const response = await fs.readFile(pathActiviesFile);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log({ message: 'Erro arquivo'});
  }
};

module.exports = readActiviesFile;