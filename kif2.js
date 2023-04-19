const container = document.querySelector(".productContainer");
const cartIcon = document.querySelector(".cartIcon");
const cartCount = document.querySelector(".cartCount");
let itemCount = 0;

axios.get("https://jsonblob.com/api/1098008917639970816").then(data => {

    const { items } = data.data;
    
    items.forEach(product => {
        console.log(product);
        const card = document.createElement('div');
        card.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.title;
        card.appendChild(productImage);

        const title = document.createElement('h3');
        title.textContent = product.title;
        card.appendChild(title);

        const price = document.createElement('p');
        price.textContent = product.price;
        card.appendChild(price);

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.addEventListener('click' , () => {
            addToCart(product);
        })
        card.appendChild(button);

        container.appendChild(card);
    });
})

function addToCart(product) {
  let cart = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: {};

  if (cart[product.id]) {
	cart[product.id]["quantity"]++;
  } else {
	cart[product.id] = {
  	...product,
  	quantity: 1,
	};
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = itemCount;
  
  console.log(addToCart);
}

// function addToCart(product) {
//   let cart = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : {};

//   if (cart[product.id]) {
//     cart[product.id]["quantity"]++;
//   } else {
//     cart[product.id] = {
//     ...product,
//     quantity: 1,
//     };
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   itemCount++;
//   cartCount.textContent = itemCount;
// }

// cartIcon.addEventListener("click", () => {
//   window.location.href = "cart.html";
// })


function addToCart(product) {
    let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  
    if (cart[product.id]) {
      cart[product.id]["quantity"]++;
    } else {
      cart[product.id] = {
      ...product,
      quantity: 1,
      };
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    itemCount++;
    cartCount.textContent = itemCount;
  }
  
  cartIcon.addEventListener("click", () => {
    window.location.href = "cart.html";
  })











// fetch("https://jsonblob.com/1098008917639970816")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch('https://jsonblob.com/1098008917639970816')
//     .then(response => response.json())
//     .then( data => {
//         console.log(data);

        // data.forEach(product => {
        //     const card = document.createElement('div');
        //     card.classList.add('card');

        //     const image = document.createElement('img');
        //     img.src = product.img;
        //     img.alt = product.title;
        //     card.appendChild(img);

        //     const title = document.createElement('h3');
        //     title.textContent = product.title;
        //     card.appendChild(title);

        //     const price = document.createElement('p');
        //     price.textContent = product.price;
        //     card.appendChild(price);

        //     const button = document.createElement('button');
        //     button.textContent = 'Add to Cart';
        //     button.addEventListener('click' , () => {
        //         addToCart(product);
        //     })
        //     card.appendChild(button);

        //     container.appendChild(card);
        // });

//     })

// .catch(error => console.error(error));

// let cartItems = [];

// function addToCart(productId) {
        // array will have the products,
        // before you add the product to array, you  need to check if the product already in array (you should check by id)
        // if there is same id in your array, add property to your object (amount property)
        // if not just push to your array

        
//     let product = cartItems.find(item => item.id === productId);
//     if (!product) {
//         product = {
//             id: productId,
//             quantity: 1
//         };
//         cartItems.push(product);
//     } else {
//         product.quantity++;
//     }
//     renderCart();
// }

// function renderCart() {
//     const cartList = document.querySelector('#cart-list');
//     let cartItemsHtml = '';
//     let total = 0;
//     cartItems.forEach(item => {
//         const product = getProductById(item.id);
//         const price = product.price * item.quantity;
//         total += price;
//         cartItemsHtml += `
//       <div class="cart-item">
//         <div>${product.title} x ${item.quantity}</div>
//         <div>${price} $</div>
//       </div>
//     `;
//     });
//     cartList.innerHTML = cartItemsHtml;
//     const cartTotal = document.querySelector('#cart-total');
//     cartTotal.innerHTML = `${total} $`;
// }

// function getProductById(productId) {
//     return products.find(product => product.id === productId);
// }
