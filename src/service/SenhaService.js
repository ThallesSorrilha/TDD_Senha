const { constantes } = require("../utils/constantes");
const { mensagens } = require("../utils/mensagens");

class SenhaService {
  static validarSenha(senha) {
    if (!senha) {
      console.log(mensagens.OBJETO_NULO);
      return false;
    }

    if (!senha.senha) {
      console.log(mensagens.ATRIBUTO_NULO);
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
    mensagem = mensagens.SENHA_MAIUSCULO;
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarMinusculas(senha) {
    conjunto = constantes.ALFABETO_MINUSCULO;
    mensagem = mensagens.SENHA_MINUSCULO;
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarNumeros(senha) {
    conjunto = constantes.NUMEROS;
    mensagem = mensagens.SENHA_NUMEROS;
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarCaracteresEspeciais(senha) {
    conjunto = constantes.ESPECIAIS;
    mensagem = mensagens.SENHA_CARACTERE_ESPECIAL;
    return SenhaService.validarPresencaDeCaracter(senha, conjunto, mensagem);
  }

  static validarMinimoCaracteres(senha) {
    mensagem = mensagens.SENHA_MIN_CARACTERES;
    if (senha.senha.length < 8) {
      console.log(mensagem);
      return false;
    }
    return true;
  }

  static validarEspacoBranco(senha) {
    mensagem = mensagens.SENHA_ESPACO_BRANCO;
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
