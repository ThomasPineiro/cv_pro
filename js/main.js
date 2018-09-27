$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: false,
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: true,
		slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollBar: false,

		//Scrolling
		css3: true,
		scrollingSpeed: 500,
		autoScrolling: true,
        fitToSection: true,
        sectionsColor: ['#8c2493'],
    });

});

$( "#fleche_haut_nav_bar_box" ).hide();
var foo = true;
console.log(foo);
//Animation nav_bar
$( "#fleche_bas_nav_bar_box" ).click(function() {
	if (foo == true) {
		$( "#fleche_bas_nav_bar_box" ).hide();
		$( "#fleche_haut_nav_bar_box" ).show( "slow");
		foo = false;
		console.log(foo);
	}
	else if (foo == false) {
		$( "#fleche_haut_nav_bar_box" ).hide();
		$( "#fleche_bas_nav_bar_box" ).show( "slow");
		foo = true;
		console.log(foo);
	}
  });


//Plugin : horizontal