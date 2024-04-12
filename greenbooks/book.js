


var popoverlay=document.querySelector(".overlay")
var popupdes=document.querySelector(".popup-description")
var button=document.querySelector(".popup-btn")

function gan(){
 popoverlay.style.display="block";
 popupdes.style.display="block";
};



function deleteelement(event){
   event.target.parentElement. remove()
}

var closebutton=document.querySelector(".cancel-button")

closebutton.addEventListener("click",function(){
   popoverlay.style.display="none";
   popupdes.style.display="none";
});


var addbutton=document.querySelector(".add-button")
var container=document.querySelector(".box-1")
var headline=document.querySelector(".book-title")
var author=document.querySelector(".author-name")
var bookcontent=document.querySelector(".Short-Description")
var deletebutton=document.querySelector(".del-button-1")

addbutton.addEventListener("click",function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class",".box-1")
   div.innerHTML=`<h1>${headline.value}</h1>
   <h4>${author.value}</h4>
   <p>${bookcontent.value}</p>
   <button class="del-button-1" onclick="deleteelement(event)">Delete</button>`
   container.append(div)
   popoverlay.style.display="none";
   popupdes.style.display="none";
})