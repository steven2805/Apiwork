



var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.addEventListener('load',callback);
  request.open('GET', url);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200 ) return;
  var jsonString = this.responseText;
  information = JSON.parse(jsonString);
  populatelist(information);
}

var populatelist = function(info){
  info.forEach(function(beer){
    // console.log(beer);
   createElementList(beer)
  })
}

var createElementList = function(beer){
  var ul = document.getElementById('beer-list');
  console.log(ul);
  var li = document.createElement('LI');
  console.log(beer.name);
  li.innerText = beer.name;
  ul.appendChild(li);
}





var app = function () {
  var url = "https://api.punkapi.com/v2/beers";

  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
