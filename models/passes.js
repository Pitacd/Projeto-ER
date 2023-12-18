const path = require('path');
const fs = require('fs');

function getPassByOwner(owner){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    pass = passes.find(pass => pass.owner === owner);
    return pass;
}

function verifyErrorsOnFormAssociatePass(ownerName, ownerNIF){
    if(ownerNIF.length < 9){
        return "Números em falta no NIF";
    }
    if(ownerNIF.length > 9){
        return "Números a mais no NIF";
    }
    if(/[0-9]/.test(ownerName)){
        return "O nome contém números"
    }
    return "";
}

function sendPassToBeVerify(passNumber, ownerName, ownerNIF){
    let buffer = fs.readFileSync(path.join(__dirname, 'passesToBeVerify.json'),'utf8');
    let passesToBeVerify = JSON.parse(buffer); 

    let newPass = {
        passNumber: passNumber,
        ownerName: ownerName,
        ownerNIF: ownerNIF
    };

    passesToBeVerify.push(newPass)
    let updatedJSON = JSON.stringify(passesToBeVerify, null, 2);
    fs.writeFileSync(path.join(__dirname, 'passesToBeVerify.json'), updatedJSON);
}

module.exports = { getPassByOwner, sendPassToBeVerify, verifyErrorsOnFormAssociatePass };