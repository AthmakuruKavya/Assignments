const students = [
    {
        rollNumber: 2001,
        name: "Ananya Reddy",
        branch: "Computer Science",
        year: 3,
        subjectMarks: [85, 92, 78, 90, 88],
        isFromOtherState: false
    },
    {
        rollNumber: 2002,
        name: "Arjun Kumar",
        branch: "Computer Science",
        year: 2,
        subjectMarks: [78, 85, 82, 79, 91],
        isFromOtherState: true
    },
    {
        rollNumber: 2003,
        name: "Priyanka Sharma",
        branch: "Information Technology",
        year: 4,
        subjectMarks: [95, 89, 93, 87, 92],
        isFromOtherState: true
    },
    {
        rollNumber: 2004,
        name: "Ravi Teja",
        branch: "Computer Science",
        year: 3,
        subjectMarks: [73, 76, 81, 78, 85],
        isFromOtherState: false
    }
];

const toppers = [];

function avgCalc(marks){
    let totalSub = marks.length;
    let sum = marks.reduce( (acc, cVal) => acc+cVal,0);
    let avg = sum /totalSub
    return avg>=80?true:false;
}

function findBrightStudents(){
    students.map( student => {
        if((student.year==3 || student.year==4) && student.branch=="Computer Science"){
            let result = avgCalc(student.subjectMarks);
            if(result){
                toppers.push(student.name)
            }
        }
    })
}
findBrightStudents();

console.log("Toppers List: ",toppers);
