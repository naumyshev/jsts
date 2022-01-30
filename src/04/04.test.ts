test("should take man older then 90", () => {

    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test("should take cheap courses", () => {


        const courses = [
            {title: 'CSS', price: 110},
            {title: 'JS', price: 200},
            {title: 'React', price: 150}
        ]

        const cheapCourses = courses.filter(course => course.price < 160)

        expect(cheapCourses.length).toBe(2)
        expect(cheapCourses[0].title).toBe('CSS')
        expect(cheapCourses[1].title).toBe('React')

    }
)

test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)


})