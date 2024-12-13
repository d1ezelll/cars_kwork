document.getElementById('formSend').addEventListener('click', function() {
    document.getElementById('orderForm').reset();
  }
);

document.getElementById('formSendSecond').addEventListener('click', function() {
    document.getElementById('orderForm').reset();
  }
);

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('header-button');
  const header = document.querySelector('.header');
  const headerContacts = document.querySelector('.header-contacts');


  burgerBtn.addEventListener('click', () => {
      if (header.classList.toggle('open')) {
          headerContacts.style.display = 'flex';
          burgerBtn.textContent = 'Close menu'
      } else {
          headerContacts.style.display = 'none';
          burgerBtn.textContent = 'Menu'
      };
  })

  window.addEventListener('click', (e) => {
      if (!header.contains(e.target) && !burgerBtn.contains(e.target)) {
          header.classList.remove('open');
      }
  });
})
  