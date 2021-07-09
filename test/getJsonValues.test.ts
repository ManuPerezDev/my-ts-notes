const data = require('../resources/data.json')

type characters = {
  heroes: Array<{name: string, age: number, secretIdentity: string, powers: Array<string>}>,
  villains: Array<{name: string, age: number, secretIdentity: string, powers: Array<string>}>
}

class GetJsonValuesTest {
  getChars (type: string): Array<{name: string, age: number, secretIdentity: string, powers: Array<string>}> {
    return data[type]
  }

  getAll (): characters {
    return data
  }

  getOlderHero () {
    const heroes = this.getChars('heroes')
    return heroes.reduce((older, current) => current.age > older.age ? current : older)
  }
}

describe('GetJsonValueTest', () => {
  it('should get heroes', () => {
    const getJsonValueTest = new GetJsonValuesTest()
    expect(getJsonValueTest.getChars('heroes').length).toBe(3)
  })

  it('should get villains', () => {
    const getJsonValueTest = new GetJsonValuesTest()
    expect(getJsonValueTest.getChars('villains').length).toBe(2)
  })

  it('should get all chars', () => {
    const getJsonValueTest = new GetJsonValuesTest()
    expect(getJsonValueTest.getAll().heroes.length).toBe(3)
    expect(getJsonValueTest.getAll().villains.length).toBe(2)
  })

  it('should return older hero', () => {
    const getJsonValueTest = new GetJsonValuesTest()
    expect(getJsonValueTest.getOlderHero().name).toBe('Eternal Flame')
  })
})
