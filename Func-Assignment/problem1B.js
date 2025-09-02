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
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;
let classAvg = 0;
let otherStateAvg = 0;
let count = 0;

function avgCalc(marks, otherState){
    let totalSub = marks.length;
    let sum = marks.reduce( (acc, cVal) => acc+cVal,0);
    let avg = sum /totalSub
    otherStateAvg = otherState? otherStateAvg+avg: otherStateAvg+0;
    count = otherState?count+1 : count+0;
    if(avg>=90){
        gradeA++;
    }else if(avg>=80){
        gradeB++;
    }
    else if(avg>=70){
        gradeC++;
    }else if(avg>=60){
        gradeD++;
    }else{
        gradeF++;
    }
    return avg;
}

function totalAvg(){
    students.map(student => {
        classAvg = classAvg + avgCalc(student.subjectMarks,student.isFromOtherState)
    })
}
totalAvg();


const reportCard = {
    totalStudents : students.length,
    classAverageMarks : classAvg/students.length,
    gradeCount:{
        A : gradeA,
        B : gradeB,
        C : gradeC,
        D : gradeD,
        F : gradeF
    },
    outOfStateStudents:{
        count : count,
        theirAverageMarks:otherStateAvg/count
    }
}
console.log(reportCard);



