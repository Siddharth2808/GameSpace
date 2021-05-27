let originalBoard;
let cellNow=-1;
let gameover=0;
//cells variable will now contain a reference to every element with a class="cell"
const cells = document.querySelectorAll('.cell');

var input = [
    -1,-1,-1,-1,8,-1,-1,-1,9,
-1,-1,-1,4,2,6,1,3,-1,
-1,-1,-1,9,-1,1,5,-1,6,
2,-1,-1,8,3,-1,9,7,4,
3,-1,9,-1,6,-1,-1,8,-1,
-1,-1,-1,2,9,4,-1,-1,-1,
-1,5,6,3,1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,8,-1,7,
-1,8,4,-1,5,2,-1,1,-1
];

var output = [
    6,1,2,5,8,3,7,4,9,
5,9,7,4,2,6,1,3,8,
4,3,8,9,7,1,5,2,6,
2,6,1,8,3,5,9,7,4,
3,4,9,1,6,7,2,8,5,
8,7,5,2,9,4,3,6,1,
7,5,6,3,1,8,4,9,2,
1,2,3,6,4,9,8,5,7,
9,8,4,7,5,2,6,1,3

];


//Start game function call
startGame();

function startGame() {
    //sets the originalBoard to have key values from 0-80
    originalBoard = Array.from(Array(81).keys());
    //iterate over all cells 
    //console.log(cells.length);
    for (let iter = 0; iter <= 80; iter++)
    {    //console.log(input[iter]);
         if(input[iter]!=-1) {cells[iter].innerText = input[iter];document.getElementById(iter).style.color = 'grey';}
         else cells[iter].innerText = "";
    }
    // for (let iter = 10; iter < cells.length; iter++) {
    //     cells[iter].innerText = '';
    //     //cells[iter].style.removeProperty('background-color');
    //     // cells[iter].addEventListener('click', turnClick, false);
    // }
}
document.addEventListener("keydown", e => {
    
    if(cellNow>=0 && cellNow<=80 && input[cellNow]==-1 && gameover ==0 && ( e.key==1 || e.key==2 || e.key==3
        || e.key==4 || e.key==5 || e.key==6 || e.key==7
        || e.key==8 || e.key==9 )) {
        // {console.log(cells[cellNow].innerText);
        if(cells[cellNow].innerText==e.key) {cells[cellNow].innerText="";  }


        else {cells[cellNow].innerText=e.key;
        let op=0;
        for (let iter = 0; iter <= 80; iter++)
        {
         if(output[iter]!=parseInt(cells[iter].innerText, 10)) {//console.log("yaha ",iter);
         op=1;break;}
        }
        if(op==0) {document.getElementById(cellNow).style.background = 'cyan';document.getElementById("result").innerText="You Win";gameover=1;}
        }
    } // prints ","
});

// document.addEventListener("keydown", e => {
//     //by pressing "Q" letter on your keyboard, the bulgarian keyboard will print "," (a comma) and you will get the value of the key being pressed
//     cells[0].innerText=(e.key); // prints ","
// });

function reply_click(clicked_id)
{   if(gameover==0){
    var now = parseInt(clicked_id, 10);
    if(input[now]==-1){
    if(now==cellNow) {cellNow=-1;document.getElementById(now).style.background = 'cyan';}
    else{if(cellNow!=-1) document.getElementById(cellNow).style.background = 'cyan';
    cellNow = now; 
    document.getElementById(now).style.background = 'blue';}
    //console.log(cellNow);
}
}
}