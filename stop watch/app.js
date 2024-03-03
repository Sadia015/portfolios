      // //STOP WATCH

      // var minutes = 0
      // var second = 0
      // var milis = 0
      // var Interval
    
      // var getmin = document.getElementById('min')
      // var getsec = document.getElementById('sec') 
      // var getmili = document.getElementById('msec')
      // function start(){
      // Interval = setInterval(function(){
      //   milis++
      //   getmili.innerHTML = milis
      //   if (milis >= 100) {
      //     second++
      //     getsec.innerHTML = second
      //     milis=0
      //   }
      //   else if(second>=5 ){ 
      //   minutes++
      //   getmin.innerHTML = minutes
      //    second = 0
      //   }
      // }, 10);
      // document.getElementById('sss').disabled = true
      // }
      //  function stop(){ 
      //   clearInterval(Interval)
      //   document.getElementById('sss').disabled = false
      // }
      // function reset(){
      // minutes = 0
      // second = 0
      // milis = 0
      // getmili.innerHTML = milis
      // getsec.innerHTML = second
      // getmin.innerHTML = minutes
      // }
      window.onload = function () {
  
        var seconds = 00; 
        var tens = 00; 
        var appendTens = document.getElementById("tens")
        var appendSeconds = document.getElementById("seconds")
        var buttonStart = document.getElementById('button-start');
        var buttonStop = document.getElementById('button-stop');
        var buttonReset = document.getElementById('button-reset');
        var Interval ;
      
        buttonStart.onclick = function() {
          
          clearInterval(Interval);
           Interval = setInterval(startTimer, 10);
        }
        
          buttonStop.onclick = function() {
             clearInterval(Interval);
        }
        
      
        buttonReset.onclick = function() {
           clearInterval(Interval);
          tens = "00";
          seconds = "00";
          appendTens.innerHTML = tens;
          appendSeconds.innerHTML = seconds;
        }
        
         
        
        function startTimer () {
          tens++; 
          
          if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
          }
          
          if (tens > 9){
            appendTens.innerHTML = tens;
            
          } 
          
          if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML = seconds;
          }
        
        }
        
      
      }