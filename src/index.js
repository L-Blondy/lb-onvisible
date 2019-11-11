import "lb-lazy-images";
import setScrollNav from "lb-scroll-nav";
import slideInView from "./slideIn";
import "./styles.css";

/************** NAVBAR ***************/
const sectionsContainer = document.querySelector( ".sections-container" )
const sections = document.querySelectorAll( "section" )
setScrollNav( sections, sectionsContainer )

/************ SLIDE IN VIEW ************/

const images = document.querySelector( ".images" );
const images_options = {
	from: "left",
}
slideInView( images, images_options );

const images3 = document.querySelector( ".images" ).children;
const images3_options = {
	from: "bottom",
	delay: 200,
	duration: "1000ms",
	reverse: false
}
slideInView( images3, images3_options );

const navlinks = document.querySelectorAll( ".navlink" );
const navlinks_options = {
	from: "top",
	delay: 100,
	duration: "1000ms",
	reverse: true
}
slideInView( navlinks, navlinks_options );

