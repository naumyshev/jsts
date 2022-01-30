import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Aleksander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Aleksander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test('should get correct greeting messages', () => {
    const helloMessages = createGreetingMessage(people)

    expect(helloMessages.length).toBe(3)
    expect(helloMessages[0]).toBe('Hello Andrew. Welcome to IT-Incubator!')
    expect(helloMessages[1]).toBe('Hello Aleksander. Welcome to IT-Incubator!')
    expect(helloMessages[2]).toBe('Hello Dmitry. Welcome to IT-Incubator!')


})