const accounts = require('./accounts.json');
const fs = require("fs");

function register(email, password){
    const msg="";
    //ver se email contem @student.uma.pt ou @staff.uma.pt
    if(!(msg.endsWith("@staff.uma.pt") || msg.endsWith("@student.uma.pt"))){
        msg="Email inválido.";
    }else{
        //ver se conta ja existe
        accounts.accounts.every(account => {
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
            //registrar
            fs.writeFileSync('./accounts.json', JSON.stringify(accounts.push({email : email, password : password})));
            msg="Registada com sucesso";
        }
    }
    return msg;
}

function login(email, password){
    const msg="";
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