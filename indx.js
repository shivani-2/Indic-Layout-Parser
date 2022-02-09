const showHideContent = function(x){

    if(x==0)
    {
        document.querySelector("#deep").style.display = "block";  
    }
    else
    {
        document.querySelector("#deep").style.display = "none";
    }

    if(x==1)
    {
        document.querySelector("#pre").style.display = "block";  
    }
    else
    {
        document.querySelector("#pre").style.display = "none";
    }
    
    
    if(x==2)
    {
        document.querySelector("#lay").style.display = "block";        
    }
    else
    {
        document.querySelector("#lay").style.display = "none";
    }

    if(x==3)
    {
        document.querySelector("#vis").style.display = "block";          
    }
    else
    {
        document.querySelector("#vis").style.display = "none";
    }
   
}


showHideContent();