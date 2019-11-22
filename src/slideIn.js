import "./slideIn.css";

export default function onVisible ( nodeList, { class: addClass, duration, delay = 0, reverse = false } = {} ) {

	try {
		if ( typeof nodeList === "string" )
			nodeList = document.querySelectorAll( nodeList )
		if ( !nodeList.length )
			nodeList = [ nodeList ]
		if ( reverse ) {
			nodeList = [].slice.call( nodeList ).reverse()
		}
		function slideCb ( entries ) {
			entries.forEach( ( entry, index ) => {
				if ( entry.intersectionRatio > 0 ) {
					setTimeout( () => {
						entry.target.classList.remove( "offScreen" );
						entry.target.className += " " + addClass + " "
					}, delay * index )
					slideObs.unobserve( entry.target )
				}
			} )
		}

		const slideObs = new IntersectionObserver( slideCb, {} );

		[].forEach.call( nodeList, elem => {
			if ( duration )
				elem.style.animationDuration = duration + "ms";
			elem.classList.add( "offScreen" );
			slideObs.observe( elem );
		} )
	}
	catch ( error ) {
		console.log( "No slide in animation, this browser might not support the IntersectionObsever API" )
	}
}
