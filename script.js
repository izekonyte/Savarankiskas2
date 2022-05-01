"use strict"
// div
var table = document.getElementById("table")

// input
var names = document.getElementById("name")
var surname = document.getElementById("surname")
var age = document.getElementById("age")

// buttons
var submit = document.getElementsByClassName ("add")
var deleteFirst = document.getElementsByClassName("deleteFirst")
var deleteLast = document.getElementsByClassName("deleteLast")
var newline = document.getElementById("new")
var row = document.getElementById("myRow")

console.log(table, names, surname, age, newline, row,  submit, deleteFirst, deleteLast)

   

table.addEventListener("submit", function(e){
      e.preventDefault()
     var age = document.getElementById("age")
      var ageValue = age.value
    ageValue = Number(age)

      if(names.value && surname.value  && ageValue > 0){
            var table = document.getElementById("lentele");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(-1);
   var cell2 = row.insertCell(-1);
   var cell3 = row.insertCell(-1);
    cell1.innerHTML = ` ${names.value}`
    cell2.innerHTML = ` ${surname.value}`
    cell3.innerHTML = ` ${ageValue.value}`
    } else if(names.value.length == 0 || surname.value.length == 0 || ageValue <= 0 )
      {
    alert("iveskite duomenis")
     }

      names.value = ""
    surname.value = ""
    age.value = ""
})


table.addEventListener("deleteLast", function(){
    
   var paragraphs = lentele.querySelectorAll("td")

    if(paragraphs.length){   
        paragraphs[paragraphs.length - 1].remove()
    }
})


