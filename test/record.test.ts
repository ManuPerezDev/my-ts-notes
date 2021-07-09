class RecordTest {
  get (key:string): string {
    const myRecord: Record<string, () => string> = {
      teapot: this.imATeaPot,
      ironman: this.iAmIronMan,
      batman: this.imBatman
    }

    const func = myRecord[key]

    return func()
  }

  private imATeaPot (): string {
    return "I'm a teapot!"
  }

  private iAmIronMan (): string {
    return 'I am Ironman!'
  }

  private imBatman (): string {
    return "I'm Batman!"
  }
}

describe('record test', () => {
  it('should expect 418', () => {
    const recordTest = new RecordTest()
    expect(recordTest.get('teapot')).toBe("I'm a teapot!")
  })

  it('should snap infinite gauntlet', () => {
    const recordTest = new RecordTest()
    expect(recordTest.get('ironman')).toBe('I am Ironman!')
  })

  it('should become vengeance', () => {
    const recordTest = new RecordTest()
    expect(recordTest.get('batman')).toBe("I'm Batman!")
  })
})
