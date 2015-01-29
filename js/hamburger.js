/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */
localStorage.setItem('menu_action', 'closed');

jQuery(document).ready(function () {

    //Open the menu
    jQuery("#hamburger").click(function () {

    var menu_action = localStorage.getItem('menu_action');
    if(menu_action == "open")
    {
    	var menu_action = "open_d";
    }
    else
    {
    	var menu_action = "closed_d";
    }
    if(menu_action == "closed_d")
    {
        jQuery('#content').css('min-height', jQuery(window).height());
        jQuery('nav').css('opacity', 1);
        var contentWidth = jQuery('#content').width();
        jQuery('#content').css('width', contentWidth);
        jQuery('#contentLayer').css('display', 'block');
        jQuery('#container').bind('touchmove', function (e) {
            e.preventDefault()
    });
        jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
        duration: 700
    });
        localStorage.setItem('menu_action', 'open');
    }
    if(menu_action == "open_d")
    {
        jQuery('#container').unbind('touchmove');
        jQuery("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
        duration: 700,
        complete: function () {
            jQuery('#content').css('width', 'auto');
            jQuery('#contentLayer').css('display', 'none');
            jQuery('nav').css('opacity', 0);
            jQuery('#content').css('min-height', 'auto');
    }
    });
    localStorage.setItem('menu_action', 'closed');
    
    }

    });

    //close the menu
    jQuery("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
                jQuery('nav').css('opacity', 0);
                jQuery('#content').css('min-height', 'auto');

            }
        });
    });

});
