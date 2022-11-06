const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//let generatePass = document.getElementsByTagName("button")

//when the button is clicked we need to generate 2 random passwords of 15 char length 

function GeneratePass(){
    let firstPass =""
    let secondPass =""

    for ( let i=0 ;i<15; i++){
       firstPass+=characters[Math.floor(Math.random()*characters.length)]
       secondPass+=characters[Math.floor(Math.random()*characters.length)]
    }

    document.getElementById("option1").textContent =firstPass
    document.getElementById("option2").textContent =secondPass
}


