$( document ).ready(funtion(){

/* Select a random number */
var arr = []
while(arr.length < 8){
    var randomnumber = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
document.write(arr);

/*append random number to the randomNumber id in the html doc*/
$('#randomNumber').text(Random);

/*Setting up random numbers for each jewel*/
var gemgreen=Math.floor(Math.random()*11+1)
var gemred=Math.floor(Math.random()*11+1)
var gemyellow=Math.floor(Math.random()*11+1)
var gemdiamond=Math.floor(Math.random()*11+1)

/*Declaring variables for tallies*/
var userTotal= 0;
var wins= 0;
var losses= 0;

