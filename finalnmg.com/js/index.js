
$(function () {
  var prevScrollpos = window.pageYOffset;
    $(window).on('scroll', function () {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('.navbar').removeClass('active');
        } else {
            $('.navbar').addClass('active');
        }
        prevScrollpos = currentScrollPos;
    });
});

jQuery(function ($) {
    $('.carousel').carousel();
    var caption = $('div.carousel-item:nth-child(1) .media-content');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .media-content');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});
//bottom of front page slideshow--------------------------
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
}, 12000);


// Inint ScrollMagic---------------------------------------
var controller = new ScrollMagic.Controller();

  $('.left-quote').each(function() {
    // build a scene
    var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 1,
            offset: 100
  })

        .setClassToggle(this, 'fade-in') // add class to section1
        .addTo(controller);
});

  $('.right-quote').each(function() {
  // build a scene
    var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 1,
            offset: 100

        })
        .setClassToggle(this, 'fade-in') // add class to section1
        .addTo(controller);
});

  $('.center-quote').each(function() {
  // build a scene
    var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 1,
            offset: 100
        })
        .setClassToggle(this, 'fade-in') // add class to section1
        .addTo(controller);
});



  $('.country-info').each(function() {
      var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 1,
            offset: 100
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);




});

//map image trigger--------------------------------
    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#c2',
          triggerHook: 0.8,
          offset: 100

        })
          .setClassToggle('.picbox', 'fade-in') // add class to section1
          .addTo(controller);

          var ourScene = new ScrollMagic.Scene({
                triggerElement: '#b2',
                triggerHook: 0.8,
                offset: 100

              })
                .setClassToggle('.picbox', 'fade-in') // add class to section1
                .addTo(controller);

                var ourScene = new ScrollMagic.Scene({
                      triggerElement: '#r2',
                      triggerHook: 0.8,
                      offset: 100

                    })
                      .setClassToggle('.picbox', 'fade-in') // add class to section1
                      .addTo(controller);

                      var ourScene = new ScrollMagic.Scene({
                            triggerElement: '#d2',
                            triggerHook: 0.8,
                            offset: 100

                          })
                            .setClassToggle('.picbox', 'fade-in') // add class to section1
                            .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#c4',
          triggerHook: 0.8,
          offset: 100

          })
          .setClassToggle('.cimg1', 'fade-out') // add class to section1
          .addTo(controller);

          var ourScene = new ScrollMagic.Scene({
                triggerElement: '#b4',
                triggerHook: 0.8,
                offset: 100

                })
                .setClassToggle('.bimg1', 'fade-out') // add class to section1
                .addTo(controller);

                var ourScene = new ScrollMagic.Scene({
                      triggerElement: '#r4',
                      triggerHook: 0.8,
                      offset: 100

                      })
                      .setClassToggle('.rimg1', 'fade-out') // add class to section1
                      .addTo(controller);

                      var ourScene = new ScrollMagic.Scene({
                            triggerElement: '#d4',
                            triggerHook: 0.8,
                            offset: 100

                            })
                            .setClassToggle('.dimg1', 'fade-out') // add class to section1
                            .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#c6',
          triggerHook: 0.8,
          offset: 100

          })
          .setClassToggle('.cimg2', 'fade-out') // add class to section1
          .addTo(controller);

          var ourScene = new ScrollMagic.Scene({
                triggerElement: '#b6',
                triggerHook: 0.8,
                offset: 100

                })
                .setClassToggle('.bimg2', 'fade-out') // add class to section1
                .addTo(controller);

                var ourScene = new ScrollMagic.Scene({
                      triggerElement: '#r6',
                      triggerHook: 0.8,
                      offset: 100

                      })
                      .setClassToggle('.rimg2', 'fade-out') // add class to section1
                      .addTo(controller);

                      var ourScene = new ScrollMagic.Scene({
                            triggerElement: '#d6',
                            triggerHook: 0.8,
                            offset: 100

                            })
                            .setClassToggle('.dimg2', 'fade-out') // add class to section1
                            .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#b8',
          triggerHook: 0.8,
          offset: 100

          })
          .setClassToggle('.img3', 'fade-out') // add class to section1
          .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#c8',
          triggerHook: 0.8,
          offset: 100
              })
          .setClassToggle('.cimg3', 'fade-out') // add class to section1
          .addTo(controller);

          var ourScene = new ScrollMagic.Scene({
                triggerElement: '#r8',
                triggerHook: 0.8,
                offset: 100
                    })
                .setClassToggle('.rimg3', 'fade-out') // add class to section1
                .addTo(controller);

                var ourScene = new ScrollMagic.Scene({
                      triggerElement: '#d8',
                      triggerHook: 0.8,
                      offset: 100
                          })
                      .setClassToggle('.dimg3', 'fade-out') // add class to section1
                      .addTo(controller);

//country name fade triggers--------------------------------------
    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#country-name',
          triggerHook: 0.8,
          offset: 0
        })
        .setClassToggle('#country-name', 'fade-in')
        .addTo(controller);


    var ourScene = new ScrollMagic.Scene({
          triggerElement: '#country-name-2',
          triggerHook: 0.8,
          offset: 0
        })
        .setClassToggle('#country-name-2', 'fade-in')
        .addTo(controller);


    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#country-name-3',
        triggerHook: 0.8,
        offset: 0
    })
    .setClassToggle('#country-name-3', 'fade-in')
    .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#country-name-4',
        triggerHook: 0.8,
        offset: 0
    })
    .setClassToggle('#country-name-4', 'fade-in')
    .addTo(controller);

//picture buttons---------------------------------------------------
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.picture-buttons-container-home',
        triggerHook: 3,
        offset: 0.8
    })
    .setClassToggle('body', 'color-change') // add class to section1
    .addTo(controller);



//footer info----------------------------------------------------------
$(function() {
    $('.footer-links-holder h3').click(function() {
        $(this).parent().toggleClass('active');
    })
});
