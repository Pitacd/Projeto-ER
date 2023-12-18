// Libraries
const path = require('path');
const fs = require('fs');
const { randomInt } = require('crypto');

// Constants
const PAYMENT_STATES = ['Em atraso', 'Pago'];

// Util functions
const randomItem = (array) => { return array[randomInt(array.length)] ;}

function getPassByOwner(ownerId){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    pass = passes.find(pass => pass.owner === ownerId);
    return pass;
}

function addPass(passNumber, ownerId, ownerName){
    // Fetch pass data
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer); 

    // Fetch titles data
    buffer = fs.readFileSync(path.join(__dirname, 'titles.json'), 'utf8');
    let titleTypes = JSON.parse(buffer); 

    let newPass = {
        passNumber : passNumber,
        ownerId : ownerId,
        ownerName : ownerName,
        // Attributes are random to simualate fetching
        // the transport title info from the pass number
        titleType : randomItem(titleTypes).title,
        paymentState : randomItem(PAYMENT_STATES),
        validity : '1-1-2040'
    };

    // Check if the owner of the pass isn't
    // already associated with another pass
    let i = passes.findIndex((value) =>{
        value.passNumber == passNumber
    });
    if (i == -1){
        // add a new pass
        passes.push(newPass);
    } else {
        // update the existing one 
        passes[i] = newPass;
    }

    // Update files
    let updatedJSON = JSON.stringify(passes, null, 2);
    fs.writeFileSync(path.join(__dirname, 'passes.json'), updatedJSON);
}

module.exports = { getPassByOwner, addPass };