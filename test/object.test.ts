describe('Object should', () => {
  const guitars = {
    0: 'Gibson',
    1: 'Fender',
    2: 'Epiphone'
  }

  it('retrieve keys', async () => {
    const expectedKeys = ['0', '1', '2']
    expect(Object.keys(guitars)).toEqual(expectedKeys)
  })

  it('retrieve values', async () => {
    const expectedValues = ['Gibson', 'Fender', 'Epiphone']
    expect(Object.values(guitars)).toEqual(expectedValues)
  })

  it('retrieve keys and values', async () => {
    const expectedKeysAndValues = [['0', 'Gibson'], ['1', 'Fender'], ['2', 'Epiphone']]
    expect(Object.entries(guitars)).toEqual(expectedKeysAndValues)
  })

  it('retrieve values and keys from enum', async () => {
    enum Guitars {
      'Gibson' = 1,
      'Fender' = 2,
      'Epiphone' = 3
    }
    const expectedValues = ['Gibson', 'Fender', 'Epiphone', 1, 2, 3]
    expect(Object.values(Guitars)).toEqual(expectedValues)
  })

  it('has values', async () => {
    const guitarValues = new Set(Object.values(guitars))
    expect(guitarValues.has('Gibson')).toBeTruthy()
    expect(guitarValues.has('Fender')).toBeTruthy()
    expect(guitarValues.has('Epiphone')).toBeTruthy()
  })

  it('has keys', async () => {
    const guitarValues = new Set(Object.keys(guitars))
    expect(guitarValues.has('0')).toBeTruthy()
    expect(guitarValues.has('1')).toBeTruthy()
    expect(guitarValues.has('2')).toBeTruthy()
  })
})
