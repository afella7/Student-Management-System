const prompt = require('prompt-sync')(); //import prompt-sync

// base class
class Person {
    constructor(name, id) {
        if (this.constructor === Person) {
            throw new Error('Person cannot be instantiated')
        }
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

class Student extends Person {
    constructor(name, id, grades) {
        super(name, id);
        this.grades = grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }

    getDetails() {
        return `${super.getDetails()}, Grades: ${this.grades.join(', ')}`;
    }

}

const students = [];

// The add student function
function addStudent() {
    const name = prompt("Enter student name:");
    const id = prompt("Enter student ID:");
    const gradesStr = prompt("Enter grades separated by commas (e.g., 80,90,75):");
    const grades = gradesStr.split(',').map(Number);
    const newStudent = new Student(name, id, grades);
    students.push(newStudent);
    console.log("Student added successfully!");
}

// view student details function
function viewStudentDetails() {
    const id = prompt("Enter student ID:");
    const student = students.find(s => s.id === id);
    if (student) {
        console.log(student.getDetails());
    } else {
        console.log("Student not found!");
    }
}

// calculate average grade function
function calculateAverageGrade() {
    const id = prompt("Enter student ID:");
    const student = students.find(s => s.id === id);
    if (student) {
        console.log(`Average grade: ${student.getAverageGrade()}`);
    } else {
        console.log("Student not found!");
    }
}

while (true) {
    console.log("\nStudent Management System");
    console.log("1. Add student");
    console.log("2. View student details");
    console.log("3. Calculate average grade");
    console.log("4. Exit");

    const choice = prompt("Enter your choice:");

    switch (choice) {
        case '1':
            addStudent();
            break;
        case '2':
            viewStudentDetails();
            break;
        case '3':
            calculateAverageGrade();
            break;
        case '4':
            console.log("Exiting...");
            process.exit();
        default:
            console.log("Invalid choice!");
    }
}
