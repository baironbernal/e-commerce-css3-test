$( document ).ready(function() {
      //Modal Gallery
      let modalGallery =  $('#modal-gallery__background');
      let buttonMenuMobile =  $('#header__menu');
      //Modal Menu Navbar Mobile
      let modalMenuMobile =  $('#modal-navbar__background');
      let closeModalMenuMobile =  $('#modal-navbar__close-icon');
      //image main Container
      let imageContainer =  $('#gallery__image-container');
      //cart
      let headerCart =  $('#header__cart');
      let cartModal = $('#cart-modal');
      //main 
      let main = $('#main');
      //minus and plus
      let minus = $('#minus');
      let plus = $('#plus');
      let input = $('#input__number');

      
      if(window.innerWidth < 1110) {
            modalGallery.remove();
      }

      $(buttonMenuMobile).on("click",function() {
            modalMenuMobile.css('display','block');
      });

      $(closeModalMenuMobile).on("click",function() {
            modalMenuMobile.css('display','none');
      });

      $(imageContainer).on("click",function() {
            toogleModalGallery();
      });

      $(document).on('keyup', function(e) {
            if (e.key == "Escape") toogleModalGallery();
      });
      $(headerCart).on("click", function() {
            cartModal.toggleClass('active');
      });

      $(minus).on("click", function() {
            let v = parseInt(input.val());
            return input.val(v - 1);
      });

      $(plus).on("click", function() {
            let v = parseInt(input.val());
            return input.val(v + 1);
      });

      function toogleModalGallery() {
            if(window.innerWidth > 1110) {
                  modalGallery.toggleClass('visibility');
                  main.toggleClass('opacity');
                  $("body").css("overflow", "hidden");
            }
            
      }
   });