'use strict';

import { menuArray } from './data.js';
import {
    addItemToShoppingCart,
    convertMenuArrayToMenuMap,
    renderMenu,
    renderOrderSummary,
    generateOrderSummaryDiv,
    calculateTotalPrice,
} from './functions.js';

// create and display the menu
renderMenu(document.getElementById('menu'), menuArray);

// convert menu array to menu map for faster access based on item id
const menuMap = convertMenuArrayToMenuMap(menuArray);

// get required elements
const addToCartButtons = document.querySelectorAll('.btn-add');
const orderSummarySection = document.getElementById('order-summary');
const orderItemsDiv = document.getElementById('order-items');
const totalPriceParagraph = document.getElementById('total-price');
const completeOrderButton = document.getElementById('btn-complete-order');
const modalPayment = document.getElementById('modal-payment');
const container = document.getElementById('container');

// required variables
let shoppingCart = new Map();

// business logic
addToCartButtons.forEach(btnAddToCart => {
    btnAddToCart.addEventListener('click', e => {
        // add to shopping cart
        addItemToShoppingCart(shoppingCart, e.target.dataset.itemId);

        // generate and render the order summary
        const orderSummary = generateOrderSummaryDiv(shoppingCart, menuMap);
        const totalPrice = calculateTotalPrice(shoppingCart, menuMap);
        renderOrderSummary(orderSummary, orderItemsDiv, totalPrice, totalPriceParagraph, orderSummarySection);

        // bind remove buttons
        document.querySelectorAll('.btn-remove').forEach(btnRemove => {
            btnRemove.addEventListener('click', e => {
                const itemId = e.target.dataset.itemId;
                shoppingCart.set(itemId, shoppingCart.get(itemId) - 1);

                const itemCount = shoppingCart.get(itemId);
                if (itemCount === 0) {
                    shoppingCart.delete(itemId);
                    e.target.parentNode.remove();
                } else {
                    document.getElementById(`total-item-${itemId}`).innerText = `${itemCount}`;
                    const price = menuMap.get(parseInt(itemId)).price * itemCount;
                    document.getElementById(`total-item-price-${itemId}`).innerText = `$${price}`;
                }
                const totalPrice = calculateTotalPrice(shoppingCart, menuMap);
                totalPriceParagraph.innerText = `$${totalPrice}`;

                if (shoppingCart.size === 0) {
                    orderSummarySection.style.display = 'none';
                }
            });
        });
    });
});

completeOrderButton.addEventListener('click', () => {
    modalPayment.style.display = 'block';
    container.classList.add('dark-background');
});
