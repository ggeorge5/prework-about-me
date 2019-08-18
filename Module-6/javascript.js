
        function adjustFontSizeAndColor() {
            document.getElementById("demo").style.color = "red";
            document.getElementById("demo").style.fontSize = "25px";
        }

        function makeBoxBig(){
            document.getElementById("box").style.height = "250px";
        }

        function makeBoxBlue(){
            document.getElementById("box").style.backgroundColor = "blue";
        }

        function makeBoxFade(){
            document.getElementById("box").style.transition ="opacity 2s";
            document.getElementById("box").style.opacity = 0;
        }
        document.getElementById("button1").addEventListener("click", makeBoxBig);

        document.getElementById("button2").addEventListener("click", makeBoxBlue);
        
        document.getElementById("button3").addEventListener("click", makeBoxFade);
            
        
        document.getElementById("button4").addEventListener("click", function(){
            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.width = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.margin = "25px";
            document.getElementById("box").style.transition ="opacity 0s";
            document.getElementById("box").style.opacity = 1;
         });

