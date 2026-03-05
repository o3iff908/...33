const favoriteBtn = document.getElementById('favoriteBtn');
const addToCartBtn = document.getElementById('addToCartBtn');

favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
});

addToCartBtn.addEventListener('click', function() {
    this.textContent = 'Added!';
    this.classList.add('added');
    setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.classList.remove('added');
    }, 1500);
});
