document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = modal.querySelector('.modal-img');
  const closeBtn = modal.querySelector('.close');

  document.querySelectorAll('.nombre[data-img]').forEach(nombre => {
    nombre.addEventListener('click', () => {
      const imgSrc = nombre.getAttribute('data-img');
      modalImg.src = imgSrc;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
});


