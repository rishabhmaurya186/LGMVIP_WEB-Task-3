
let b = document.getElementById("dataTable")
let c = b.rows.length
if(c==1){
    b.style.visibility="hidden";
 }
else{
    b.style.visibility="visible";
 }



function abc(){
    if(c!=2){
        b.style.visibility="visible";
     }
    
       var name = document.getElementById("name").value;
       var email = document.getElementById("Email").value;
       var web = document.getElementById("Website").value;
        var img = document.getElementById("Image").value;
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var java = document.getElementById("java");
        var css = document.getElementById("css");
        var html = document.getElementById("html");
        var gender = "";
        if(male.checked==true){
            gender= "male"
        }else if(female.checked==true){
             gender = "female"
        }
        var skill ="";
        if(java.checked==true){
            skill += "Java ,"
        }
        if(html.checked == true){
            skill+= "HTML ,"
        }
        if(css.checked == true){
            skill+= "CSS"
        }
    var table = document.getElementById("dataTable")
    console.log(table.rows.length)

        var newRow = table.insertRow(table.rows.length);
        
        // // Insert cells into the new row
         var cell1 = newRow.insertCell(0);
         var cell2 = newRow.insertCell(1);
        
        
        // // Populate the cells with the form data
         cell1.innerHTML =name+"<br>"+ gender+"<br>"+email+'<br><a href='+web+'>'+web+"</a><br>"+skill ;
         img = "./img/"+img+".jpg"
         cell2.innerHTML='<div class="imgs" style="background-image: url('+img+');"></div>'




   
}

function cc(){
    let name = document.getElementById("name");
    name.value =""
    let email = document.getElementById("Email");
    email.value=""
    let web = document.getElementById("Website");
    web.value=""
    let img = document.getElementById("Image");
    img.value=""
    let male = document.getElementById("male");
    male.checked = false;
    let female = document.getElementById("female");
    female.checked = false;
    let java = document.getElementById("java");
    java.checked = false;
    let css = document.getElementById("css");
    css.checked = false;
    let html = document.getElementById("html");
    html.checked = false;
}