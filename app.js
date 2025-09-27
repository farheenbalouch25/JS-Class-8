// function greet(){
//     Swal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });
// }

// function message(){
//     Swal.fire({
//   title: "The Internet?",
//   text: "That thing is still around?",
//   icon: "question"
// });
// }


// function changingStyle(input){
// input.style.backgroundColor="skyblue";
// input.style.outline="none";
// input.style.border="none";
// input.style.padding="10px";
// input.style.borderRadius="10px";



// }


// var inputelement = document.getElementById("email");

// inputelement.style.color= "red";

// var passwordelment = document.getElementById("password");

// passwordelment.style.color = "blue";

// function submit(){
//     if (inputelement.value === "" || passwordelment.value === "") {

//             Swal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });
        
//     }
//     else {
//         var credential = inputelement.value + "  " + passwordelment.value;

//                    Swal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });
//     }
   
// }







function set() {
  var input = document.getElementById("input");
       
  input.value = "faraz";
}

var h1Element = document.getElementById("heading");
var pElement = document.getElementById("para");
var anchorElement = document.getElementById("link");


console.log(h1Element.innerHTML);
console.log(pElement.innerHTML);
console.log(anchorElement.innerHTML);           

console.log(h1Element.innerText);
console.log(pElement.innerText);
console.log(anchorElement.innerText);