$(document).ready(function() {

    // to ensure the moreaboutme panel only show once
	var hasLoaded = false;
    var firstTime = true;
    $('.info-container ul > li').each(function(){
       $(this).hide();
    });


    $("body").append('<audio id="sound" preload="auto"><source src="audio/uptownfunk.ogg" type="audio/ogg"/><source src="audio/uptownfunk.mp3" type="audio/mp3" /></audio>')
    var sound = $('#sound').get(0);

    // var music_reset = function(){
    //     sound.pause();
    //     img.css('left', '-200px');
    // };

    // var music_start = function(){
    //     sound.play();
    //     img.animate({left: parseInt($("body").width())}, animationDuratin, music_reset);
    // };

    // $('#playMusic').click(function(){
    //     music_start();
    // });

    $('#playMusic').click(function(){
        var pic = $('#nodding');
        if (firstTime === true) {
           pic.addClass('showpic');
            firstTime = false;
            sound.play();
        } else {
            pic.toggleClass('showpic noshowpic');
            if(pic.hasClass('showpic')) {
                sound.play();
            } else {    
                sound.pause();
            }
        }
        
    }); 

    $('#cd-start').click(function(e){
            e.preventDefault();
            $('.cd-product').addClass('is-product-tour');
            $('.cd-close-product-tour').addClass('is-visible');
    });

    $('.cd-close-product-tour').click(function(){
        $('.cd-product').removeClass('is-product-tour');
        $('.cd-close-product-tour').removeClass('is-visible');
    })


    $('#fullpage').fullpage({
    	'verticalCentered': false,
    	'css3': true,
    	'sectionsColor': ['#3C4F6A', '#EAAB28', '#578F7B', '#B74D3F','#F2EACF','#3d385a'],
    	'navigation': true,
    	'navigationPosition': 'right',
    	'navigationTooltips': ['Intro', 'About Me', 'Skills', 'Projects', 'Contact Me'],

    	'afterLoad': function(anchorLink, index) {

    		if(index == 3) {

    			// add the morphtext effect
    			$(".text-change").Morphext({
			        animation: "fadeInUp",
			        complete: function () {
			           // console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
			        }
			    });

			    // show full list of skills
			    $('h2').mouseenter(function(){
			    	var selected = $(this).next();
			    	selected.css('opacity' , 0);
			    	$(this).parent().find('.skill-list').addClass('visible');
			    });

			    $('h2').mouseout(function(){
                    var that = $(this);
                    var list = $(this).parent().find('.skill-list');
                    list.removeClass('visible');
                    list.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
                        function(e) {
                        if(!list.hasClass('visible')) {
                            that.next().css('opacity', 1);
                        }                       


                    });
			    	// var selected = $(this).next();
			    	// setTimeout(function(){
			    	// 	selected.css('opacity', 1);
			    	// }, 600);
			    	
					
			    });


    		}

    		if(index == 5 && !hasLoaded) {
    			hasLoaded = true;
    			var delay = 1000;
    			$('.info-container ul > li').each(function(){
    				var that = $(this);
    				setTimeout(function(){
    					that.show();
    					if(that.hasClass('dislike')){
    						that.addClass('animated shake');
    					} else {
    						that.addClass('animated bounceIn');
    					}
    				}, delay);
    				delay += 2000;
    			})
    		}
    	}

        
























    });
});