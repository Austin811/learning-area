let machineActive = true;//indicator on or off
let pwd = 'cheese';//contains login password
let machineResult;/* stores a response prints output if machine
is turned on or not */
let pwdResult;


//do this in a single line
//ternary (condition) ? if true run this: else run this
(pwd=== 'cheese') ? pwdResult = 'login successful':pwdResult ='login fail'
console.log(pwdResult);