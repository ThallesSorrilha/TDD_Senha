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
    if (
      !SenhaService.validarPresencaDeCaracter(
        senha,
        constantes.ALFABETO_MAIUSCULO,
        "senha sem letra maiúsculo",
      )
    ) {
      return false;
    }

    //Pelo menos uma letra minúscula.
    if (
      !SenhaService.validarPresencaDeCaracter(
        senha,
        constantes.ALFABETO_MINUSCULO,
        "senha sem letra minúscula",
      )
    ) {
      return false;
    }

    //Pelo menos um número.
    if (
      !SenhaService.validarPresencaDeCaracter(
        senha,
        constantes.NUMEROS,
        "senha sem numeros",
      )
    ) {
      return false;
    }

    //Pelo menos um caractere especial (ex: !@#$%^&*).
    if (
      !SenhaService.validarPresencaDeCaracter(
        senha,
        constantes.ESPECIAIS,
        "senha sem caractere especial",
      )
    ) {
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

  static validarPresencaDeCaracter(senha, conjunto, mensagem) {
    requisito = false;
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (conjunto.includes(element)) {
        requisito = true;
        break;
      }
    }
    if (!requisito) {
      console.log(mensagem);
      return false;
    }
    return true;
  }
}

module.exports = { SenhaService };
