function createClassRoom (numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    };
    let students = [];
    for (let i = 0; i < students.length; i++ ) {
        student[i] = studentSeat(i + 1);
    };
    return students;
};
let classRoom = createClassRoom(10);