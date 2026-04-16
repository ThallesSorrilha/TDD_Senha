class SenhaService {
  static validarSenha(senha) {
    if (!senha) {
      return false;
    }

    if (!senha.senha) {
        return false;
    }
    
    //Mínimo de 8 caracteres.
    //Pelo menos uma letra maiúscula.
    //Pelo menos uma letra minúscula.
    //Pelo menos um número.
    //Pelo menos um caractere especial (ex: !@#$%^&*).
    //Não pode conter espaços em branco.

    return false;
  }
}

module.exports = { SenhaService };
