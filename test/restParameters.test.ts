class RestParametersTest{
    sum(...digits: Array<number>): number{
        return digits.reduce((sum, digit) => sum + digit, 0)
    }

    multiply(...digits: Array<number>): number{
        return digits.reduce((sum, digit) => sum * digit, 1)
    }
}

describe("rest parameters test", () => {
    it('should sum', () => {
        const restParameterTest = new RestParametersTest()
        expect(restParameterTest.sum(1, 1)).toBe(2)
    });

    it('should multiply', () => {
        const restParameterTest = new RestParametersTest()
        expect(restParameterTest.multiply(1, 2, 2)).toBe(4)
    });
})