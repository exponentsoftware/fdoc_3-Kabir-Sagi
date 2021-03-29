let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

//Destructuring Student array 

let [Name, skills, scores] = student;
console.log(Name) 
console.log(skills);
console.log(scores);
console.log(skills[2],":", scores[2])
console.log(skills[3],":", scores[3])

//  function that convertArrayToObject which can convert the array to a structured object.

var students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(){
   
    let obj = [];
    obj.push(students[0][0]);
    obj.push(students[0][1]);
    obj.push(students[0][2]);
}
// console.log(obj)
convertArrayToObject(students)


const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// Copy the student1 object to newStudent without mutating the original object.

console.log(student1);
const newStudent = Object.create(student1);
console.log(newStudent);

newStudent.skills.frontEnd.push({'skill':'Bootstrap','level':8});

newStudent.skills.backEnd.push({'skill':'Express','level':9});

newStudent.skills.dataBase.push({'skill':'SQL','level':8});

newStudent.skills.dataScience.push('SQL');

console.log(newStudent.skills);
