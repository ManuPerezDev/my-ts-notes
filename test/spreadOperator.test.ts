interface Operator {
  valueOne: string,
  valueTwo: string,
  valueThree: string,
  valueFour: string,
  valueFive: string,
}

class SpreadOperatorTest {
  getOperator (): Operator {
    const variables = {
      valueOne: 'One',
      valueTwo: 'Two',
      valueThree: 'Three'
    }
    const operator: Operator = {
      ...variables,
      valueFour: 'Four',
      valueFive: 'Five'
    }

    return operator
  }
}

describe('Spread operator test', () => {
  it('should return operator', () => {
    const spreadOperatorTest = new SpreadOperatorTest()
    expect(spreadOperatorTest.getOperator()).toStrictEqual({
      valueOne: 'One',
      valueTwo: 'Two',
      valueThree: 'Three',
      valueFour: 'Four',
      valueFive: 'Five'
    })
  })
})
