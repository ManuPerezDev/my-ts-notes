interface User{
    id: number
    name: string
    age: number
}

class DefaultSignTest{
    private id: number
    private name: string
    private age: number

    constructor(id: number = 0, name: string = "Default Name by constructor", age: number = 0) {
        this.id = id
        this.name = name
        this.age = age
    }

    private defaultUser = {
        id: 0,
        name: "Default Name by method",
        age: 0
    }

    setUserData(user: User = this.defaultUser){
        this.id = user.id
        this.name = user.name
        this.age = user.age
    }

    getUserData(): string {
        return 'ID: ' + this.id + ' Name: ' + this.name + ' Age: ' + this.age
    }
}

describe('default method sign', () => {
    it('should accept all values by constructor', function () {
        const methodSign = new DefaultSignTest(1, 'Manuel', 28)
        expect(methodSign.getUserData()).toBe("ID: 1 Name: Manuel Age: 28")
    });

    it('should accept default values by constructor', function () {
        const methodSign = new DefaultSignTest()
        expect(methodSign.getUserData()).toBe("ID: 0 Name: Default Name by constructor Age: 0")
    });

    it('should accept all values by method', function () {
        const methodSign = new DefaultSignTest()
        methodSign.setUserData({id: 1, name: "Manuel", age: 28})
        expect(methodSign.getUserData()).toBe("ID: 1 Name: Manuel Age: 28")
    });

    it('should accept default values by method', function () {
        const methodSign = new DefaultSignTest()
        methodSign.setUserData()
        expect(methodSign.getUserData()).toBe("ID: 0 Name: Default Name by method Age: 0")
    });
})

