import "lb-slidein/dist/slideIn.css";

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
<<<<<<< HEAD
					setTimeout( () => ( entry.target.classList += " slide-in " ), delay * index )
					slideObs.unobserve( entry.target )
				}
			} )
		}

		const slideObs = new IntersectionObserver( slideCb, {} );

		[].forEach.call( nodeList, elem => {
			slideObs.observe( elem );
			elem.style.animationDuration = duration + "ms";

=======
					setTimeout( () => entry.target.classList += " slide-in ", delay * index )
				}
			} )
		}

		const slideObs = new IntersectionObserver( slideCb, {} );

		[].forEach.call( nodeList, elem => {
			slideObs.observe( elem );
			elem.style.animationDuration = duration + "ms";

>>>>>>> 5daa260dedb1e1d41723630c67a46e612ed3f0db
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
<<<<<<< HEAD
		console.log( "No slide in animation, this browser might not support the IntersectionObsever API" )
=======
		throw new Error( "No slide in animation, this browser might not support the IntersectionObsever API" )
>>>>>>> 5daa260dedb1e1d41723630c67a46e612ed3f0db
	}
}

