document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-dark');
      else
        navbar.classList.remove('navbar-dark');
    });
  }


  document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.getElementsByClassName('scroll-link');
    
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', scrollToSection);
    }
    
    function scrollToSection(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  