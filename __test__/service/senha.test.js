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

  test("Senha Inválida: menos de 8 caracteres", () => {
    const senha = new Senha({
      senha: "terenc",
    });
    const saida = SenhaService.validarSenha(senha);
    expect(false).toBe(saida);
  });

  test("Senha Inválida: sem letra maiúscula", () => {
    const senha = new Senha({
      senha: "terenc1@",
    });
    const saida = SenhaService.validarSenha(senha);
    expect(false).toBe(saida);
  });

  test("Senha Inválida: sem letra minúscula", () => {
    const senha = new Senha({
      senha: "TERENC1@",
    });
    const saida = SenhaService.validarSenha(senha);
    expect(false).toBe(saida);
  });

  test("Senha Inválida: sem números", () => {
    const senha = new Senha({
      senha: "Terenci@",
    });
    const saida = SenhaService.validarSenha(senha);
    expect(false).toBe(saida);
  });

  test("Senha Inválida: sem caracteres especiais", () => {
    const senha = new Senha({
      senha: "Terenc1o",
    });
    const saida = SenhaService.validarSenha(senha);
    expect(false).toBe(saida);
  });
});
