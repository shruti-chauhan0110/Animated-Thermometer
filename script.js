let icon = document.getElementById('icon');
const Btn=document.getElementById('btn');
function initialLoad(){
    icon.innerHTML = '<i class="fa fa-thermometer-0"></i>';
    icon.style.color='#FFFFFF';

}

function tempload() {
    
    

    setTimeout(()=>{
        icon.innerHTML='<i class="fa fa-thermometer-1"></i>';

    },1000)
    setTimeout(()=>{
        icon.innerHTML='<i class="fa fa-thermometer-2"></i>';
        icon.style.color='#FFA533';

    },2000)
    setTimeout(()=>{
        icon.innerHTML='<i class="fa fa-thermometer-3"></i>';
        icon.style.color='#FF7A33';

    },3000)
    setTimeout(()=>{
        icon.innerHTML='<i class="fa fa-thermometer-4"></i>';
        icon.style.color='#FF5B33';
        

    },4000)
    setInterval(() => {
       initialLoad(), tempload()
        
       }, 5000);
    
    
   }
   
   
initialLoad();
   Btn.addEventListener('click',tempload);
  
   

