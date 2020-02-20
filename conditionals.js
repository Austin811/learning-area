let season = '//current season'
let response = ''//will store a response 
// that will be printed to the output panel

/* create a conditional that checks whether 
season contains the string "summer" and if so 
assigns a string to response that gives the user
an apporpriate message about the season.*/
season = 'fall'
if (season=== 'summer'){
    response = 'its beachtime!';
} else if (season ==='winter'){
    response= 'its cold outside';
    
} else { 
    response= 'dunno what the season is';
}

console.log(response)