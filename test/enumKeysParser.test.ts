interface Options {
  option?: ConsoleAcceptedOptionParams
}

enum ConsoleAcceptedOptionParams {
  ConsoleOptionOne = 'OptionOne'
}

enum BusinessRealOptionParams {
  OptionOne = 'REAL_BUSINESS_VALUE_ONE'
}

class EnumKeysParserTest {
  private option: string

  parseConsoleParamToRealParam ({ option }: Options) {
    this.option = BusinessRealOptionParams[option]
  }

  getOption () {
    return this.option
  }
}

describe('enum keys transform test', () => {
  it('should parse console options to business option', () => {
    const parser = new EnumKeysParserTest()
    parser.parseConsoleParamToRealParam({ option: ConsoleAcceptedOptionParams.ConsoleOptionOne })
    expect(parser.getOption()).toBe(BusinessRealOptionParams.OptionOne)
  })

  it('should not parse console bad option to business option', () => {
    const parser = new EnumKeysParserTest()
    parser.parseConsoleParamToRealParam({})
    expect(parser.getOption()).toBe(undefined)
  })
})
