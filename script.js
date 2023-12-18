let boxes=document.querySelectorAll(".box");
let container=document.querySelector(".container");
let newgam=document.querySelector(".newgame");
let msg=document.querySelector(".con");
let go=document.querySelector(".restart");

const winningpartten=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let turn=true;
// console.log(boxes)
boxes.forEach((box) => {
    
        box.addEventListener("click",()=>
       { if(turn){
            box.innerText="x";
            // console.log("button was clicked");
            turn=false;
        }else{
            box.innerText="o";
            turn=true;

        }
        box.disabled=true;
        checkwinner();
        cheakdraw();
     } );
  
});
const checkwinner=()=>{
    for(let partten of winningpartten){
        let pos2=boxes[partten[1]].innerText;
        let pos3=boxes[partten[2]].innerText;
        let pos1=boxes[partten[0]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3)
            {
                console.log(`winner is player: ${pos1}`);
              
                newgam.classList.remove("hide");
                msg.innerText=`congratulation winner is ${pos1}`;
                container.classList.add("hide");


            }
           
        }
       
    }
    
}
// const newgame=()=>{
//     newgam.classList.remove("hide");
// msg.innerText=`congratulation winner is ${pos1}`;
// }


const cheakdraw=()=>{
    // for(let box of boxes)
    //   {
   
       
        if(boxes[0].disabled===true
            &&boxes[1].disabled===true&&
            boxes[2].disabled===true&&
            boxes[3].disabled===true&&
            boxes[4].disabled===true&&
            boxes[5].disabled===true&&
            boxes[6].disabled===true&&
            boxes[7].disabled===true&&
            boxes[8].disabled===true)
        {
            newgam.classList.remove("hide");
                msg.innerText=`the game is draw`;
                container.classList.add("hide");
        }
  // }
    }
    const resetgame=()=>{
        turn=true;
       for(let box of boxes)
       {
        box.disabled=false;
        box.innerText="";
       }
        newgam.classList.add("hide");
        container.classList.remove("hide");
    }
    go.addEventListener("click",()=>{
        resetgame();
    })
