const { Senha } = require("../../src/model/Senha");
const { SenhaService } = require("../../src/service/SenhaService");

describe("Senha", () => {
  test("Teste de senha Válida", () => {
    // Arrange
    const senha = new Senha({
      senha: "Terenc1@",
    });

    // Act
    const saida = SenhaService.validarSenha(senha);

    // Assert
    expect(true).toBe(saida);
  });

  test("Senha Inválida: sem letra maiúscula", () => {
    const senha = new Senha({
      senha: "terenc1@",
    });

    const saida = SenhaService.validarSenha(senha);

    expect(false).toBe(saida);
  });
});
