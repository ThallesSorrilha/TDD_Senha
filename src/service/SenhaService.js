const {constantes} = require("../utils/constantes");

class SenhaService {
  static validarSenha(senha) {
    if (!senha) {
      return false;
    }

    if (!senha.senha) {
        return false;
    }
    
    //Mínimo de 8 caracteres.
    if (senha.senha.length < 8) {
        return false;
    }

    //Pelo menos uma letra maiúscula.
    requisitoMaiusculo = false;
    for (let i = 0; i < senha.senha.length; i++) {
        const element = senha.senha[i];
        if (constantes.ALFABETO_MAIUSCULO.includes(element)) {
            requisitoMaiusculo = true;
            break;
        }
    }
    if (!requisitoMaiusculo) {
        return false;
    }

    //Pelo menos uma letra minúscula.
    //Pelo menos um número.
    //Pelo menos um caractere especial (ex: !@#$%^&*).
    //Não pode conter espaços em branco.

    return false;
  }
}

module.exports = { SenhaService };
