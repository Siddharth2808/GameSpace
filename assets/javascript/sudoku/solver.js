let originalBoard;
let cellNow=-1;
let gameover=0;
var output = [];
let nowop;
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
            if(cells[i].innerText!="") output.push(parseInt(cells[i].innerText,10));
            else output.push(-1);
        }
        if(cellNow!=-1) document.getElementById(cellNow).style.background = 'cyan';
        gameover=1;
        solve_final();
        
    }
    if (gameover == 0) {
        var now = parseInt(clicked_id, 10);
        
            if (now == cellNow) { if(cells[cellNow].innerText=="") {document.getElementById(now).style.background = 'white';}
                else {document.getElementById(now).style.background = 'cyan';} cellNow = -1;}
            else {
                if (cellNow != -1) { if(cells[cellNow].innerText=="") {document.getElementById(cellNow).style.background = 'white';}
                else {document.getElementById(cellNow).style.background = 'cyan';}}
                cellNow = now;
                document.getElementById(now).style.background = 'blue';
            }
            //console.log(cellNow);
        
    }
}
function isValidPlace(num)
{   
    let a=nowop%9; let b = nowop-a;let c,d;
    c=(b/9)-((b/9)%3);d=(a)-((a)%3);
    //console.log("a=",a,"b=",b);
    for(let i=b;i<b+9;i++)
    {
        if(output[i]===num && i!=nowop) {return false;}
    }
    for(let i=a;i<=a+72;i+=9)
    {
        if(output[i]===num && i!=nowop) {return false;}
    }
    for(let k=c;k<c+3;k++)
    {
        for(let j=d;j<d+3;j++)
        {
             let i=k*9+j;
             if(output[i]===num && i!=nowop) {return false;}
        }
    }
    return true;
}


function findEmptyPlace()
{
    for( nowop=0;nowop<81;nowop++)
    {
        if(output[nowop]==-1)
        {
            return true;
        }
    }
    return false;
}


function solve_sudoku()
{
    if (!findEmptyPlace())
       return true;
       let temp=nowop;
       console.log(nowop);
       for (let num = 1; num <= 9; num++){ 
           nowop=temp;
        if (isValidPlace(num)){ 
           output[nowop] = num;
           if (solve_sudoku()) {return true;}
              output[nowop] = -1;
        }
     }
    return false;
}

function checksyntex()
{
    for( let i=0;i<81;i++)
    {nowop=i;
        if(output[i]!=-1)
        {
            if(!isValidPlace(output[i])) {nowop=0;return false;}
        }
    }
    nowop=0;
    return true;
}


function solve_final()
{
    if(checksyntex()==true){
    if (solve_sudoku() == true)
    {
        document.getElementById("result").innerText="Yay sucessfully able to find solution";
         for(let i=100;i<=180;i++)
         {
             document.getElementById(i).innerText=output[i-100];
         }
    }
    else
    {
        document.getElementById("nosol").innerText="No Solution Found";
        
    }
}
else
{
    document.getElementById("nosol").innerText="No solution found";
}
}

