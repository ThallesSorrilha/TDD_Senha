class SenhaService {
  static validarSenha(senha) {
    if (!senha) {
      return false;
    }
    return true;
  }
}

module.exports = { SenhaService };
