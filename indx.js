const showHideContent = function(){
    document.querySelector("#dlm").addEventListener('click', function(){
        document.querySelector("#deep").style.display = "block";
        document.querySelector("#pre").style.display = "none";
        document.querySelector("#lay").style.display = "none";
        document.querySelector("#vis").style.display = "none";


    });
    document.querySelector("#ptm").addEventListener('click', function(){
        document.querySelector("#deep").style.display = "none";
        document.querySelector("#pre").style.display = "block";
        document.querySelector("#lay").style.display = "none";
        document.querySelector("#vis").style.display = "none";

    });
    document.querySelector("#lds").addEventListener('click', function(){
        document.querySelector("#deep").style.display = "none";
        document.querySelector("#pre").style.display = "none";
        document.querySelector("#lay").style.display = "block";
        document.querySelector("#vis").style.display = "none";
    
    });
    document.querySelector("#v").addEventListener('click', function(){
        document.querySelector("#deep").style.display = "none";
        document.querySelector("#pre").style.display = "none";
        document.querySelector("#lay").style.display = "none";
        document.querySelector("#vis").style.display = "block";
        
    });
   
}
showHideContent();
