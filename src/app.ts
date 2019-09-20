interface IPerson {
  firstName: string
  lastName: string
  age: number
  middleName?: string
}

class Person implements IPerson {
  firstName: string
  lastName: string
  age: number
  middleName?: string | undefined
  constructor(input: IPerson) {
    this.firstName = input.firstName
    this.lastName = input.lastName
    this.age = input.age
    this.middleName = input.middleName || undefined
  }

  public getFullName = () => {
    return this.middleName ? `${this.lastName} ${this.middleName} ${this.firstName}` : `${this.lastName}${this.firstName}`
  }
}

const input: IPerson = {
  firstName: "Sewoo",
  lastName: "Cold",
  age: 29,
}

const person = new Person(input)
console.log(person.getFullName())