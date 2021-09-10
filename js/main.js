// Burger nav
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// Custom select
$(".submit-form__select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="submit-form__select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="submit-form__custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="submit-form__custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="submit-form__select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".submit-form__custom-option:first-of-type").hover(function() {
  $(this).parents(".submit-form__custom-options").addClass("submit-form__option-hover");
}, function() {
  $(this).parents(".submit-form__custom-options").removeClass("submit-form__option-hover");
});
$(".submit-form__select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".submit-form__select").removeClass("opened");
  });
  $(this).parents(".submit-form__select").toggleClass("opened");
  event.stopPropagation();
});
$(".submit-form__custom-option").on("click", function() {
  $(this).parents(".submit-form__select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".submit-form__custom-options").find(".submit-form__custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".submit-form__select").removeClass("opened");
  $(this).parents(".submit-form__select").find(".submit-form__select-trigger").text($(this).text());
});