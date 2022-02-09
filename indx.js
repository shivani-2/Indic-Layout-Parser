const showHideContent = function(x){

    if(x==0)
    {
        document.querySelector("#dlm").addEventListener('click', function(){
            document.querySelector("#deep").style.display = "block";  
            // document.getElementById('deephtml').innerHTML;
        });
    }
    else
    {
        document.querySelector("#deep").style.display = "none";
    }

    if(x==1)
    {
        document.querySelector("#ptm").addEventListener('click', function(){
            document.querySelector("#pre").style.display = "block";  
            // document.getElementById('deephtml').innerHTML;
        });
    }
    else
    {
        document.querySelector("#pre").style.display = "none";
    }
    
    
    if(x==2)
    {
        document.querySelector("#lds").addEventListener('click', function(){
            document.querySelector("#lay").style.display = "block";        
        });
    }
    else
    {
        document.querySelector("#lay").style.display = "none";
    }

    if(x==3)
    {
        document.querySelector("#v").addEventListener('click', function(){
            document.querySelector("#vis").style.display = "block";          
        });
    }
    else
    {
        document.querySelector("#vis").style.display = "none";
    }
   
}


showHideContent();
