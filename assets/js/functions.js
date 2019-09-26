$(function() {

   $("img").attr("src", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fuser-pictures%2F100%2Ffemale1-512.png&f=1&nofb=1")

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
