const studentsArr = [
    {
        name: 'Mike',
        grade: 75,
    },
    {
        name: 'Emma',
        grade: 83,
    },
    {
        name: 'Seth',
        grade: 66,
    },
];

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent) =>
        total + currentStudent.grade, 0);
    return totalGrades / studentsArr.length;
}

console.log(calculateClassAverage(studentsArr));
