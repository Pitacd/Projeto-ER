const path = require('path');
const fs = require('fs');

function getPassByOwner(owner){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer);
    pass = passes.find(pass => pass.owner === owner);
    return pass;
}

function addPass(passNumber, passOwner){
    let buffer = fs.readFileSync(path.join(__dirname, 'passes.json'),'utf8');
    let passes = JSON.parse(buffer); 

    let newPass = {
        passNumber : passNumber,
        owner : passOwner,
        // Attributes are static to simualate fetching
        // the transport title info from the pass number
        title : 'Sub23',
        paymentState : 'Em atraso',
        validity : '1-1-2040'
    };

    let i = passes.findIndex((value) =>{
        value.passNumber == passNumber
    });

    // Check if the owner of the pass is
    // already associated with another pass
    if (i == -1){
        // add a new pass
        passes.push(newPass);
    } else {
        // update the existing one 
        passes[i] = newPass;
    }

    let updatedJSON = JSON.stringify(passes, null, 2);
    fs.writeFileSync(path.join(__dirname, 'passes.json'), updatedJSON);
}

module.exports = { getPassByOwner, addPass };