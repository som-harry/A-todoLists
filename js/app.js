const clear = document.querySelector(.clear);
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// classes name
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "linethrough";

// shows todays day
const options = {weekday: "long",month:"short",day:"numeric"};
const today =  new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US",options);
alert("hello");