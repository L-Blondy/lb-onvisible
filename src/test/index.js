import "lb-lazy-images";
import setScrollNav from "lb-scroll-nav";
import onVisible from "../slideIn";
import "./styles.css";

/************** NAVBAR ***************/
const sectionsContainer = document.querySelector( ".sections-container" )
const sections = document.querySelectorAll( "section" )
setScrollNav( sections, sectionsContainer )

/************ SLIDE IN VIEW ************/

const images_options = {
	class: "fadeFromRight",
	duration: 1000,
}
onVisible( ".images img", images_options );

const navlinks_options = {
	class: "fadeFromRight",
	delay: 100,
	reverse: false,
	duration: 2000,
}
onVisible( ".navlink", navlinks_options );

