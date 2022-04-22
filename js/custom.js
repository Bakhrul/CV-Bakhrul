function showModal(target) {
    $("#" + target).addClass('d-block');
}

function hideModal(target) {
    $("#" + target).removeClass('d-block');
}

function myFunction(e) {
    e.classList.toggle("change-toggler")
}

function filterSelection(e) {
    var t, o;
    for (t = document.getElementsByClassName("project-column"), "all" == e && (e = ""), o = 0; o < t.length; o++) w3RemoveClass(t[o], "show-project"), -1 < t[o].className.indexOf(e) && w3AddClass(t[o], "show-project")
}

function w3AddClass(e, t) {
    var o, n, l;
    for (n = e.className.split(" "), l = t.split(" "), o = 0; o < l.length; o++) - 1 == n.indexOf(l[o]) && (e.className += " " + l[o])
}

function w3RemoveClass(e, t) {
    var o, n, l;
    for (n = e.className.split(" "), l = t.split(" "), o = 0; o < l.length; o++)
        for (; - 1 < n.indexOf(l[o]);) n.splice(n.indexOf(l[o]), 1);
    e.className = n.join(" ")
}
$(window).scroll(function () {
    1 < $(window).scrollTop() ? ($(".navbar-custom").css({
        padding: "20px 0",
        background: "white",
        "box-shadow": "0 0 10px rgba(0,0,0,.2)"
    }), $(".nav-link-custom").css("color", "#318be3"), $(".navbar-brand").css({
        color: "#318be3",
        "font-weight": "bold"
    })) : ($(".navbar-custom").css({
        padding: "40px 0",
        background: "transparent",
        "box-shadow": "0 0 0px rgba(0,0,0,.2)"
    }), $(".nav-link-custom").css("color", "white"), $(".navbar-brand").css({
        color: "#fff",
        "font-weight": "bold"
    }))
}), filterSelection("all");
for (var btnContainer = document.getElementById("btn-opsi-project-group"), btns = btnContainer.getElementsByClassName("btn-opsi-project"), i = 0; i < btns.length; i++) btns[i].addEventListener("click", function () {
    var e = document.getElementsByClassName("active-project");
    e[0].className = e[0].className.replace(" active-project", ""), this.className += " active-project"
});
$(document).ready(function () {
    $("#scroll-header").click(function () {
        return event.preventDefault({
            behavior: "smooth"
        }), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, "slow"), !1
    })
}), $(document).ready(function () {
    $("#scroll-about").click(function () {
        return event.preventDefault({
            behavior: "smooth"
        }), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, "slow"), !1
    })
}), $(document).ready(function () {
    $("#scroll-skills").click(function () {
        return event.preventDefault({
            behavior: "smooth"
        }), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, "slow"), !1
    })
}), $(document).ready(function () {
    $("#scroll-contact").click(function () {
        return event.preventDefault({
            behavior: "smooth"
        }), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, "slow"), !1
    })
}), $(".slick12").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !0,
    prevArrow: '<button class=" btn-prev-project" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class=" btn-next-project" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
}), $(".slick11").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2e3,
    prevArrow: '<button class=" slick-prev-motivation" aria-label="Previous" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class=" slick-next-motivation" aria-label="Next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
});