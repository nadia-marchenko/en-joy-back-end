const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function postRequest() {
  var xmlhttp = new XMLHttpRequest();
  var theUrl = "http://localhost:3000/games/sprint/results";
  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ userID: "lolkek", date: "Fri Jun 24 2020 16:32:37", answers: [{word: "lol", answered: false}], score: 17 }));
}

postRequest();