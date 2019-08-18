
        function myFunction() {
            document.getElementById("demo").style.color = "red";
            document.getElementById("demo").style.fontSize = "25px";
        }
            document.getElementById("button1").addEventListener("click", function(){
            document.getElementById("box").style.height = "250px";
        });
            document.getElementById("button2").addEventListener("click", function(){
            document.getElementById("box").style.backgroundColor = "blue";
        });
            document.getElementById("button3").addEventListener("click", function(){
            document.getElementById("box").style.transition ="opacity 2s";
            document.getElementById("box").style.opacity = 0;
        });
            document.getElementById("button4").addEventListener("click", function(){
            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.width = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.margin = "25px";
            document.getElementById("box").style.transition ="opacity 0s";
            document.getElementById("box").style.opacity = 1;
         });

