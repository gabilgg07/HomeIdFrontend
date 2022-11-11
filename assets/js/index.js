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
});
