var stickyNavTop = $('.top_nav').offset().top;
var x = $('.section-services').offset().top;
var y = x + $('.section-services').height();
var isNavShowing;


$(function() {

    $(".element").typed({
        strings: makeTyperArray(100),
        typeSpeed: 10
    });
});

function makeTyperArray(length){
  var text=[];
  for (var i = 0; i < length; i++) {
  text.push.apply(text, ["Welcome to", "the Universe of", "your Clients Online!"]);
  }
  return text;
}

var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
        showTop();
    } else {
        hideTop();
    }
};
stickyNav();

// Function to submit forms
function submitForm(elemetnid) {
    console.log(elemetnid);
    var frm = $('#' + elemetnid);
    frm.submit();
    frm.reset();
    return false;
}

// Hide/Show question in FAQ section
$(document).on('click', '.question', function(e) {
    var index = $(".question").index(this);
    if ($('.answer').eq(index).css('display') == 'none') {
        $('.answer').hide();
        $('.answer').eq(index).toggle();
    } else {
        $('.answer').eq(index).toggle();
    }

});

// Scroll Listerner for page scroll used for nav-hilights
$(window).scroll(function() {
    stickyNav();
    checkInView();
});


// Check which section is in view and hilight nav's
function checkInView() {
    var z = $(window).scrollTop();
    $('section').each(function(i) {
        if ($(this).offset().top + $(this).height() / 4 > z) {
            if (isNavShowing) {
                $('.nav_link').css("color", "#60daaa");
            } else {
                $('.nav_link').css("color", "white");
            }
            $("nav a:nth-child(" + parseInt(i + 1) + ")").css("color", "white");
            $('.footer_link').css("color", "#60DAAA");
            return false;
        }
    });
}

function showTop() {
    if (!isNavShowing) {
        $('.nav_link').css("color", "#60daaa");
    }
    isNavShowing = true;
}

function hideTop() {
    if (isNavShowing) {
        $('.nav_link').css("color", "white");
    }
    isNavShowing = false;
}


// Login Form/Popup Code
$(".modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close"
});

$(".modal_trigger").click(function() {
    $(".user_login").show();
    $("#login_error").hide();
    $(".header_title").text('Login');
    return false;
});

$(function() {
    $("#login_error").hide();
    $(".btn_red").click(function() {
        $(".user_login").hide();
        $("#login_error").show();
        $(".header_title").text('Login Error!');
        return false;
    });

    // Going back
    $(".back_btn").click(function() {
        $(".user_login").hide();
        $("#login_error").show();
        return false;
    });
});
