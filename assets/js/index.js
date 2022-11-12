$(document).ready(function () {
  // scroling and header top
  let scrolTop = $(window).scrollTop();

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".header_desktop_wrapper").addClass("scrolling");
    } else {
      $(".header_desktop_wrapper").removeClass("scrolling");
    }
    if (scrolTop < scroll) {
      if (scroll < 100) {
        $(".header_desktop_wrapper").removeClass("hide");
      } else {
        $(".header_desktop_wrapper").addClass("hide");
      }
    } else {
      $(".header_desktop_wrapper").removeClass("hide");
    }

    scrolTop = $(window).scrollTop();
  });

  // burger-menu
  $(".burger-menu i").click(function (e) {
    $("body").toggleClass("scroll-disabled");
    $(".header_mobile").toggleClass("canvas-opened");
    $("main").toggleClass("canvas-opened");
    if ($(".menu-canvas").hasClass("d-none")) {
      $(".menu-canvas").removeClass("d-none");
      setTimeout(() => {
        $(".menu-canvas, .canvas-layout").addClass("opened-canvas");
      }, 10);
    } else {
      $(".menu-canvas, .canvas-layout").removeClass("opened-canvas");
      setTimeout(() => {
        $(".menu-canvas").addClass("d-none");
      }, 10);
    }
  });
  $(".close i, .canvas-layout").click(function (e) {
    $("body").removeClass("scroll-disabled");
    $(".header_mobile").removeClass("canvas-opened");
    $("main").removeClass("canvas-opened");
    $(".menu-canvas, .canvas-layout").removeClass("opened-canvas");
    setTimeout(() => {
      $(".menu-canvas").addClass("d-none");
    }, 400);
  });

  // slider
  if ($(".homeId_slider")) {
    $.map($(".slider-wrapper"), function (el) {
      $(el).css("background-image", $(el).data("bg-img"));
    });

    $(".homeId_slider").slick();

    $(".homeId_slider .slick-arrow.slick-prev").html(
      `<i class="fa-solid fa-chevron-left"></i>`
    );
    $(".homeId_slider .slick-arrow.slick-next").html(
      `<i class="fa-solid fa-chevron-right"></i>`
    );
  }

  // search-form
  if ($(".search-form")) {
    let widthHalf = parseFloat($(".search-form").css("width")) / 2;
    let xCenter = parseFloat($(".search-form").css("left")) - widthHalf;
    console.log(xCenter);
    let yCenter = parseFloat($(".search-form").css("height")) / 2;
    $(".search-form").css("left", xCenter);
    $(".search-form").css("bottom", -yCenter);
  }

  // wellcome section
  if ($("#wellcome")) {
    $("#wellcome").css("background-image", $("#wellcome").data("bg-img"));
  }
});
