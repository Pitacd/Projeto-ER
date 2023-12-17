const path = require('path');
const fs = require('fs');

function getPassByOwner(owner){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    pass = passes.find(pass => pass.owner === owner);
    return pass;
}

function addPass(passObj){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    passes.push(passObj);
    let updatedJSON = JSON.stringify(passes, null, 2);
    fs.writeFileSync(path.join(__dirname, 'accounts.json'), updatedJSON);
}

module.exports = { getPassByOwner, addPass };