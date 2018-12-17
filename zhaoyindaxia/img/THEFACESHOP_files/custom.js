jQuery( document ).ready(function() {
	jQuery(function() {
    	jQuery( "#tabs" ).tabs();
  	});
});
jQuery( document ).ready(function() {
    jQuery('.quick-access .verify').mouseover(function(){
       if(!jQuery(this).hasClass('active')){
           jQuery(this).addClass('active');
       }
    });
    jQuery('.quick-access .verify').mouseout(function(){
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
        }
    });
    var homeslider = jQuery('.homeslider').bxSlider({
        auto:true,
        pause:7000,
        controls:false,
        onSliderLoad: function (currentIndex) {
            var sliderListItems = jQuery('.homeslider li');
            var element = sliderListItems.get(currentIndex + 1);
            jQuery(element).find('img').css('opacity', '1.0');
            var oldElement = sliderListItems.get(currentIndex + 2);
            jQuery(oldElement).find('img').css('opacity', '0.3');
            var newElement = sliderListItems.get(currentIndex);
            jQuery(newElement).find('img').css('opacity', '0.3');
        },
        onSlideAfter: function(el, oldIndex, newIndex) {
            jQuery(el).find('img').fadeTo("fast", "1.0");
            var sliderListItems = jQuery('.homeslider li');
            var oldElement = sliderListItems.get(newIndex);
            jQuery(oldElement).find('img').fadeTo("fast", "0.3");
            var newElement = sliderListItems.get(newIndex + 2);
            jQuery(newElement).find('img').fadeTo("fast", "0.3");
        }
    });
});
jQuery( document ).ready(function() {
	jQuery(".block-layered-nav dl dt").click(function() {
		if (jQuery(this).next().is(":hidden")) {
			jQuery(this).children().removeClass('hide');
			jQuery(this).next().slideDown();
        } else {
			jQuery(this).children().addClass('hide');
			jQuery(this).next().slideUp();
        }
	});
});

jQuery( document ).ready(function() {
	jQuery(".home-hot-products .tab-section ul li .price-box:contains('￥')").html(function(_, html) {
	   return  html.replace(/(￥)/g, '<span class="smallcaps">$1</span>')
	});
});
jQuery( document ).ready(function() {
	jQuery(".home-new-products li.item .price-box:contains('￥')").html(function(_, html) {
	   return  html.replace(/(￥)/g, '<span class="smallcaps">$1</span>')
	});
});

jQuery( document ).ready(function() {
	jQuery(".qr-code-sec .qr-code-title").click(function() {
		if (jQuery(this).next().is(":hidden")) {
			jQuery(this).children().addClass("active");
			jQuery(this).next().slideDown();
        } else {
			jQuery(this).children().removeClass("active");
			jQuery(this).next().slideUp();
        }
	});
});




function close_pop() {
    jQuery('.top-mini-banner').animate({
        'opacity': '0'
    }, 300, 'linear', function () {
        jQuery('.top-mini-banner').css('display', 'none');
    });

    setCookie('hide', true, 1);
    return false;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

jQuery( document ).ready(function() {
	jQuery("#jia a img").on("click", function() {
		var oldvalueplus = jQuery(".quantity .quantity_all #quantity_input").val();
		var newvalueplus = parseFloat(oldvalueplus) + 1;
		jQuery(".quantity .quantity_all #quantity_input").val(newvalueplus);
	});
	jQuery("#jian a img").on("click", function() {
		var oldvalueminus = jQuery(".quantity .quantity_all #quantity_input").val();
		var newvalueminus = parseFloat(oldvalueminus) - 1;
		if (oldvalueminus > 0) {
            jQuery(".quantity .quantity_all #quantity_input").val(newvalueminus);
        } else {
            jQuery(".quantity .quantity_all #quantity_input").val("0");
        }
	});
});

jQuery( document ).ready(function() {
    jQuery('.new-product-list').bxSlider({
        auto:true,
        pause:7000,
        controls:false
    });
    jQuery('.homeslider').css('left',jQuery('#ms-topmenu').offset().left);
});
jQuery(window).resize(function(){
    jQuery('.homeslider').css('left',jQuery('#ms-topmenu').offset().left);
});