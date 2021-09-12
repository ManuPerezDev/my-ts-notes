describe('Currying should', () => {
  it('Curry function should multiply', async () => {
    const firstNumberList = [1, 2, 3]
    const secondNumberList = [3, 2, 1]

    const result = firstNumberList.map(multiplyArrays(secondNumberList))

    expect(result).toStrictEqual([[3, 2, 1], [6, 4, 2], [9, 6, 3]])
  })

  function multiplyArrays (secondNumberList: number[]): (number: number) => number[] {
    return (number: number) => secondNumberList.map((secondNumber) => secondNumber * number)
  }

  it('Curry sorting array', async () => {
    const numbers = [1, 2, 3]

    const result = numbers.sort(descendent)

    expect(result).toStrictEqual([3, 2, 1])
  })

  function descendent (a: number, b: number): number {
    return b - a
  }
})
