$(document).ready(function () {
  // bg-imgs

  if ($("[data-bg-img]")) {
    $.map($("[data-bg-img]"), function (el) {
      $(el).css("background-image", $(el).data("bg-img"));
    });
  }

  // scroling and header top
  let scrolTop = $(window).scrollTop();

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".header_wrapper").addClass("scrolling");
    } else {
      $(".header_wrapper").removeClass("scrolling");
    }
    if (scrolTop < scroll) {
      if (scroll < 100) {
        $(".header_wrapper").removeClass("hide");
      } else {
        $(".header_wrapper").addClass("hide");
      }
    } else {
      $(".header_wrapper").removeClass("hide");
    }

    scrolTop = $(window).scrollTop();

    if (scroll > $(window).height() / 2) {
      $(".back-to-top").addClass("in");
    } else {
      $(".back-to-top").removeClass("in");
    }
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
    $(".homeId_slider").slick({
      infinite: false,
    });

    $(".homeId_slider .slick-arrow.slick-prev").html(
      `<i class="icon-chevron-thin-left"></i>`
    );
    $(".homeId_slider .slick-arrow.slick-next").html(
      `<i class="icon-chevron-thin-right"></i>`
    );
  }

  // search-form
  if ($(".search-form")) {
    let widthHalf = parseFloat($(".search-form").css("width")) / 2;
    let xCenter = parseFloat($(".search-form").css("left")) - widthHalf;
    let yCenter = parseFloat($(".search-form").css("height")) / 2;
    $(".search-form").css("left", xCenter);
    $(".search-form").css("bottom", -yCenter);

    $(".search_form").submit(function (e) {
      e.preventDefault();
    });

    $(".advanced-btn a").click(function (e) {
      e.preventDefault();
    });

    $(".option-list a").click(function (e) {
      e.preventDefault();
    });

    let statusItems = [
      {
        text: "All Status",
        isActive: true,
      },
      {
        text: "For Rent",
        isActive: false,
      },
      {
        text: "For Sale",
        isActive: false,
      },
    ];

    let typeItems = [
      {
        text: "All Types",
        isActive: true,
      },
      {
        text: "Apartment",
        isActive: false,
      },
      {
        text: "Bar",
        isActive: false,
      },
      {
        text: "Cafe",
        isActive: false,
      },
      {
        text: "Farm",
        isActive: false,
      },
      {
        text: "House",
        isActive: false,
      },
      {
        text: "Luxury Homes",
        isActive: false,
      },
      {
        text: "Office",
        isActive: false,
      },
      {
        text: "Single Family",
        isActive: false,
      },
      {
        text: "Store",
        isActive: false,
      },
      {
        text: "Villa",
        isActive: false,
      },
    ];
    let prewElemId;
    $(".select-input button").click(function (e) {
      if (prewElemId == $(this).prev().attr("id")) {
        $(this).next().toggleClass("d-none");
      } else {
        $(".select-input button").next().addClass("d-none");
        $(this).next().removeClass("d-none");
      }

      let listItems = $(this)
        .next()
        .children(".option-list")
        .children("ul")
        .children();

      function selectItem(e) {
        let textItem = this.children[0].innerText;
        this.parentElement.parentElement.parentElement.previousElementSibling.children[0].innerText =
          textItem;
        $.each(listItems, function (i, v) {
          v.removeEventListener("click", selectItem, { once: true });
        });
      }

      $.each(listItems, function (i, v) {
        v.addEventListener("click", selectItem, { once: true });
      });

      prewElemId = $(this).prev().attr("id");

      $(".status_select input").on("input", function (e) {
        // console.log($(this).val());
        // console.log($("#status_select_ul li a").text().contains($(this).val()));
        // console.log(
        //   $('#status_select_ul li a:contains("' + $(this).val() + '")').text()
        // );
        // console.log($.inArray($(this).val(), statusList));
        let ulList = ``;
        statusItems.forEach((v, i, a) => {
          if (v.text.toUpperCase().includes($(this).val().toUpperCase())) {
            ulList += `<li class="${v.isActive ? "selected active" : ""}">
            <a href="#"> ${v.text} </a>
          </li>`;
          }
        });
        $("#status_select_ul").html(ulList);

        $(".option-list a").click(function (e) {
          e.preventDefault();
        });
        let listItems = $("#status_select_ul").children();

        function selectItem(e) {
          let textItem = this.children[0].innerText;
          this.parentElement.parentElement.parentElement.previousElementSibling.children[0].innerText =
            textItem;
          $.each(listItems, function (i, v) {
            v.removeEventListener("click", selectItem, { once: true });
          });
        }

        $.each(listItems, function (i, v) {
          v.addEventListener("click", selectItem, { once: true });
        });
      });

      $(".type_select input").on("input", function (e) {
        let ulList = ``;
        typeItems.forEach((v) => {
          if (v.text.toUpperCase().includes($(this).val().toUpperCase())) {
            ulList += `<li class="${v.isActive ? "selected active" : ""}">
            <a href="#"> ${v.text} </a>
          </li>`;
          }
        });
        $("#type_select_ul").html(ulList);
        $(".option-list a").click(function (e) {
          e.preventDefault();
        });
        let listItems = $("#type_select_ul").children();

        function selectItem(e) {
          let textItem = this.children[0].innerText;
          this.parentElement.parentElement.parentElement.previousElementSibling.children[0].innerText =
            textItem;
          $.each(listItems, function (i, v) {
            v.removeEventListener("click", selectItem, { once: true });
          });
        }

        $.each(listItems, function (i, v) {
          v.addEventListener("click", selectItem, { once: true });
        });
      });

      // -------> bu usul da isleyir
      // $(":input").on(".option-select_search input", function (e) {
      //   console.log($(this).val());
      // });
      // ---------

      // console.log("currentTarget: ");
      // console.log(e.currentTarget.tagName);

      // console.log("target: ");
      // console.log(e.target.tagName);
    });

    $(document).click(function (e) {
      if (!e.target.className.includes("option")) {
        $(".select-input button").next().addClass("d-none");
      }
    });
  }

  if ($(".slide_items")) {
    $(".slide_items").slick({
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".team_wrapper")) {
    $(".team_wrapper").slick({
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".news_wrapper")) {
    $(".news_wrapper").slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".clients_wrapper")) {
    $(".clients_wrapper").slick({
      dots: false,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }
  if ($(".back-to-top")) {
    $(".back-to-top").click(function (e) {
      e.preventDefault();
      $(window).scrollTop(0);
    });
  }
});
