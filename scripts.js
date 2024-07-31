document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const products = [
        {name: 'ブレスレット', price: 9000, img: 'image/001.png'},
        {name: '指輪', price: 12000, img: 'image/002.png'},
        {name: 'ウォレットチェーン', price: 15000, img: 'image/003.png'},
        {name: '長財布', price: 20000, img: 'image/004.png'},
        {name: '二つ折り財布', price: 11000, img: 'image/005.png'},
        {name: 'ネックレス', price: 8000, img: 'image/006.png'},
        {name: '革靴', price: 30000, img: 'image/007.png'},
        {name: 'スニーカー', price: 8000, img: 'image/008.png'},
        {name: 'Tシャツ', price: 2500, img: 'image/009.png'},
        {name: '長ズボン', price: 10000, img: 'image/010.png'}
    ];
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>価格: ¥${product.price}</p>
        `;
        productDiv.addEventListener('click', () => {
            window.location.href = `product${products.indexOf(product) + 1}.html`;
        });
        productList.appendChild(productDiv);
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
        productList.innerHTML = '';
        if (filteredProducts.length === 0) {
            productList.innerHTML = '<p>該当する商品が見つかりません。</p>';
        } else {
            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>価格: ¥${product.price}</p>
                `;
                productDiv.addEventListener('click', () => {
                    window.location.href = `product${products.indexOf(product) + 1}.html`;
                });
                productList.appendChild(productDiv);
            });
        }
    });
});