import "./slideIn.css";

const targets = document.querySelectorAll( "[data-onVisible]" );
[].forEach.call( targets, target => {
	onVisible( target, { class: target.dataset.onvisible } )
} )

export function onVisible ( nodeList, { class: addClass, duration, delay = 0, reverse = false } = {} ) {

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
		if ( typeof nodeList === "string" )
			nodeList = document.querySelectorAll( nodeList )
		if ( !nodeList.length ) {
			nodeList = [ nodeList ]
		}
		nodeList.forEach( node => {
			node.classList.add( node.dataset.onvisible )
		} )
		console.log( "No slide in animation, this browser might not support the IntersectionObsever API" )
	}
}
