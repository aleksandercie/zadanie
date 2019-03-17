function required(){
   
   event.preventDefault();
   
   /* Variables*/
   
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var number = document.getElementById('number').value;
   var city = document.getElementById('city').value;
   var firstCheck = document.getElementById('first-check').checked;
   var secondCheck = document.getElementById('second-check').checked;
   
       
   /* Check name value */
   
   if (name == '' ){
      document.getElementById('input-name').innerHTML = "Proszę wypełnić pole";
      
   } 
   
   /* Check email value */
   
   if (email == ''){
      document.getElementById('input-email').innerHTML = "Proszę wypełnić pole";
   }
   
   /* Check number value and length */
   if (number == '' ){
      document.getElementById('input-number').innerHTML = "Proszę wypełnić pole";
   }else if (number.length < 6) {
      document.getElementById('input-number').innerHTML = "Proszę podać poprawny numer";
   }
   
   /* Check city value */
   
   if (city == 'Miasto'){
      document.getElementById('input-city').innerHTML = "Proszę wypełnić pole";
   }
   
   /* Check first agreement */
   
   if (firstCheck == false) {
          document.getElementById('input-first-check').innerHTML = "Proszę wyrazić zgodę";
   }
   
   /* Check second agreement*/
   
   if (secondCheck == false) {
          document.getElementById('input-second-check').innerHTML = "Proszę wyrazić zgodę";
   }
}