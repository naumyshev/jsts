export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Aleksander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const devs = people.map(men => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: men.name.split(" ")[0],
    lastName: men.name.split(" ")[1]
}))

const helloMessages = people.map(men => `Hello ${men.name.split(' ')[0]}. Welcome to IT-Incubator!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(men => `Hello ${men.name.split(' ')[0]}. Welcome to IT-Incubator!`)
}