
var beer = 0;


var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.addEventListener('load',callback);
  request.open('GET', url);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200 ) return;
  var jsonString = this.responseText;
  beer = JSON.parse(jsonString);
  populatelist(beer);
}

var populatelist = function(info){
  var body = theBestGettingEver("selector-location");
  var select = theBestBuilderEver("select");
  select.setAttribute("id", "selector");
  body.appendChild(select);
  console.log(select.id);
  info.forEach(function(beer){
      // createElementList(beer)
      createElementSelector(beer);
    })

  select.addEventListener('change', function(){

    objectFinder(this.value);
  })
}

var creatingElementIngredients = function(beer){   
 var ul = theBestGettingEver("beer-list");
 var li = theBestBuilderEver("LI")
 li.innerHTML = "<h4><b><u>These are the ingredients</b></u></h4>"
 ul.appendChild(li)
 beer.ingredients.malt.forEach(function(malt){
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

var objectFinder = function(name){
  beer.forEach(function(singlebeer){
    if(singlebeer.name === name){
      createElementList(singlebeer);
    }
  })
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

var createElementSelector = function(beer){
  var selector = theBestGettingEver("selector");
  var option = theBestBuilderEver("option");
  option.innerText = beer.name;
  selector.appendChild(option);
}





var app = function () {
  var url = "https://api.punkapi.com/v2/beers";

  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
