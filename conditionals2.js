/* create an if else checks whether machine is switch on and puts
a message into the response variable if it isnt telling the 
user to switch the machine on*/

//machineActive = true/false;
//score 

let machineActive= true;
let response = '';
let score = 38;

if (machineActive === false) {
    response = 'turn machine on please';
}
 else {
    if (score < 0 || score >100) {
        response= 'not possible an error has occured';
    }
    else if (score > 0 && score < 19) {
        response= 'thats a terrible score';
    }
    else if( score >= 20 && score <39) {
        response= 'you know some things, but its pretty bad';
    }

    else if(score >= 40 && score <69) {
        response = 'you did a passable job not bad';
    }
    else if(score = 100) {
        response = 'wow perfect score';
    
    }
    }

console.log(response);