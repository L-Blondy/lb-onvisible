import "./slideIn.css";

export default function slideInView ( nodeList, { from = "bottom", duration = 700, delay = 0, reverse = false } = {} ) {

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

		const slideObs = new IntersectionObserver( slideCb, {} );

		[].forEach.call( nodeList, elem => {
			slideObs.observe( elem );
			elem.style.animationDuration = duration + "ms";

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
		throw new Error( "No slide in animation, this browser might not support the IntersectionObsever API" )
	}
}
