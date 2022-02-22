import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSCPE",
    "CEIT",
    "Gerard",
    20,
    "MALE",
    "PASAY CITY"
);

const student2 = new Student(
    "2015-105868",
    "BSCPE",
    "CEIT",
    "Erika",
    20,
    "MALE",
    "PASAY CITY"
);

const student3 = new Student(
    "2015-105869",
    "BSCPE",
    "CEIT",
    "Luren",
    20,
    "MALE",
    "PASAY CITY"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);

console.log(studentList.getStudents());
console.log(studentList.updateCourse("2015-105867", "BSIT"));
console.log(studentList.updateCollege("2015-105868","College of Computer Studies"));
console.log(studentList.updateAddress("2015-105869", "Binangonan, Rizal"));