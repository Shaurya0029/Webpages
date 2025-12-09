
// simple interactions (demo)
document.addEventListener('DOMContentLoaded', ()=>{
  const cartBtn = document.getElementById('floatingCart');
  if(cartBtn) cartBtn.addEventListener('click', ()=> alert('Cart opened (demo)'));
});
