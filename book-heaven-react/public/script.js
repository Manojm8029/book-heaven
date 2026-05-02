// main app logic
let CART = JSON.parse(localStorage.getItem('bh_cart_v3')||'[]');

function saveCart(){ localStorage.setItem('bh_cart_v3', JSON.stringify(CART)); renderCart(); updateCartCount(); }

function updateCartCount(){
  const el = document.getElementById('cart-count');
  if(el) el.textContent = CART.reduce((s,i)=>s+i.qty,0);
}

function formatPrice(n){ return '₹' + n.toFixed(2); }

function renderProducts(list){
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="thumb"><img src="${p.img}" alt="${p.title}"/></div>
      <h4>${p.title}</h4>
      <p class="muted">${p.author}</p>
      <div class="meta">
        <div class="price">${formatPrice(p.price)}</div>
        <div><button data-id="${p.id}" class="btn ghost details-btn">Details</button> <button data-id="${p.id}" class="btn primary add-btn">Add</button></div>
      </div>
    `;
    grid.appendChild(card);
  });
  // attach events
  document.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click', (e)=>{
    const id = e.currentTarget.dataset.id; addToCart(id);
  }));
  document.querySelectorAll('.details-btn').forEach(b=>b.addEventListener('click', (e)=>{
    const id = e.currentTarget.dataset.id; openDetails(id);
  }));
}

function openDetails(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const mb = document.getElementById('modal-body');
  mb.innerHTML = `<div style="display:flex;gap:16px;flex-wrap:wrap">
    <div style="flex:1 1 260px"><img src="${p.img}" style="width:100%;border-radius:8px" alt="${p.title}"/></div>
    <div style="flex:2 1 320px">
      <h3>${p.title}</h3><p class="muted">by ${p.author}</p>
      <p style="margin-top:12px">${p.desc}</p>
      <p style="margin-top:12px" class="price">${formatPrice(p.price)}</p>
      <div style="margin-top:12px"><button class="btn primary modal-add" data-id="${p.id}">Add to cart</button></div>
    </div>
  </div>`;
  document.getElementById('book-modal').classList.remove('hidden');
  document.getElementById('book-modal').setAttribute('aria-hidden','false');
  document.querySelectorAll('.modal-add').forEach(b=>b.addEventListener('click',(e)=>{ addToCart(e.currentTarget.dataset.id); closeModal(); }));
}

function closeModal(){ document.getElementById('book-modal').classList.add('hidden'); document.getElementById('book-modal').setAttribute('aria-hidden','true'); }
document.getElementById && document.getElementById('close-modal')?.addEventListener('click', closeModal);
document.addEventListener('click', (e)=>{ if(e.target.id === 'book-modal') closeModal(); });

function addToCart(id){ const p = PRODUCTS.find(x=>x.id===id); const item = CART.find(c=>c.id===id); if(item) item.qty++; else CART.push({id, title:p.title, price:p.price, qty:1, img:p.img}); saveCart(); }

function renderCart(){
  const el = document.getElementById('cart-items');
  if(!el) return;
  el.innerHTML = '';
  if(CART.length===0){ el.innerHTML = '<div style="padding:12px;color:var(--muted)">Your cart is empty</div>'; document.getElementById('cart-total').textContent='₹0.00'; return;}
  let total = 0;
  CART.forEach(i=>{
    total += i.price * i.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `<div class="mini"><img src="${i.img}" style="width:100%;height:100%;object-fit:cover;border-radius:6px" alt="${i.title}"/></div>
      <div style="flex:1"><strong>${i.title}</strong><div class="muted" style="font-size:13px">Qty: <span class="qty">${i.qty}</span></div></div>
      <div style="text-align:right"><div>${formatPrice(i.price*i.qty)}</div>
      <div class="qty-controls"><button class="btn ghost dec" data-id="${i.id}">-</button><button class="btn ghost inc" data-id="${i.id}">+</button></div></div>`;
    el.appendChild(row);
  });
  document.querySelectorAll('.inc').forEach(b=>b.addEventListener('click',(e)=>{ changeQty(e.currentTarget.dataset.id,1); }));
  document.querySelectorAll('.dec').forEach(b=>b.addEventListener('click',(e)=>{ changeQty(e.currentTarget.dataset.id,-1); }));
  document.getElementById('cart-total').textContent = formatPrice(total);
}

function changeQty(id,delta){
  const it = CART.find(i=>i.id===id);
  if(!it) return;
  it.qty += delta;
  if(it.qty<=0) CART = CART.filter(x=>x.id!==id);
  saveCart();
}

document.getElementById && document.getElementById('open-cart')?.addEventListener('click', ()=>{ document.getElementById('cart-drawer').classList.toggle('hidden'); });
document.getElementById && document.getElementById('close-cart')?.addEventListener('click', ()=>{ document.getElementById('cart-drawer').classList.add('hidden'); });
document.getElementById && document.getElementById('clear-cart')?.addEventListener('click', ()=>{ CART=[]; saveCart(); });
document.getElementById && document.getElementById('checkout')?.addEventListener('click', ()=>{ alert('Demo checkout — this is a demo site.'); });

document.addEventListener('DOMContentLoaded', ()=>{
  // populate categories
  const cats = Array.from(new Set(PRODUCTS.map(p=>p.category)));
  const sel = document.getElementById('category-filter');
  cats.forEach(c=>{ const o = document.createElement('option'); o.value=c; o.textContent = c[0].toUpperCase()+c.slice(1); sel.appendChild(o); });
  renderProducts(PRODUCTS);
  renderCart();
  updateCartCount();

  document.getElementById('category-filter').addEventListener('change',(e)=>{
    const v = e.target.value;
    renderProducts(v==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.category===v));
  });

  document.getElementById('search').addEventListener('input',(e)=>{
    const q = e.target.value.trim().toLowerCase();
    renderProducts(PRODUCTS.filter(p=> (p.title+p.author+p.desc).toLowerCase().includes(q)));
  });

  document.getElementById('sort-select')?.addEventListener('change',(e)=>{
    const v = e.target.value;
    let copy = [...PRODUCTS];
    if(v==='price-asc') copy.sort((a,b)=>a.price-b.price);
    if(v==='price-desc') copy.sort((a,b)=>b.price-a.price);
    renderProducts(copy);
  });

  document.getElementById('search-btn')?.addEventListener('click', ()=>{
    const q = document.getElementById('search').value.trim().toLowerCase();
    renderProducts(PRODUCTS.filter(p=> (p.title+p.author+p.desc).toLowerCase().includes(q)));
  });

  renderAuthArea();
});
