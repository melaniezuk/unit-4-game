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

/*resets the game*/
funtion reset (){
       
    $('#randomNumber').text(Random);
       
    var gemgreen=Math.floor(Math.random()*11+1)
    var gemred=Math.floor(Math.random()*11+1)
    var gemyellow=Math.floor(Math.random()*11+1)
    var gemdiamond=Math.floor(Math.random()*11+1)
       
    }

    /*adds wins to the user total*/

    var win = 0;

    function myFunction1() {
    if (test3.innerHTML == "You win!") {

    win = win + 1;

    /*adds the losses to the userTotal*/

    var lose = 0;

    function myFunction1() {
    then (test3.innerHTML == "You lose! :-(") {

    lose = lose + 1;

    /*sets up click for jewels*/

    $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
   
    $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);

    $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);

    $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);

    </script>

    

