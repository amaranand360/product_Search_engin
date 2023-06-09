
function binarySearch(arr, searchInput) {
    var start = 0;
    var end = arr.length - 1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      var productName = arr[mid].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
  
      if (productName === searchInput) {
        return mid;
      } else if (productName < searchInput) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  function searchfun() {
    var searchInput = document.getElementById("search-item").value.toLowerCase();
    var minPriceInput = parseFloat(document.getElementById("min-price").value);
    var maxPriceInput = parseFloat(document.getElementById("max-price").value);
    var products = document.getElementsByClassName("product");
  
    var sortedProducts = Array.from(products).sort(function(a, b) {
      var nameA = a.getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      var nameB = b.getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  
    var searchIndex = binarySearch(sortedProducts, searchInput);
  
    for (var i = 0; i < products.length; i++) {
      var productName = products[i].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      var productPrice = parseFloat(products[i].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[1].innerText.replace("RS.", ""));
  
      var showProduct = true;
  
      if (searchInput && productName !== searchInput) {
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

    
function searchfunproduct() {
    var searchInput = document.getElementById("search-item").value.toLowerCase();
    var products = document.getElementsByClassName("product");
  
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByClassName("p-details")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      
  
        var showProduct = true;
  
        if (searchInput && !productName.includes(searchInput)) {
            showProduct = false;
        }
  
        products[i].style.display = showProduct ? "block" : "none";
    }
  }