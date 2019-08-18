
        function adjustFontSizeAndColor() {
            document.getElementById("demo").classList.add("headingBig");
        }


        function makeBoxBig(){
            
            document.getElementById("box").classList.add("boxBig");
        }

        function makeBoxBlue(){
            document.getElementById("box").classList.add("boxBlue");
        }

        function makeBoxFade(){
            document.getElementById("box").style.transition ="opacity 2s";
            document.getElementById("box").style.opacity = 0;
        }

        function makeBoxReset(){

        }
        document.getElementById("button1").addEventListener("click", makeBoxBig);

        document.getElementById("button2").addEventListener("click", makeBoxBlue);
        
        document.getElementById("button3").addEventListener("click", makeBoxFade);
            
        
        document.getElementById("button4").addEventListener("click", function(){
            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.margin = "25px";
            document.getElementById("box").style.transition ="opacity 0s";
            document.getElementById("box").style.opacity = 1;
         });

