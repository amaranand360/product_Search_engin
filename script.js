  
function searchfun() {
  var searchInput = document.getElementById("search-item").value.toLowerCase();
  var minPriceInput = parseFloat(document.getElementById("min-price").value);
  var maxPriceInput = parseFloat(document.getElementById("max-price").value);
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
      var productName = products[i].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      var productPrice = parseFloat(products[i].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[1].innerText.replace("RS.", ""));

      var showProduct = true;

      if (searchInput && !productName.includes(searchInput)) {
          showProduct = false;
      }

      if (minPriceInput && productPrice < minPriceInput) {
          showProduct = false;
      }

      if (maxPriceInput && productPrice > maxPriceInput) {
          showProduct = false;
      }

      products[i].style.display = showProduct ? "block" : "none";
  }
}
