function executeThisIfXHRFails(xhrEvent) {
  console.log("An error occured while transferring the data");
}

function codeRetriever() {
  
  var data = JSON.parse(this.responseText);  
    
  var productArea = document.getElementById("product-area");
  
  var outputString = "";    
    
  for (currentProduct in data.products) {
    var outputString = "";
    var product = data.products[currentProduct]
    outputString += `<article`;
    outputString += `<p id="name">${product.name}</p>`;
    outputString += `<p id="price">${product.price}</p>`;
    productArea.innerHTML += outputString;
  };
};
    
var productsRequest = new XMLHttpRequest();

  productsRequest.addEventListener("load", codeRetriever);
  productsRequest.addEventListener("error", executeThisIfXHRFails);

  productsRequest.open("GET", "products.json");
  productsRequest.send();