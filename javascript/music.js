  window.onload = function(){
             setInterval("toggleSound()",1);
        }
    function toggleSound() {
                var music = document.getElementById("music");//��ȡID  
                if (music.paused) { //�ж��Ƿ񲥷�  
                    music.paused=false;
                    music.play(); //û�оͲ��� 
                }    
        }