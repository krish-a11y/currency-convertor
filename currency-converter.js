
let fImage=document.querySelector(".fimage");
let tImage=document.querySelector(".timage");
let button= document.querySelector(".result");
let message=document.querySelector(".msg");
const  BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const drop= document.querySelectorAll(".drop");
const from=document.querySelector(".one");
const to=document.querySelector(".two");
let input=document.querySelector(".input");
for(let select of drop)
{
    select.classList.add("dropdown");
    for( let currCode in countryList)
    {  
        let newOption= document.createElement("option")
        newOption.innerText=currCode;
        newOption.value= currCode;
        
        if(select.name==="from"&&currCode==="USD")
            {
             newOption.selected="selected";
            }
            if(select.name==="to"&&currCode==="INR")
                {
                 newOption.selected="selected";
                }
        select.append(newOption);     
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);})
    // select.addEventListener("change",(cnty1)=>{
       
    //      exchangeRate(cnty1.target);
    // })    
 
}

function updateFlag(element)
{
    let currCode= element.value;
    if(element.name==="from")
    {
        fImage.src="https://flagsapi.com/"+countryList[currCode]+"/flat/64.png"
    }
    if(element.name==="to")
        {
            tImage.src="https://flagsapi.com/"+countryList[currCode]+"/flat/64.png"
        }
    
}
// function exchangeRate(c1,c2)
// {
    
//     let currCode=c1.value;
//     currCode = currCode.toLowerCase();
//     if(c1.name==="from"){
//     BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"+currCode+".json";
//     message.innerText="1"+ currCode;
//     const api3=currCode;
  
// }
// async function api () {
//     response1= await fetch(BASE_URL);
//     response2=await response1.json();
//    return response2
// }
// let api2=api();

// //   const api3=api2.currCode
// // console.log(currCode);
// //console.log(api3);
// if(c1.name==="to")
// {  console.log(api2);
//     console.log(currCode);
//     let x=message.innerText
//     message.innerText=message.innerText+"="+currCode;
// }
   
// }
// // async function api () {
// //     response1= await fetch(BASE_URL);
// //     response2=await response1.json();
// //    return response2
// // }
// // let api2=api()
// // console.log(api2);
button.addEventListener("click",async(ent)=>{
 ent.preventDefault();
  let inputValue=input.value;
  if(inputValue<=0)
  {
    message.innerText="amount must be>=1";
  }
  if(inputValue==="" )
  {
    message.innerText="please enter valid  value";
  }

 const  URL=`${BASE_URL}/${from.value.toLowerCase()}.json`;
  
    let response1= await fetch(URL);
    let data=await  response1.json();
    let x=data[from.value.toLowerCase()];
    let rate=x[to.value.toLowerCase()];
    message.innerText= rate*inputValue;
})
