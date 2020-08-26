$(function(){

    function dropdownFunction(triggeredElem, dropdownParent, wrapper){
        $(triggeredElem).on('click', function(e){
            e.preventDefault();
            const dropdownWrapper = $(this).parents(dropdownParent).find(wrapper);
            dropdownWrapper.toggleClass('active');
        });
    }

    dropdownFunction('li.cart-icon > a', 'li.cart-icon', '.minicart-wrapper'); // mini cart
    dropdownFunction('li.menu-dropdown > a', 'li.menu-dropdown', '.navDropdown-wrapper'); // nav dropdown
    dropdownFunction('li.search-icon > a', 'li.search-icon', '.search-wrapper'); // serach input

    $('a.search-input--close').on('click', function(e){
        e.preventDefault();
        $(this).parents('.search-wrapper').removeClass('active');
    })

});