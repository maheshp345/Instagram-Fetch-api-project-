

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById('grid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let apiUrl = "https://fakestoreapi.com/products";
  let startIndex = 0;
  let itemsPerPage = 6;

  function fetchAndDisplayItems() {
      fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
                  if (i < data.length) {
                      let item = data[i];
                      let box = document.createElement('div');
                      box.classList.add('box');

                      let img = document.createElement('img');
                      img.classList.add('image');
                      img.src = item.image;

                      
                      box.appendChild(img);
                      grid.appendChild(box);
                  } else {
                      loadMoreBtn.style.display = 'none';
                      break;
                  }
              }

              startIndex += itemsPerPage;
          })
          .catch((error) => console.error('Error fetching data:', error));
  }

  loadMoreBtn.addEventListener('click', fetchAndDisplayItems);


  fetchAndDisplayItems();
});


