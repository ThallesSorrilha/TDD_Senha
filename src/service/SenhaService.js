const { constantes } = require("../utils/constantes");

class SenhaService {
  static validarSenha(senha) {
    if (!senha) {
      console.log("objeto nulo");
      return false;
    }

    if (!senha.senha) {
      console.log("atributo nulo");
      return false;
    }

    //Mínimo de 8 caracteres.
    if (senha.senha.length < 8) {
      console.log("senha não pode ter menos de 8 caracteres");
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
      console.log("senha sem letra maiúscula");
      return false;
    }

    //Pelo menos uma letra minúscula.
    requisitoMinusculo = false;
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (constantes.ALFABETO_MINUSCULO.includes(element)) {
        requisitoMinusculo = true;
        break;
      }
    }
    if (!requisitoMinusculo) {
      console.log("senha sem letra minúscula");
      return false;
    }

    //Pelo menos um número.
    requisitoNumero = false;
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (constantes.NUMEROS.includes(element)) {
        requisitoNumero = true;
        break;
      }
    }
    if (!requisitoNumero) {
      console.log("senha sem número");
      return false;
    }

    //Pelo menos um caractere especial (ex: !@#$%^&*).
    requisitoEspecial = false;
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (constantes.ESPECIAIS.includes(element)) {
        requisitoEspecial = true;
        break;
      }
    }
    if (!requisitoEspecial) {
      console.log("senha sem caractere especial");
      return false;
    }

    //Não pode conter espaços em branco.
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (element == " ") {
        console.log("senha não pode conter espaço");
        return false;
      }
    }

    return true;
  }
}

module.exports = { SenhaService };
