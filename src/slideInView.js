import loadImg from "lb-lazy-images";
import "./slideInView.css";

export default function slideInView ( nodeList, { from = "bottom", duration = "700ms", delay = 0, reverse = false } ) {
	try {
		if ( !nodeList.length )
			nodeList = [ nodeList ]
		if ( reverse ) {
			nodeList = [].slice.call( nodeList ).reverse()
		}
		function slideCb ( entries ) {
			entries.forEach( ( entry, index ) => {
				if ( entry.isIntersecting || from === "top" ) {
					setTimeout( () => entry.target.classList += " slide-in ", delay * index )
				}
			} )
		}
		const loadObs = new IntersectionObserver( loadCb, {} );

		function loadCb ( entries ) {
			entries.forEach( ( entry ) => {
				if ( entry.isIntersecting ) {
					loadImg( entry.target )
				}
			} )
		}
		const slideObs = new IntersectionObserver( slideCb, { rootMargin: "0px 0px 400px 0px" } );

		[].forEach.call( nodeList, elem => {
			if ( elem.dataset.asset )
				loadObs.observe( elem );
			slideObs.observe( elem );
			elem.style.animationDuration = duration;

			switch ( from ) {
				case "bottom":
					return elem.classList += " pre-slide-in-bottom "
				case "top":
					return elem.classList += " pre-slide-in-top "
				case "left":
					return elem.classList += " pre-slide-in-left "
				case "right":
					return elem.classList += " pre-slide-in-right "
				default:
					return elem.classList += " pre-slide-in-bottom "
			}

		} )
	}
	catch ( error ) {
		console.log( "failed lazy loading" )
		loadImg( nodeList )
	}
}