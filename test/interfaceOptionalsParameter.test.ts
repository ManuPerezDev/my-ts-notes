interface User{
    id?: number
    name?: string
    age?: number
}

class InterfaceOptionalsParameterTest{
    private id: number
    private name: string
    private age: number

    constructor(user: User) {
        this.id = user.id || 0
        this.name = user.name || "Default Name"
        this.age = user.age || 0
    }

    getUserData(): string {
        return 'ID: ' + this.id + ' Name: ' + this.name + ' Age: ' + this.age
    }
}

describe('interface optional values', () => {
    it('should accepts all values', function () {
        const methodSign = new InterfaceOptionalsParameterTest({id: 1, name: 'Manuel', age: 28})
        expect(methodSign.getUserData()).toBe("ID: 1 Name: Manuel Age: 28")
    });

    it('should accepts only id', function () {
        const methodSign = new InterfaceOptionalsParameterTest({id: 1})
        expect(methodSign.getUserData()).toBe("ID: 1 Name: Default Name Age: 0")
    });

    it('should accepts only name', function () {
        const methodSign = new InterfaceOptionalsParameterTest({name: "Manuel"})
        expect(methodSign.getUserData()).toBe("ID: 0 Name: Manuel Age: 0")
    });

    it('should accepts id and name', function () {
        const methodSign = new InterfaceOptionalsParameterTest({id: 1, name: "Manuel"})
        expect(methodSign.getUserData()).toBe("ID: 1 Name: Manuel Age: 0")
    });
})
