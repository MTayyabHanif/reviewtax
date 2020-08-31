$('.taxForm form').on('submit', function(e){
    e.preventDefault();
    var valid = true;
    $('.taxForm form select[required],.taxForm form input[required],.taxForm form textarea[required]').each(function(){
        var checkValid = validateQuoteForm(this, true);
        if(checkValid == false){
            valid = false;
        }
    });
    console.log(valid);
});

$('body').on('select change keyup keydown', 'select[required],input[required],textarea[required]', function(){
    validateQuoteForm(this);
});

function validateQuoteForm(elem, isForm=false){
    
    var elem = $(elem);
    if(elem.length < 0){
        return;
    }

    var elemParent = $(elem).parents('.form-item');
    var isEmail = elem.hasClass('form-item--email');
    var emailValidate = elem.val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    var valid = true;

    elemParent.removeClass('input-error');

    if( (!elem.val().trim() && isForm) || (isEmail && !emailValidate) ){
        if(isEmail && !emailValidate){
            elemParent.find('.form-msg').text('Email is not validate');
        } else if(isEmail && emailValidate){
            elemParent.find('.form-msg').text('Email is required');
        }
        elemParent.addClass('input-error');
        valid = false;
    }
    return valid;

}

// $('.phoneNumber-start input').on('keyup', function (e) {
//     validateQuoteForm(this);
//     var maxLength = parseInt($(this).attr('data-length'));
//     var curentValLength = $(this).val().length;
//     curentValLength = curentValLength + 1;

//     if ($(this).val().length >= maxLength) {
//         return false;
//     } else {
//         return true;
//     }
// });
$(".phoneNumber-start input").keydown(function (e) {
    var numLength = $(this).val().length;
    var numValue = $(this).val();
    if (numLength == 3 && e.which != 8 && e.which != 0) {
        $(this).val('(' + numValue + ')');
    } else if (numLength == 9 && e.which != 8 && e.which != 0) {
        $(this).val(numValue + "-");
    }
});