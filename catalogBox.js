const catalogBox = document.querySelector("#catalog-box");

getCatalog();

async function getCatalog() {
    const response = await fetch('catalogBox.json');
    const catalogArray = await response.json();

    renderBlog(catalogArray);
}

function renderBlog(catalogArray) {
    catalogArray.forEach(function (item) {
        const catalogHTML = `
            <div class="catalog__card" id="${item.id}">
                <img src="${item.img}" alt="${item.alt}" class="catalog__card_img">
                <p class="catalog__card_author">${item.author}</p>
                <p class="catalog__card_name">${item.name}</p>
                <p class="catalog__card_note">${item.note}</p>
                <p class="catalog__card_price">${item.price}</p>
                <button class="catalog__card_btn">${item.btn}</button>
            </div>
        `;
        catalogBox.insertAdjacentHTML('beforeend', catalogHTML)
    });
};