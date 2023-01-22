//Const

const quantityBtn = document.querySelectorAll('.cart-quantity-selector .sign');
//Event Listeners
quantityBtn.forEach((button) =>
  button.addEventListener('click', (e) => {
    const input = button.parentElement.querySelector('input');
    const value = Number(input.value);
    const isPlus = button.classList.contains('plus');
    const key = button
      .closest('.cart-quantity-selector')
      .getAttribute('data-key');

    if (isPlus) {
      input.value++;
      changeItemQuantity(key, input.value);
    } else if (value > 1) {
      input.value--;
      changeItemQuantity(key, input.value);
    }
  })
);

function changeItemQuantity(key, quantity) {
  axios
    .post('/cart/change.js', {
      id: key,
      quantity,
    })
    .then((res) => {
      location.reload();
    });
}
