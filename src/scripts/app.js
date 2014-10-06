// RESIZE WINDOW COMPENSATION
$.ui.plugin.add("resizable", "alsoResizeReverse", {

    start: function(event, ui) {

        var self = $(this).data("ui-resizable"), o = self.options;

        var _store = function(exp) {
            $(exp).each(function() {
                $(this).data("resizable-alsoresize-reverse", {
                    width: parseInt($(this).width(), 10), height: parseInt($(this).height(), 10),
                    left: parseInt($(this).css('left'), 10), top: parseInt($(this).css('top'), 10)
                });
            });
        };

        if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.parentNode) {
            if (o.alsoResizeReverse.length) { o.alsoResize = o.alsoResizeReverse[0];    _store(o.alsoResizeReverse); }
            else { $.each(o.alsoResizeReverse, function(exp, c) { _store(exp); }); }
        }else{
            _store(o.alsoResizeReverse);
        }
    },

    resize: function(event, ui){
        var self = $(this).data("ui-resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

        var delta = {
            height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
            top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
        },

        _alsoResizeReverse = function(exp, c) {
            $(exp).each(function() {
                var el = $(this), start = $(this).data("resizable-alsoresize-reverse"), style = {}, css = c && c.length ? c : ['width', 'height', 'top', 'left'];

                $.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
                    var sum = (start[prop]||0) - (delta[prop]||0); // subtracting instead of adding
                    if (sum && sum >= 0)
                        style[prop] = sum || null;
                });

                //Opera fixing relative position
                if (/relative/.test(el.css('position')) && $.support.opera) {
                    self._revertToRelativePosition = true;
                    el.css({ position: 'absolute', top: 'auto', left: 'auto' });
                }

                el.css(style);
            });
        };

        if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.nodeType) {
            $.each(o.alsoResizeReverse, function(exp, c) { _alsoResizeReverse(exp, c); });
        }else{
            _alsoResizeReverse(o.alsoResizeReverse);
        }
    },

    stop: function(event, ui){
        var self = $(this).data("ui-resizable");

        //Opera fixing relative position
        if (self._revertToRelativePosition && $.support.opera) {
            self._revertToRelativePosition = false;
            el.css({ position: 'relative' });
        }

        $(this).removeData("resizable-alsoresize-reverse");
    }
});






// RESIZABLE http://api.jqueryui.com/resizable/
$(function() {
    $("#imperialcountry").resizable({
        handles: 'e',
        alsoResizeReverse: "#orientalcountry"
    });
});

$( "#imperialcountry" ).resizable({
        handles: 'e',
        stop: function() {
            var $containertwo = $('#imperialcountry');
            $containertwo.isotope('layout');
        
            var $container = $('#orientalcountry'); 
            $container.isotope('layout');
        }
});

// INITIALISE ISOTOPES
// FIRST ISOTOPE
$(window).load(function(){
    var $containertwo = $('#imperialcountry');
    // init
    $containertwo.isotope({
        // options
        itemSelector: '.nytPhoto',
        layoutMode: 'masonry',
        getSortData: {
            saturation: '.saturation parseInt',
            hue: '.hue parseInt',
            brightness: '.brightness parseInt',
            complexity: '.complexity parseInt',
        }
    });

    // sort items on button click
    $('#sorts').on( 'click', 'button', function() {
        var sortValue = $(this).attr('data-sort-value');
        $containertwo.isotope({ sortBy: sortValue });
    });

    // filter items on button click
    $('.filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $containertwo.isotope({ filter: filterValue });
    });


// SECOND ISOTOPE
    var $container = $('#orientalcountry');
    // init
    $container.isotope({
        // options
        itemSelector: '.nytPhoto',
        layoutMode: 'masonry',
        getSortData: {
            saturation: '.saturation parseInt',
            hue: '.hue parseInt',
            brightness: '.brightness parseInt',
            complexity: '.complexity parseInt',
        }
    });

    // sort items on button click
    $('#sorts').on( 'click', 'button', function() {
        var sortValue = $(this).attr('data-sort-value');
        $container.isotope({ sortBy: sortValue });
    });

    // filter items on button click
    $('.filters').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });  

}); //closing window load function

// RESIZE ISOTOPES
// 25% x 75%
$("#twentyfiveSeventyfive").click(function() {
    $("#imperialcountry").css( "width", "25%" );
    $("#imperialcountry").css( "transition", "width .5s linear;" );

    $("#orientalcountry").css( "width", "75%" );
    $("#orientalcountry").css( "transition", "width .5s linear;" );

    // herpositioneer foto's
    var $containertwo = $('#imperialcountry');
    $containertwo.isotope('layout');
    
    var $container = $('#orientalcountry'); 
    $container.isotope('layout');
});

// 50% x 50%
$("#fiftyFifty").click(function() {
    $("#imperialcountry").css( "width", "50%" );
    $("#imperialcountry").css( "transition", "width .5s linear;" );

    $("#orientalcountry").css( "width", "50%" );
    $("#orientalcountry").css( "transition", "width .5s linear;" );

    // herpositioneer foto's
    var $containertwo = $('#imperialcountry');
    $containertwo.isotope('layout');
    
    var $container = $('#orientalcountry'); 
    $container.isotope('layout');
});

// 75% x 25%
$("#seventyfiveTwentyfive").click(function() {
    $("#imperialcountry").css( "width", "75%" );
    $("#imperialcountry").css( "transition", "width .5s linear;" );

    $("#orientalcountry").css( "width", "25%" );
    $("#orientalcountry").css( "transition", "width .5s linear;" );

    // herpositioneer foto's
    var $containertwo = $('#imperialcountry');
    $containertwo.isotope('layout');
    
    var $container = $('#orientalcountry'); 
    $container.isotope('layout');
});

// GRAYSCALE
$("#makeGray").click(function() {
    $( ".fluid" ).addClass( "grayscale" );
});

// COLORS 
$("#makeColor").click(function() {
    $( ".fluid" ).removeClass( "grayscale" );
});

// HANDIG VOOR LATER
// $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

// FILTERBAR GLUE TO TOP
$(window).scroll(function(e){ 
  $el = $('.filtercontrol'); 
  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
    $('.filtercontrol').css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 200 && $el.css('position') == 'fixed')
  {
    $('.filtercontrol').css({'position': 'static', 'top': '0px'}); 
  } 
});

