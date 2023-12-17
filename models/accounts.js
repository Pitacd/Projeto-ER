const path = require('path');
const fs = require('fs');

function register(email, password){
    let msg="";
    
    let buffer = fs.readFileSync(path.join(__dirname, 'accounts.json'),'utf8')
    let accounts = JSON.parse(buffer);

    // check if email contains the expected domain
    if(!(email.endsWith("@staff.uma.pt") || email.endsWith("@student.uma.pt"))){
        msg="Email inválido.";
    }else{
        // check if account exists on the DB
        accounts.every(account => {
            if(email===account.email){
                msg="Conta já registada.";
                return false;
            }
            return true;
        });

        if(password===""){
            msg="Palavra-passe inválido.";
        }

        if(msg===""){
            accounts.push({email : email, password : password});
            let updatedJSON = JSON.stringify(accounts, null, 2);
            fs.writeFileSync(path.join(__dirname, 'accounts.json'), updatedJSON);
            // msg="Registada com sucesso";
        }
    }
    return msg;
}

function login(email, password){
    let msg="";

    let buffer = fs.readFileSync(path.join(__dirname, 'accounts.json'),'utf8')
    let accounts = JSON.parse(buffer);
    
    accounts.every(account => {
        if(email===account.email){
            if(password===account.password){
                msg="Login realizado com sucesso.";
                return false;
            }else{
                msg="Palavra-passe incorreta.";
                return false;
            }
        }
        return true;
    });

    if(msg===""){
        msg="Conta não registada.";
    }

    return msg;
}

module.exports = { register, login };