// Working with modules. On this case, we create a module for creating Hogwarts' students and their scores
function studentHogwarts() {
    let privateScore = 0;
    let name = null;
  
    function changeScoreBy(points) {
        privateScore += points;
    };
/**
 * This module returns an object with some functions as values
 **/
    return {
    setName:  function (newName) {
        name = newName;
    },
    rewardStudent: function() {
        changeScoreBy(1);
    },
    penalizeStudent: function () {
        changeScoreBy(-1);
    },

    getScore: function() {
        return (name + ": " + privateScore);
    }
    };
};

let harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());