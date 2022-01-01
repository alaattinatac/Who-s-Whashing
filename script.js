let student = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"];

function whoIsWashing(student) {
    let numberOfStudent = student.length;
    let random = Math.floor(Math.random() * numberOfStudent);
    let randomStudent = student[random];

    console.log(`You are ${numberOfStudent} people today and:`);
    return randomStudent + " is going to wash today!";
}

console.log(whoIsWashing(student));