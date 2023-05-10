// Get book details from API
const bookId = 'bookId';
const apiUrl = `https://books-backend.p.goit.global/books/${bookId}`;
const bookDetails = {};

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    bookDetails.title = data.title;
    bookDetails.author = data.author;
    bookDetails.description = data.description;
    bookDetails.coverImage = data.coverImage;
    bookDetails.purchaseLinks = data.purchaseLinks;
    updateModal();

    // Add book details to the bookList array
    const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    bookList.push(bookDetails);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  })
  .catch(error => console.error(error));

// Update modal with book details
function updateModal() {
  const modal = document.querySelector('.modal');
  const bookDetailsContainer = document.querySelector('.book-details');

  // Create modal content with book details
  const modalContent = `
    <div class="book-info">
      <img src="${bookDetails.coverImage}" alt="Book Cover" />
      <div>
        <h2>${bookDetails.title}</h2>
        <p>by ${bookDetails.author}</p>
        <p>${bookDetails.description}</p>
      </div>
    </div>
    <div class="purchase-links">
      <h3>Buy Now:</h3>
      <ul>
        ${bookDetails.purchaseLinks
          .map(
            link => `
          <li>
            <a href="${link.url}" target="_blank" rel="noopener noreferrer">
              <img src="" alt="${link.name}" />
            </a>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
    <div class="shopping-list">
      <button class="add-to-list-btn">Add to Shopping List</button>
      <button class="remove-from-list-btn">Remove from Shopping List</button>
    </div>
  `;
  bookDetailsContainer.innerHTML = modalContent;
}
