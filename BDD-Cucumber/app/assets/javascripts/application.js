// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


document.addEventListener("DOMContentLoaded", function() {
    var titleLink = document.getElementById('title_link');
    var releaseDateLink = document.getElementById('release_date_link');
  
    titleLink.addEventListener('click', function() {
      toggleBackgroundColor(titleLink);
    });
  
    releaseDateLink.addEventListener('click', function() {
      toggleBackgroundColor(releaseDateLink);
    });
  
    function toggleBackgroundColor(element) {
      element.classList.toggle('bg-warning');
    }
});