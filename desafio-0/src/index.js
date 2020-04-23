const api = require('./servers/apis');
const fs = require('fs');
const util = require('util');
const sha1 = require('sha1');
const FormData = require('form-data');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

async function getData() {
    const response = await api.get('generate-data', {
        params: {
            token: 'YOUR_TOKEN'
        }
    });
    return response.data;
}

/*async function postData() {
    const answer = await readFile('src/answer.json');
    let formData = new FormData();
    formData.append('answer', answer);
    console.log(response);
    const response = await api.post('submit-solution', {
        params: {
            token: 'YOUR_TOKEN'
        }
    });
    console.log(response);
}*/

async function storeData(obj) {
    if (obj) {
        return await writeFile('src/answer.json', JSON.stringify(obj), 'utf8');
    }
}

async function readData() {
    const jsonString = await readFile('src/answer.json', 'utf8');
    return JSON.parse(jsonString);
}

async function decipher() {
    const data = await getData();
    await storeData(data);
    var jsonObj = await readData();
    const encrypted = jsonObj.cifrado.toLowerCase().split('');
    const n = parseInt(jsonObj.numero_casas);
    var decrypted = "";
    encrypted.forEach(char => {
        if (char >= 'a' && char <= 'z') {
            var charCode = char.charCodeAt() - n;
            if (charCode < 97) {
                charCode = (charCode - 96) + 122;
            }
            char = String.fromCharCode(charCode);
        }
        decrypted += char;
    });
    jsonObj.decifrado = decrypted;
    jsonObj.resumo_criptografico = sha1(decrypted);
    await storeData(jsonObj);
    //postData();
}

decipher();