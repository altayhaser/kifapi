fetch('https://jsonblob.com/1098008917639970816')
    .then(reponse => response.json())
    .then( data => {
        const container = documet.querySelector(".productContainer");

        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            img.src = product.img;
            img.alt = product.title;
            card.appendChild(img);

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

    .catch(error => console.error(error));

