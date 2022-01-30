import {student, StudentType} from "../02/02";

export  const addSkill = (student: StudentType, skill: string) =>  {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export  const makeStudentActive = (student: StudentType) =>  {
    student.isActive = true
}

export  const doesStudentLivesIn = (st: StudentType, city: string) =>  {
    return st.address.city.title === city
}