



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
    console.log(beer.ingredients.malt)
    createElementList(beer)
  })
}

var creatingElementIngredients = function(beer){
  beer.ingredients.malt.forEach(function(malt){
    var ul = theBestGettingEver("beer-list");
    var li = theBestBuilderEver("LI")
    li.innerText = malt.name;
    ul.appendChild(li);
  })
}

var theBestGettingEver = function(item){
  var result = document.getElementById(item)
  return result;
};

var theBestBuilderEver = function(item){
  var result = document.createElement(item);
  return result;
};

var imageFormatter = function(item, beer){
  item.setAttribute("src", beer.image_url);
  item.setAttribute("width", "100");
  item.setAttribute("height", "120");
  item.setAttribute("alt", beer.name);
}

var createElementList = function(beer){
  var ul = theBestGettingEver("beer-list")
  var img = theBestBuilderEver("IMG");
  var li2 = theBestBuilderEver("LI");
  imageFormatter(img, beer);
  li2.innerText = beer.name;
  ul.appendChild(li2);
  ul.appendChild(img);
  creatingElementIngredients(beer);
}





var app = function () {
  var url = "https://api.punkapi.com/v2/beers";

  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
