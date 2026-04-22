// Application Logic
let cart = [];
let currentProduct = null;

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('product-gallery');
  const heroImgContainer = document.getElementById('hero-img-container');
  const featureImgContainer = document.getElementById('feature-img-container');
  
  // Modal Elements
  const modal = document.getElementById('product-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalCategory = document.getElementById('modal-category');
  const addToBagBtn = document.getElementById('add-to-bag');

  // Cart Elements
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  const navCartBtn = document.getElementById('nav-cart-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Load Products from window.PRODUCTS
  if (window.PRODUCTS && window.PRODUCTS.length > 0) {
    renderShowcase(window.PRODUCTS);
  } else {
    gallery.innerHTML = `
      <div style="grid-column: span 2; padding: 32px; text-align: center;">
        <h2 class="font-display-lg" style="color: var(--ash-muted);">PRODUCTS NOT FOUND</h2>
        <p style="margin-top: 16px;">Please generate products.js using the admin tool.</p>
        <a href="admin.html" style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: var(--primary); color: var(--ink-text); text-decoration: none; font-weight: bold;">Go to Admin Tool</a>
      </div>
    `;
  }

  // Load Archive Images
  if (window.ARCHIVE_IMAGES && window.ARCHIVE_IMAGES.length >= 2) {
    const archiveImg1 = document.querySelector('.placeholder-img-1');
    const archiveImg2 = document.querySelector('.placeholder-img-2');
    if (archiveImg1 && window.ARCHIVE_IMAGES[0]) {
      archiveImg1.style.backgroundImage = `url('${window.ARCHIVE_IMAGES[0]}')`;
    }
    if (archiveImg2 && window.ARCHIVE_IMAGES[1]) {
      archiveImg2.style.backgroundImage = `url('${window.ARCHIVE_IMAGES[1]}')`;
    }
  }

  function renderShowcase(products) {
    if (!products || products.length === 0) return;

    gallery.innerHTML = '';
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      const priceVal = product.price || Math.floor(Math.random() * 300 + 150);
      product.price = priceVal; // Ensure product has a price
      const priceStr = `$${priceVal}`;
      
      card.innerHTML = `
        <div class="product-img-wrapper">
          <img src="${product.url}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-price font-label-caps">${priceStr}</div>
        <div class="product-info">
          <h3 class="font-label-caps">${product.name}</h3>
          <p class="font-body-md">${product.category || 'PREMIUM SILK'}</p>
        </div>
      `;

      card.addEventListener('click', () => openModal(product));
      gallery.appendChild(card);
    });
  }

  function openModal(product) {
    currentProduct = product;
    modalImage.src = product.url;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalCategory.textContent = product.category || 'PREMIUM SILK';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Cart Logic
  addToBagBtn.addEventListener('click', () => {
    if (!currentProduct) return;
    
    const existingItem = cart.find(item => item.id === currentProduct.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...currentProduct, quantity: 1 });
    }
    
    renderCart();
    modal.classList.remove('open'); // Close product modal
    openCart(); // Open cart to show it was added
  });

  function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navCartBtn) navCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.url}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-header">
            <span class="cart-item-category">${item.category || 'WEAVES365'}</span>
            <span class="cart-item-price">$${item.price}</span>
          </div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-actions">
            <div class="qty-selector">
              <button class="qty-btn dec" data-index="${index}">-</button>
              <span class="qty-value">${String(item.quantity).padStart(2, '0')}</span>
              <button class="qty-btn inc" data-index="${index}">+</button>
            </div>
            <button class="delete-btn" data-index="${index}">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    cartSubtotal.textContent = `$${total.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Add event listeners to buttons
    document.querySelectorAll('.qty-btn.inc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        cart[idx].quantity += 1;
        renderCart();
      });
    });

    document.querySelectorAll('.qty-btn.dec').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
        renderCart();
      });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        cart.splice(idx, 1);
        renderCart();
      });
    });
  }

  // Checkout Logic - WhatsApp Integration
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Your bag is empty!");
        return;
      }

      const phoneNumber = "919919101369";
      let message = "Hello, I want to inqure about these products\n\n";

      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (Qty: ${item.quantity})\nLink: ${item.url}\n\n`;
      });

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }
});
