class Person {
    constructor() {
        let name;
        let age;
        this.name = name;
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}
const obj = new Person;
console.log(obj.setName("om"));
console.log(obj.getName());