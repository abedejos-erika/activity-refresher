import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }


    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
        // let valid = false;

        // for (let index = 0; index < this.students.length; index++) {
        //     const element = this.students[index];

        //     if (element.studentId === id) {
        //         valid = true;
        //     }
        // }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }

    updateCourse(id: string, courseName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.course = courseName;
            return student;
        }

        return "Student id doesnt exists";

    }

    updateCollege(id: string, collegeName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.college = collegeName;
            return student;
        }

        return "Student id doesnt exists";

    }

    updateAddress(id: string, address: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.address = address;
            return student;
        }

        return "Student id doesnt exists";

    }

    returnstudent(id:string){
    const student = ['student1', 'student2', 'student3'];

    //console.log(student.length);
    }

   // deletestudent(id:string){
    //const student = ['student1', 'student2', 'student3'];
    //student.splice(0);
    //console.log(student);

    deletestudent(id: string) {
    let student = this.students.find(element => element.studentId === id);

    if (student) {
        //student.splice(0);
    }

    return "Student id doesnt exists";

}
}
