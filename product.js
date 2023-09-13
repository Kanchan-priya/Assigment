const products = [
    {
      imgUrl: 'images-1/product-1.png',
      productName: 'DHOOP INCENSE CONES',
      discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
      price: '$2.05'
    },
    {
        imgUrl: 'images-1/product-2.png',
        productName: 'HEM Incense',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$1.05'
      },
      {
        imgUrl: 'images-1/product-3.png',
        productName: 'Mystic Temple Incense',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.75'
      },
      {
        imgUrl: 'images-1/product-4.png',
        productName: 'SAC Incense',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$5.05'
      },
      {
        imgUrl: 'images-1/product-5.png',
        productName: 'Frankincense and Myrrh',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$3.05'
      },
    {
        imgUrl: 'images-1/product-6.png',
        productName: 'Eucalyptus INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$10.05'
      },
      {
        imgUrl: 'images-1/product-7.png',
        productName: 'Lavender INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$4.05'
      },
      {
        imgUrl: 'images-1/product-8.png',
        productName: 'Sage INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$0.75'
      },
      {
        imgUrl: 'images-1/product-9.png',
        productName: 'Frankincense and Myrrh',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$3.05'
      },
      {
        imgUrl: 'images-1/product-10.png',
        productName: 'Eucalyptus INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$10.05'
      },
      {
        imgUrl: 'images-1/product-11.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
      {
        imgUrl: 'images-1/product-12.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
      {
        imgUrl: 'images-1/product-13.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
      {
        imgUrl: 'images-1/product-14.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
      {
        imgUrl: 'images-1/product-15.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
      {
        imgUrl: 'images-1/product-16.png',
        productName: 'DHOOP INCENSE CONES',
        discription: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
        price: '$2.05'
      },
  ];
  
  const res = document.getElementById('product');
  
  const html = products.map((item) => `
    <div class="col-md-3 col-12 mt-4">
      <div class="cus-Card">
        <img src="${item.imgUrl}" alt="">
        <div class="card-content">
          <p class="product-name">${item.productName}</p>
          <p class="product-description">${item.discription}</p>
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <p class="product-price">${item.price}</p>
        </div>
      </div>
    </div>
  `).join(''); // Use .join('') to concatenate the HTML strings
  
  res.innerHTML = html; // Set the innerHTML of the 'res' element to display the content
  