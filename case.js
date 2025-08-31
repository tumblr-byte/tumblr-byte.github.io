 const icon = document.querySelector('.dropdown-icon');
    const dropdown = document.getElementById('dropdownMenu');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const closePopup = document.getElementById('closePopup');
    const overlay = document.getElementById('overlay');

    // Toggle dropdown
    icon.addEventListener('click', () => {
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Show popup when clicking dropdown button
    dropdown.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        popupContent.textContent = btn.getAttribute('data-content');
        popup.style.display = 'block';
        overlay.style.display = 'block';
        dropdown.style.display = 'none';
      });
    });

    // Close popup
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });

    // Close popup if overlay clicked
    overlay.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });