$(function() {

   $("img").attr("src", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F614810%2Fpexels-photo-614810.jpeg%3Fcs%3Dsrgb%26dl%3Dface-facial-hair-fine-looking-614810.jpg%26fm%3Djpg&f=1&nofb=1")

   $("#navOpenBellDropdown").click(function() {
      let state = $(this).attr('data-state')
      if (state == 'closed') {
         // open
         $('.nav-item > button').attr('data-state', 'closed').removeClass('dropdown-opened')
         $(".nav-drodown").css('display', 'none')
         $(this).addClass("dropdown-opened")
         $("#navBellDropdown").css('display', 'block')
         $(this).attr('data-state', 'opened')
      }else {
         // close
         $(this).removeClass("dropdown-opened")
         $("#navBellDropdown").css('display', 'none')
         $(this).attr('data-state', 'closed')
      }
   })

   $("#navOpenMessageDropdown").click(function() {
      let state = $(this).attr('data-state')
      if (state == 'closed') {
         // open
         $('.nav-item > button').attr('data-state', 'closed').removeClass('dropdown-opened')
         $(".nav-drodown").css('display', 'none')
         $(this).addClass("dropdown-opened")
         $("#navMessageDropdown").css('display', 'block')
         $(this).attr('data-state', 'opened')
      }else {
         // close
         $(this).removeClass("dropdown-opened")
         $("#navMessageDropdown").css('display', 'none')
         $(this).attr('data-state', 'closed')
      }
   })

   $("#navOpenUserDropdown").click(function() {
      let state = $(this).attr('data-state')
      if (state == 'closed') {
         // open
         $('.nav-item > button').attr('data-state', 'closed').removeClass('dropdown-opened')
         $(".nav-drodown").css('display', 'none')
         $(this).addClass("dropdown-opened")
         $("#navUserDropdown").css('display', 'block')
         $(this).attr('data-state', 'opened')
      }else {
         // close
         $(this).removeClass("dropdown-opened")
         $("#navUserDropdown").css('display', 'none')
         $(this).attr('data-state', 'closed')
      }
   })

   // dark mode
   $("#PAGESwitchToDarkMode").click(function() {
      if ($("body").hasClass("light-mode")) {
         $("#mainStyleSheet").attr("href", "/assets/css/main.css")
         $("body").removeClass("light-mode")
         $("body").addClass("dark-mode")
      }
      if ($("body").hasClass("dark-mode")) {
         $("#mainStyleSheet").attr("href", "/assets/css/main-dark.css")
         $("body").removeClass("dark-mode")
         $("body").addClass("light-mode")
      }
   })

   if ($("body").hasClass("light-mode")) {
      $("#mainStyleSheet").attr("href", "/assets/css/main.css")
   }
   if ($("body").hasClass("dark-mode")) {
      $("#mainStyleSheet").attr("href", "/assets/css/main-dark.css")
   }
})
