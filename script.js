
const searchButton = document.getElementById('searchButton');
const searchOverlay = document.querySelector('.search-overlay');
const closeOverlay = document.querySelector('.fa-xmark');

searchButton.onclick = () => {
   searchOverlay.classList.toggle('search-active');
}


closeOverlay.onclick = () => {
    searchOverlay.classList.remove('search-active');
}



function checkInput(input) {
    if (input.value !== '') {
      input.classList.remove('empty');
    } else {
      input.classList.add('empty');
    }
  }

// const overlay = document.querySelectorAll('.overlay')

// for(let i=0;i<overlay.length;i++){
//   overlay[i].addEventListener('click',function(){
//     overlay[i].classList.remove('active')
//   })
// }

function checkInput(input) {
  var searchValue = input.value.trim().toLowerCase();
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  // Check if the search value is not empty
  if (searchValue.length > 0) {
    // Replace the following code with your own logic to fetch options/products
    // that start with the typed letter or query a server for the results

    // Example data for demonstration
    var options = [
      { image: "img/p1.webp", title: "Ariadne Women's Dress - V" },
      { image: "img/p2.avif", title: "Ariadne Women's Dress - C" },
      { image: "img/p3.avif", title: "Ariadne Women's Dress - B" },
      { image: "img/p4.avif", title: "Ariadne Women's Dress - G" }
    ];

    var filteredOptions = options.filter(function(option) {
      return option.title.toLowerCase().startsWith(searchValue);
    });

    // Create and append the results to the container
    filteredOptions.forEach(function(option) {
      var resultItem = document.createElement("div");
      resultItem.className = "result-item";

      var resultImage = document.createElement("img");
      resultImage.className = "result-image";
      resultImage.src = option.image;
      resultItem.appendChild(resultImage);

      var resultTitle = document.createElement("h1");
      resultTitle.className = "result-title";
      resultTitle.textContent = option.title;
      resultItem.appendChild(resultTitle);

      resultItem.addEventListener("click", function() {
        input.value = option.title;
        resultsContainer.style.display = "none";
      });

      resultsContainer.appendChild(resultItem);
    });

    // Display the results container
    resultsContainer.style.display = "block";
  } else {
    // Hide the results container if the search value is empty
    resultsContainer.style.display = "none";
  }}






  
 

 


  $(document).ready(function() {
    $('.size-btn').click(function() {
      // Remove 'size-active' class from all buttons
      $('.size-btn').removeClass('size-active');
  
      // Add 'size-active' class to the clicked button
      $(this).addClass('size-active');
    });
  });



  const deliveryIcon = document.querySelector('.fa-angle-down');
  const deliveryBody = document.querySelector('.delivery-body');
  
  deliveryIcon.onclick = () => {
    if (deliveryIcon.classList.contains('fa-angle-up')) {
      deliveryBody.style.display = 'none';
      deliveryIcon.classList.remove('fa-angle-up');
      deliveryIcon.classList.add('fa-angle-down');
    } else {
      deliveryBody.style.display = 'flex';
      deliveryBody.style.borderTop = 'none'
      deliveryIcon.classList.remove('fa-angle-down');
      deliveryIcon.classList.add('fa-angle-up');
    }
  };

  const regionBtn = document.querySelector('.region-btn');
  const regionWnd = document.querySelector('.region-window');
  
  regionBtn.onclick = () => {
    regionWnd.classList.toggle('hidden-region')
  }  

  const languageBtn = document.querySelector('.language-btn');
  const languageWnd = document.querySelector('.language-window');
  
  languageBtn.onclick = () => {
    languageWnd.classList.toggle('hidden-language')
  }  

 
  
  const menuBar = document.querySelector('.menu-bar');
  const navWnd = document.querySelector('.nav-wnd');
  
  menuBar.addEventListener('click', () => {
    navWnd.style.display = 'flex';
  });
  
  const navbarHeading = document.querySelector('.navbar h1');

  navbarHeading.onclick = () => {
    navWnd.style.display = 'none';
  }
  

 

  
  

    
  const quantityValueElement = document.getElementById("quantity-value");
  const priceElement = document.getElementById("price");
  
  let quantity = parseInt(quantityValueElement.textContent);
  let price = 29.99 * quantity;

  function updatePrice() {
    price = 29.99 * quantity;
    priceElement.textContent = "£" + price.toFixed(2) + " GBP";
  }

  // Decrease quantity
  document.querySelector(".quantity-tab.minus").addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityValueElement.textContent = quantity.toString();
      updatePrice();
    }
  });

  // Increase quantity
  document.querySelector(".quantity-tab.plus").addEventListener("click", function () {
    quantity++;
    quantityValueElement.textContent = quantity.toString();
    updatePrice();
  });

 