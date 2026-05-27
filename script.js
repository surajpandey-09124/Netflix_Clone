let lang=document.querySelector('.lang');
let select=document.querySelector('.select');
let eng=document.querySelector('.english');
let hindi=document.querySelector('.hindi');

lang.onclick=(e)=>{

   e.stopPropagation();

   if(select.style.display=='block'){

      select.style.display='none';

   }

   else{

      select.style.display='block';

   }

}

document.body.onclick=()=>{

   select.style.display='none';

}

let pic=document.querySelector('.pic');

let left=document.querySelector('.left');

let right=document.querySelector('.right');

function checkArrow(){

   if(pic.scrollLeft<=0){
      left.style.display='none';
   }

   else{
      left.style.display='block';
   }

   if(pic.scrollLeft + pic.clientWidth >= pic.scrollWidth){
      right.style.display='none';
   }

   else{
      right.style.display='block';
   }

}

right.onclick=()=>{

   pic.scrollLeft += 300;

   checkArrow();

}

left.onclick=()=>{

   pic.scrollLeft -= 300;

   checkArrow();

}

checkArrow();