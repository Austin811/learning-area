// rewrite inner if else into a switch

let machineActive= 'on';
let response = '';
let score = 104;

if (machineActive === 'off') {
    response = 'turn machine on please';
}
 else {
    switch (score) {
                case score < 0 || score >100:
                response = 'not possible error';
                break; 
                case  score > 0 && score < 19:
                response= 'thats a terrible score';
                break;
                
            
        }
    }

console.log(response);