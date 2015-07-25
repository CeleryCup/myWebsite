
// Calculate the time for page loading
// fake loading if duration is short than 3s
var timeStart = Date.now();

$(window).load(function(){
    var timeDuration = Date.now() - timeStart;
    if (timeDuration < 3000) {
        setTimeout(function(){
        $(".pre-loading").fadeOut('slow', function(){
        $('.main-content').fadeIn('slow');
    });
    }, 3000 - timeDuration);
    } 
    else {
        $(".pre-loading").fadeOut('slow', function(){
        $('.main-content').fadeIn('slow');
    });
    }



    // to ensure the moreaboutme panel only show once
    var hasLoaded = false;
    var firstTime = true;
    $('.info-container ul > li').each(function(){
       $(this).hide();
    });


    $("body").append('<audio id="sound" preload="auto"><source src="audio/uptownfunk.ogg" type="audio/ogg"/><source src="audio/uptownfunk.mp3" type="audio/mp3" /></audio>')
    var sound = $('#sound').get(0);


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

    $('#info-start').click(function(e){
            e.preventDefault();
            $('.contact-me').addClass('showpanel');
            $('.closepanel').addClass('is-visible');
    });

    $('.closepanel').click(function(){
        $('.contact-me').removeClass('showpanel');
        $('.closepanel').removeClass('is-visible');
    });

    // setting up projects layout
    var $grid= $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('#projects ul li a').click(function(){
        var data = $(this).data('filter');
        if(data){
            $grid.isotope({filter: '.' + data});
        }
        else {
            $grid.isotope({filter: '*'});
        }
        
    });
    // setting up projects image description
    $('.grid-item').mouseover(function(){
        $(this).find('img').addClass('hoverOn');
        $(this).find('.info').addClass('showInfo');

    });
    $('.grid-item').mouseout(function(){
        $(this).find('img').removeClass('hoverOn');
        $(this).find('.info').removeClass('showInfo');
    })



    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#3C4F6A', '#EAAB28', '#578F7B', '#B74D3F','#F2EACF','#3d385a'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Intro', 'About Me', 'Skills', 'Projects', 'More About Me', 'Contact Me'],

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
                $('h2').mouseover(function(){
                    
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

