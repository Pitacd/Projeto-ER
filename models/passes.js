// Libraries
const path = require('path');
const fs = require('fs');
const { randomInt } = require('crypto');

// Constants
const PAYMENT_STATES = ['Em atraso', 'Pago'];

// Utility functions
const randomItem = (array) => { return array[randomInt(array.length)];}

function getPassByOwner(ownerId){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    pass = passes.find((value)=>{
        return value.ownerId == ownerId;
    });
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

function sendPassToBeVerify(passNumber, ownerID, ownerName, ownerNIF){
    let buffer = fs.readFileSync(path.join(__dirname, 'passesToBeVerify.json'),'utf8');
    let passesToBeVerify = JSON.parse(buffer); 

    let newPassToBeVerify = {
        passNumber: passNumber,
        ownerID: ownerID,
        ownerName: ownerName,
        ownerNIF: ownerNIF
    };

    passesToBeVerify.push(newPassToBeVerify)
    let updatedJSON = JSON.stringify(passesToBeVerify, null, 2);
    fs.writeFileSync(path.join(__dirname, 'passesToBeVerify.json'), updatedJSON);
}

function getTitlePrice(titleType){
    buffer = fs.readFileSync(path.join(__dirname, 'titles.json'), 'utf8');
    let titleTypes = JSON.parse(buffer);
    let { price } = titleTypes.find((value)=>{
        return value.titleType === titleType;
    });
    return price;
}

module.exports = { getPassByOwner, sendPassToBeVerify, verifyErrorsOnFormAssociatePass, getTitlePrice };