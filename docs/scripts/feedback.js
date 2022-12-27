const element = document.getElementById("app");

//Create a button
const btn = document.createElement("buttton");
btn.setAttribute("class", "ba-we-love-subscribers");
btn.setAttribute("onClick", "handleClick()");
const btnText = document.createTextNode("Leave feedback.");
btn.appendChild(btnText);

//Create frame
const div = document.createElement("div");
div.setAttribute("id", "feeedback");
div.setAttribute("class", "true");

const para = document.createElement("iframe");
para.setAttribute("src", "https://www.surveymonkey.com/r/HHHG7J6");

div.appendChild(para);

function handleClick() {
  const show = document.getElementById("feeedback");
  const itemToggle = show.getAttribute("class");

  console.log(itemToggle);
  itemToggle === "true"
    ? show.setAttribute("class", "false")
    : show.setAttribute("class", "true");
}

//Creating a div

element.appendChild(btn);
element.appendChild(div);
