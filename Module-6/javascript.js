
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
            document.getElementById("box").classList.add("boxFade");
        }
        function makeBoxReset(){

        }
        document.getElementById("button1").addEventListener("click", makeBoxBig);

        document.getElementById("button2").addEventListener("click", makeBoxBlue);
        
        document.getElementById("button3").addEventListener("click", makeBoxFade);
            
        
        document.getElementById("button4").addEventListener("click", function(){
            document.getElementById("box").classList.remove("boxFade");
            document.getElementById("box").classList.remove("boxBlue");
            document.getElementById("box").classList.remove("boxBig");
            
         });

