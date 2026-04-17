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

    if (!SenhaService.validarMinimoCaracteres(senha)) return false;
    if (!SenhaService.validarMaiusculas(senha)) return false;
    if (!SenhaService.validarMinusculas(senha)) return false;
    if (!SenhaService.validarNumeros(senha)) return false;
    if (!SenhaService.validarCaracteresEspeciais(senha)) return false;
    if (!SenhaService.validarEspacoBranco(senha)) return false;

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

  static validarMaiusculas(senha) {
    conjunto = constantes.ALFABETO_MAIUSCULO;
    mensagem = "senha sem letra maiúsculo";
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarMinusculas(senha) {
    conjunto = constantes.ALFABETO_MINUSCULO;
    mensagem = "senha sem letra minúscula";
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarNumeros(senha) {
    conjunto = constantes.NUMEROS;
    mensagem = "senha sem números";
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarCaracteresEspeciais(senha) {
    conjunto = constantes.ESPECIAIS;
    mensagem = "senha sem caracteres especiais";
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarMinimoCaracteres(senha) {
    mensagem = "senha não pode ter menos de 8 caracteres"
    if (senha.senha.length < 8) {
      console.log(mensagem);
      return false;
    }
    return true;
  }

  static validarEspacoBranco(senha) {
    mensagem = "senha não pode conter espaço";
    for (let i = 0; i < senha.senha.length; i++) {
      const element = senha.senha[i];
      if (element == " ") {
        console.log(mensagem);
        return false;
      }
    }
    return true;
  }
}

module.exports = { SenhaService };
