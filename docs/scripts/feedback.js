const element = document.getElementById("app");

//Create a button
const btn = document.createElement("buttton");
btn.setAttribute("class", "ba-we-love-subscribers")
btn.setAttribute("onClick", "handleClick()")
const btnText = document.createTextNode("Leave feedback.");
btn.appendChild(btnText);

//Create frame
const div = document.createElement("div");
div.setAttribute("class", "feedback close")
div.setAttribute("class", "ba-we-love-subscribers.popup-ani")

const para = document.createElement("iframe");
para.setAttribute("src", "https://www.surveymonkey.com/r/HHHG7J6")
div.appendChild(para)

function handleClick(){
    alert("Click")
}

//Creating a div

element.appendChild(btn);
element.appendChild(div);
