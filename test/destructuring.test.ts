type myUser = {
    id: number
    name: string
    age: number
}

class DestructuringTest{
    private user: myUser = {
        id: 0,
        name: "",
        age: undefined
    }

    setIdAndName({id, name}: myUser){
        this.user.id = id
        this.user.name = name
    }

    getIdAndName(): string{
        return "ID: " + this.user.id + " Name: " + this.user.name
    }

    getAge():number {
        return this.user.age
    }
}

describe("destructuring test", () => {
    it("should process some values", () =>{
        const destructuring = new DestructuringTest()
        destructuring.setIdAndName({id: 1, name: "Manuel", age: 28})
        expect(destructuring.getIdAndName()).toBe("ID: 1 Name: Manuel")
    })

    it("should get undefined age", () =>{
        const destructuring = new DestructuringTest()
        destructuring.setIdAndName({id: 1, name: "Manuel", age: 28})
        expect(destructuring.getAge()).toBe(undefined)
    })
})