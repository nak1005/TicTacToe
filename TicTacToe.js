/*Final Exam - Part 02*/
/*Nikki Kudamik*/

var currentPlayer = prompt('Who is The Current Player X=1 O=2');
if(currentPlayer == 1) {
    document.getElementById('turn').innerHTML = 'X Turn Now';
}
else {
    document.getElementById('turn').innerHTML = 'O Turn Now';
}

var grid = new Array(9);
function resetCell(){
    for(i=0;i<9;i++){
        grid[i]=Math.pow(2, i);
    }
}
document.addEventListener('load', resetCell());
var counter = 0;
var xscore, oscore;

function clickCell(x){
    counter++;
    if(grid[x]=='X' || grid[x] == 'O' || grid[x] == 'W'){
        alert('Try Again OR Start New Game!!!');
        counter--;
    }
    else if(currentPlayer == 1){
        document.getElementById(x).style.backgroundColor='green';
        document.getElementById(x).innerHTML = 'X';
        grid[x]='X';
        if(checkWinner() == true){
            alert('X is the Winner');
            disableCell();
            xscore = parseFloat(document.getElementById('xscore').innerHTML) + 1;
            document.getElementById('xscore').innerHTML = xscore;
        }
        if(checkWinner() == false && counter%9 == 0){
            alert('Draw');
        }
        currentPlayer = 2;
        document.getElementById('turn').innerHTML = 'O Turn Now';
    }
    else{
        document.getElementById(x).style.backgroundColor = 'midnightblue';
        document.getElementById(x).innerHTML = 'O';
        grid[x] = 'O';
        if(checkWinner() == true){
            alert('O is the Winner')
            disableCell();
            oscore = parseFloat(document.getElementById('oscore').innerHTML) + 1;
            document.getElementById('oscore').innerHTML = oscore;
        }
        if(checkWinner() == false && counter%9 == 0){
            alert('Draw');
        }
        currentPlayer = 1;
        document.getElementById('turn').innerHTML = 'X Turn Now'; //14-7
    }
}
var x;
function checkWinner(){
    var winner = false;
    compare(0, 1, 2)? true:false;
    compare(0, 4, 8)? true:false;
    compare(0, 3, 6)? true:false;
    compare(1, 4, 7)? true:false;
    compare(2, 4, 6)? true:false;
    compare(2, 5, 8)? true:false;
    compare(3, 4, 5)? true:false;
    compare(6, 7, 8)? true:false;

    function compare(a, b, c){
        if(grid[a] == grid[b] && grid[a] == grid[c]){
            winner = true;
        }
        return winner;
    }
    return winner;       
}

function disableCell(){
    for(i=0; i<9; i++){
        if(grid[i] == Math.pow(2, i)){
            document.getElementById(i).style.backgroundColor ='black';
            document.getElementById(i).innerHTML = 'W';
            grid[i]='W';
        }
    }
    counter = 0;
}
function resetGame(){
    for(i=0;i<9;i++){
        grid[i] = 0;
        document.getElementById(i).style.backgroundColor = 'cadetblue';
        document.getElementById(i).innerHTML = '';
    }
    resetCell();
}
function newGame(){
    location.reload();
}
