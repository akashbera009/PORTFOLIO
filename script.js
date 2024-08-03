document.addEventListener("DOMContentLoaded", function() {
    const textElement1 = document.querySelector('.text');
    const textElement2=document.querySelector('.text2');
    const textElement3=document.querySelector('.text3');
    const textContent1 = textElement1.textContent;
    const textContent2 = textElement2.textContent;
    const textContent3 = textElement3.textContent;
    textElement1.innerHTML = textContent1.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
    textElement2.innerHTML = textContent2.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
    textElement3.innerHTML = textContent3.split('').map((char, index) =>
        char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    ).join('');
});


//navbar    
let navList= document.querySelectorAll('.navbar ul li a')
navList.forEach((ele)=>{
    ele.style.color="white"
    console.log(ele.innerHTML);
})
navList[0].style.color="#66fcf1"
let element=document.querySelector('.navbar ul')
element.addEventListener('click',(e)=>{
    let navElement= e.target.innerHTML
    
    navList.forEach((ele)=>{
        if(ele.innerHTML===navElement){
            ele.style.color="#66fcf1"
        }else{
            ele.style.color="white"
        }
    })
    console.log(navElement);
})

// message sent 




// zoom blur 
// function toggle(){
//     let blur=document.querySelector('#blur')
//     blur.classList.toggle('active')
//     let popup=document.querySelector('.popup')
//     popup.classList.toggle('active')
// }
// // zoom 
function zoomit(element){
    element.classList.toggle('zoomed_view')
    
    // let blur=document.querySelector('#blur')
    // blur.classList.toggle('active')
//     let popup=document.querySelector('.popup')
//     popup.classList.toggle('active')
}
let disp_block= document.querySelector('.sent_success')
let sent_button=document.querySelector('#sent_email')

let textarea=document.querySelector('#shortMessage').value
let email=document.querySelector('#sender_email').value  
let name=document.querySelector('#sender_name').value
let subject=document.querySelector('#sender_subject').value
 
sent_button.addEventListener('click',()=>{
    //   console.log(textarea,email);
       
    // if(textarea!='' && email!=''){
       disp_block.classList.toggle('sent_effect')

      if(sent_button.innerHTML!="Close"){
          sent_button.innerHTML="Close"
          sent_button.style.color-"red"
       }
       else if (sent_button.innerHTML==="Close"){
          sent_button.innerHTML='Send <i class="far fa-paper-plane"></i>'
       }
    // }
    //   else{
    //     disp_block.classList.toggle('sent_effect')
    //     disp_block.innerHTML='Please enter your email and type some message '
        
    //   }
     
})
