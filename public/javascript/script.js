$(document).ready(function() {
  // Toggle filter menu
  $(".jsFilter").click(function() {
      $(".filter-menu").toggleClass("active");
  });

  // Switch to grid view
  $(".grid").click(function() {
      $(".list").removeClass("active");
      $(".grid").addClass("active");
      $(".products-area-wrapper").addClass("gridView").removeClass("tableView");
  });

  // Switch to list view
  $(".list").click(function() {
      $(".list").addClass("active");
      $(".grid").removeClass("active");
      $(".products-area-wrapper").removeClass("gridView").addClass("tableView");
  });

  // Toggle light mode
  $('.mode-switch').click(function() {
      $('html').toggleClass('light');
      $('.mode-switch').toggleClass('active');
  });
});