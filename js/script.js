var date = document.getElementsByName ("date")
var month = document.getElementsByName ("month")
var year = document.getElementsByName ("year")
var form = document.getElementsByTagName ("form")
var gender = document.getElementsByName ("gender")

    if (date < 1 || date > 31)
    console.log ("Invalid date");
    if (month < 1 || month > 12)
    console.log ("Invalid month");


 var century = math.round((year)/100)
 dayOfWeek = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )%7

 if (gender === male && dayOfWeek === 0) {
     console.log("Your birth day was Sunday. Your name is Kwasi")
 } else if (gender === male && dayOfWeek === 1) {
    console.log ("Your birth day was Monday. Your name is Kwadwo")
 } else if (gender === male && dayOfWeek === 2) {
    console.log ("Your birth day was Tuesday. Your name is Kwabena")
 }else if (gender === male && dayOfWeek === 3) {
    console.log ("Your birth day was Wednesday. Your name is Kwaku")
 }else if (gender === male && dayOfWeek === 4) {
        console.log ("Your birth day was Thursday. Your name is Yaw")
 } else if (gender === male && dayOfWeek === 5) {
    console.log ("Your birth day was Friday. Your name is Kofi")
 }else if (gender === male && dayOfWeek === 6) {
    console.log ("Your birth day was Saturday. Your name is Kwame")
 }

 if (gender === female && dayOfWeek === 0) {
    console.log("Your birth day was Sunday. Your name is Akosua")
} else if (gender === male && dayOfWeek === 1) {
   console.log ("Your birth day was Monday. Your name is Adwoa")
} else if (gender === male && dayOfWeek === 2) {
   console.log ("Your birth day was Tuesday. Your name is Abenaa")
}else if (gender === male && dayOfWeek === 3) {
   console.log ("Your birth day was Wednesday. Your name is Akua")
}else if (gender === male && dayOfWeek === 4) {
       console.log ("Your birth day was Thursday. Your name is Yaa")
} else if (gender === male && dayOfWeek === 5) {
   console.log ("Your birth day was Friday. Your name is Afua")
}else if (gender === male && dayOfWeek === 6) {
   console.log ("Your birth day was Saturday. Your name is Ama")
}