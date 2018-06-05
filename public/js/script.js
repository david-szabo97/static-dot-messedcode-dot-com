/* https://bulma.io/documentation/components/navbar/ */
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

/* Change navbar-item to active based on domain */
document.addEventListener('DOMContentLoaded', function () {

  var $navbarItems = Array.prototype.slice.call(document.querySelectorAll('a.navbar-item[href]'), 0);
  var domain = window.location.host;

  $navbarItems.forEach(function ($el) {
    if ($el.href.indexOf(domain) !== -1) {
      $el.classList.add('is-active');
    }
  });

});