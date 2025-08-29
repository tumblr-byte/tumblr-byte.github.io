   // Modal functions
    function openModal(id) { document.getElementById(id).style.display = 'flex'; }
    function closeModal(id) { document.getElementById(id).style.display = 'none'; }
    window.onclick = function(e){
      document.querySelectorAll('.modal').forEach(modal => {
        if(e.target === modal) modal.style.display='none';
      });
    }

    // Carousel functions
    const track = document.querySelector('.carousel-track');
    const leftBtn = document.querySelector('.carousel-btn.left');
    const rightBtn = document.querySelector('.carousel-btn.right');
    const projects = document.querySelectorAll('.project');
    let index = 0;
    const itemsPerPage = 3;
    const totalItems = projects.length;

    function updateCarousel() {
      const slideWidth = projects[0].offsetWidth + 20; // width + margin
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    rightBtn.addEventListener('click', () => {
      if (index < totalItems - itemsPerPage) { index++; updateCarousel(); }
    });
    leftBtn.addEventListener('click', () => {
      if (index > 0) { index--; updateCarousel(); }
    });

    window.addEventListener('resize', updateCarousel);