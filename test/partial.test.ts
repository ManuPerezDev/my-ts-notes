interface User{
    id: number
    name: string
    age: number
}

class PartialTest {
    private readonly id: number
    private readonly name: string
    private readonly age: number

    constructor (user: Partial<User>) {
      this.id = user.id || 0
      this.name = user.name || 'Default Name'
      this.age = user.age
    }

    getUserData (): string {
      return 'ID: ' + this.id + ' Name: ' + this.name + ' Age: ' + this.age
    }
}

describe('partial', () => {
  it('should accept all values', function () {
    const partialTest = new PartialTest({ id: 1, name: 'Manuel', age: 28 })
    expect(partialTest.getUserData()).toBe('ID: 1 Name: Manuel Age: 28')
  })

  it('should accept some values', function () {
    const partialTest = new PartialTest({ name: 'Manuel', age: 28 })
    expect(partialTest.getUserData()).toBe('ID: 0 Name: Manuel Age: 28')
  })

  it('should accept no values', function () {
    const partialTest = new PartialTest({})
    expect(partialTest.getUserData()).toBe('ID: 0 Name: Default Name Age: undefined')
  })
})
