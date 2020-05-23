class Person{
    age: any;
    name: string;

    constructor(){
        this.name = "om prakash";
        this.age = "23";
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}
const obj = new Person;
console.log(obj.getName);
console.log(obj.getAge);