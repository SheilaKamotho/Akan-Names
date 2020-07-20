function yourDate() {
   var DD = document.getElementById("date").value;
   var MM = document.getElementById("month").value;
   var YY = document.getElementById("year").value;
   var CC = (YY/100);
   var gender = document.getElementById("gender").value;
 
   var dayOfWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
   console.log(dayOfWeek);
 
   var maleAkanNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"," Kwame"];
   var femaleAkanNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
   if ((gender === "male" && (DD>0 && DD<=31)&&(MM>0 && MM<=12))){
       console.log(maleAkanNames[Math.round( dayOfWeek)]);
       document.getElementById("akan-name").innerHTML= "Your Akan name is"+ "" + maleAkanNames[Math.round(dayOfWeek)];
       alert ("Your Akan name is" + "" + maleAkanNames[Math.round(dayOfWeek)]);

   } else if((gender ==="female" && (DD>0 && DD<=31)&&(MM>0 && MM<=12))){
      console.log(femaleAkanNames[Math.round(dayOfWeek)]);
      document.getElementById("akan-name").innerHTML= "Your Akan name is" + "" + femaleAkanNames[Math.round(dayOfWeek)];
      alert ("Your Akan name is"+ "" + femaleAkanNames[Math.round(dayOfWeek)]);
   } else{
       console.log("invalid input");
       document.getElementById("akan-name").innerHTML="Invalid month or date";
       alert ("Invalid month or date")
    }

   } 
 

