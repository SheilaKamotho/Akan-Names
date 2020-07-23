function yourDate() {
   var DD = document.getElementById("date").value;
   var MM = document.getElementById("month").value;
   var YY = document.getElementById("year").value;
   var CC = document.getElementById("century").value;
   var gender = document.getElementById("gender").value;
    
   var dayOfWeek= (( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7)+1;
   console.log(dayOfWeek);
 
   var maleAkanNames= ["Kwasi-Sunday is your day of birth", "Kwadwo-Monday is your day of birth", "Kwabena-Tuesday is your day of birth", "Kwaku-Wednesday is your day of birth", "Yaw-Thursday is your day of birth", "Kofi-Friday is your day of birth"," Kwame-Saturday is your day of birth"];
   var femaleAkanNames=["Akosua-Sunday is your day of birth", "Adwoa-Monday is your day of birth", "Abenaa-Tuesday is your day of birth", "Akua-Wednesday is your day of birth", "Yaa-Thursday is your day of birth", "Afua-Friday is your day of birth", "Ama-Saturday is your day of birth"];
  
   if ((gender === "male" && (DD>0 && DD<=31)&&(MM>0 && MM<=12))){
       console.log(maleAkanNames[Math.round( dayOfWeek)]);
       document.getElementById("akan-name").innerHTML= "Your Akan name is"+ " " + maleAkanNames[Math.round(dayOfWeek)];
       alert ("Your Akan name is" + " " + maleAkanNames[Math.round(dayOfWeek)]);

   } else if((gender ==="female" && (DD>0 && DD<=31)&&(MM>0 && MM<=12))){
      console.log(femaleAkanNames[Math.round(dayOfWeek)]);
      document.getElementById("akan-name").innerHTML= "Your Akan name is" + " " + femaleAkanNames[Math.round(dayOfWeek)];
      alert ("Your Akan name is"+ " " + femaleAkanNames[Math.round(dayOfWeek)]);
   } else{
       console.log("invalid input");
       document.getElementById("akan-name").innerHTML="Invalid month or date";
       alert ("Invalid month or date")
    }

   } 
 

