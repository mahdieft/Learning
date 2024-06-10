'use strict';

const convertMenuArrayToMenuMap = (menuArray) => {
    const menuMap = new Map();
    menuArray.forEach((menuItem) => {
        menuMap.set(menuItem.id, menuItem);
    });
    return menuMap;
};

const generateMenu = (menuArray) => {
    let menu = '';
    menuArray.forEach((item) => {
        menu += `
        <div class="item">
            <p class="image">${item.emoji}</p>
            <div class="description">
                <p class="name">${item.name}</p>
                <p class="ingredients">${item.ingredients}</p>
                <p class="price">$${item.price}</p>
            </div>
            <button type="button" class="btn-add" data-item-id="${item.id}">+</button>
        </div>
        `;
    });
    return menu;
};

const renderMenu = (menuSection, menuArray) => {
    menuSection.innerHTML = generateMenu(menuArray);
};

const addItemToShoppingCart = (shoppingCart, item) => {
    if (shoppingCart.has(item)) {
        shoppingCart.set(item, shoppingCart.get(item) + 1);
    } else {
        shoppingCart.set(item, 1);
    }
};

const generateOrderSummaryDiv = (shoppingCart, menuMap) => {
    let orderSummary = '';
    for (let itemId of shoppingCart.keys()) {
        const item = menuMap.get(parseInt(itemId));
        const itemCount = shoppingCart.get(itemId);
        const price = item.price * itemCount;
        orderSummary += `
        <div class="order-item">
            <p class="name">${item.name}</p><sup id="total-item-${itemId}">${itemCount}</sup>
            <button type="button" class="btn-remove" data-item-id="${itemId}">remove</button>
            <p class="price" id="total-item-price-${itemId}">$${price}</p>
        </div>
        `;
    }

    return orderSummary;
};

const calculateTotalPrice = (shoppingCart, menuMap) => {
    let totalPrice = 0;
    for (let itemId of shoppingCart.keys()) {
        const item = menuMap.get(parseInt(itemId));
        const totalItem = shoppingCart.get(itemId);
        totalPrice += item.price * totalItem;
    }

    return totalPrice;
};

const renderOrderSummary = (orderSummary, orderItemsDiv, totalPrice, totalPriceParagraph, orderSummarySection) => {
    if (orderSummary === '') {
        orderSummarySection.style.display = 'none';
        return;
    }
    orderItemsDiv.innerHTML = orderSummary;
    totalPriceParagraph.innerText = `$${totalPrice}`;
    orderSummarySection.style.display = 'block';
};

export {
    convertMenuArrayToMenuMap,
    renderMenu,
    addItemToShoppingCart,
    generateOrderSummaryDiv,
    renderOrderSummary,
    calculateTotalPrice,
};
