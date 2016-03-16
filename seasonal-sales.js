function executeThisIfXHRFails(xhrEvent) {
  console.log("An error occured while transferring the data");
}

function productsRetriever() {

 var productData = JSON.parse(this.responseText); 
   categoriesRetriever(productData)


  function categoriesRetriever() {

    var categoriesRequest = new XMLHttpRequest;    

    categoriesRequest.open("GET", "categories.json")
    categoriesRequest.send();

    categoriesRequest.addEventListener("load", categoriesParse);
    categoriesRequest.addEventListener("error", executeThisIfXHRFails);

  };

  function categoriesParse() {
            var categoryData = JSON.parse(this.responseText);
            console.log("categoryData", categoryData);    
            console.log("productData", productData);
                    
  };
};


    
var productsRequest = new XMLHttpRequest();

  productsRequest.addEventListener("load", productsRetriever);
  productsRequest.addEventListener("error", executeThisIfXHRFails);

  productsRequest.open("GET", "products.json");
  productsRequest.send();