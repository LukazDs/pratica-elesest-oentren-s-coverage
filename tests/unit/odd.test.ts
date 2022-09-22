import { jest } from "@jest/globals";
import { oddService } from "../../src/services/oddService";
import { secretService } from "../../src/_secret_/secretService";

jest.mock("../../src/_secret_/secretService", () => {});

describe("Teste oddService", () => {
  it("Deve retornar 'maybe not, who knows?' em caso de secretService ser verdadeiro", async () => {
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(() => {
      return true;
    });

    const result = oddService.isReallyOdd(1);

    expect(result).toBe("maybe not, who knows?");
  });
  it("Deve retornar 'Im not sure...' em caso de secretService ser falso", async () => {
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(() => {
      return false;
    });

    const result = oddService.isReallyOdd(1);

    expect(result).toBe("Im not sure...");
  });
});
