$(document).ready(function() {

	var hasLoaded = false;

    $('#fullpage').fullpage({
    	'verticalCentered': false,
    	'css3': true,
    	'sectionsColor': ['#3C4F6A', '#F2EACF', '#33435A', '#33435A','#F2EACF','#3d385a'],
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
			    	var selected = $(this).next();
			    	setTimeout(function(){
			    		selected.css('opacity', 1);
			    	}, 600);
			    	
					$(this).parent().find('.skill-list').removeClass('visible');
			    });


    		}

    		if(index == 5 && !hasLoaded) {
    			hasLoaded = true;
    			var delay = 1000;
    			$('.info-container ul > li').each(function(){
    				var that = $(this);
    				that.hide();
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