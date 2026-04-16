
describe("Senha", () => {
  test("Teste de senha Válida", () => {
    // Arrange
    const usuario = new Senha({
      senha: "Terenc1@",
    });

    // Act
    const saida = SenhaService.validarSenha(senha);

    // Assert
    expect(true).toBe(saida);
  });
});
