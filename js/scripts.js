$(document).ready(function () {
  $('.accordion').on('click', function (event) {
    event.preventDefault();
    // create accordion variables
    var accordion = $(this);
    var accordionContent = accordion.next('.inner');
    var accordionToggleIcon = $(this).children('.toggle-icon');

    // toggle accordion link open class
    accordion.toggleClass("open");
    // toggle accordion content
    accordionContent.slideToggle(250);

    // change plus/minus icon
    if (accordion.hasClass("open")) {
      accordionToggleIcon.html("<i class='fa-solid fa-chevron-down fa-sm'></i>");
    } else {
      accordionToggleIcon.html("<i class='fa-solid fa-chevron-up fa-sm'></i>");
    }
  });
});


///EVENT THAT OPENS THE SPECIFIC ACCORDION PANELS TIED TO HREF LINK//////
// $(document).ready(function () {
//   $('.accordion').click(function (e) {
//     $(this).attr('href');
//     $(this).next('.inner').toggleClass("slow", function () {
//       $('html,body').animate({ scrollTop: $(this).offset().top - 500 }, 2000);
//     });//ENDS FORM TOGGLE FUNCTION//
//   });
//   // Begin script to open accordion panels via an external link with hash
//   var hash = window.location.hash;
//   var anchor = $('a[href$="' + hash + '"]');
//   if (anchor.length > 0) {
//     anchor.click();
//   }
// });
