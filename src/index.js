import setScrollNav from "lb-scroll-nav";
import slideInView from "./slideInView";
import "./styles.css";

/************** NAVBAR ***************/
const sectionsContainer = document.querySelector( ".sections-container" )
const sections = document.querySelectorAll( "section" )
setScrollNav( sections, sectionsContainer )

/************ SLIDE IN VIEW ************/

const images = document.querySelector( ".images" ).children;
const images_options = {
	from: "left",
	delay: 130,
	duration: "1000ms",
	reverse: false
}
slideInView( images, images_options );

const navlinks = document.querySelectorAll( ".navlink" );
const navlinks_options = {
	from: "top",
	delay: 100,
	duration: "1000ms",
	reverse: true
}
slideInView( navlinks, navlinks_options );

