let originalBoard;
let cellNow=-1;
let gameover=0;
var output = [];
//cells variable will now contain a reference to every element with a class="cell"
const cells = document.querySelectorAll('.cell');


//Start game function call
startGame();

function startGame() {
    //sets the originalBoard to have key values from 0-80
    originalBoard = Array.from(Array(81).keys());
    
    for (let iter = 0; iter < cells.length; iter++) {
        cells[iter].innerText = '';
        //cells[iter].style.removeProperty('background-color');
        // cells[iter].addEventListener('click', turnClick, false);
    }
}
document.addEventListener("keydown", e => {
    console.log(e.key);
    if(cellNow>=0 && cellNow<=80 && gameover == 0 && ( e.key==1 || e.key==2 || e.key==3
        || e.key==4 || e.key==5 || e.key==6 || e.key==7
        || e.key==8 || e.key==9 )) {
        // {console.log(cells[cellNow].innerText);
        if(cells[cellNow].innerText==e.key) {cells[cellNow].innerText="";  }


        else {cells[cellNow].innerText=e.key;
        let op=0;
        }
    } // prints ","
});

// document.addEventListener("keydown", e => {
//     //by pressing "Q" letter on your keyboard, the bulgarian keyboard will print "," (a comma) and you will get the value of the key being pressed
//     cells[0].innerText=(e.key); // prints ","
// });

function reply_click(clicked_id)
{   
    if(clicked_id=="solve-button")
    {
        for(let i=0;i<81;i++)
        {
           output.push(cells[i].innerText);
        }
        solve_final();
        gameover=1;
    }
    if(gameover==0){
    var now = parseInt(clicked_id, 10);
    if(now==cellNow) {cellNow=-1;document.getElementById(now).style.background = 'cyan';}
    else{if(cellNow!=-1) document.getElementById(cellNow).style.background = 'cyan';
    cellNow = now; 
    document.getElementById(now).style.background = 'blue';}
    //console.log(cellNow);
}
}


solve_final()
{
    
}