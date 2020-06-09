# lb-onvisible

Adds classNames to the elements when they are visible.  
If the `IntersectionObserver` API is not supported, the classeNames will be added on page load.  
Great for animation libraries like **Animate.css**.  


## Usage

**1. Javascript trigger**

```
import { onVisible } from "lb-onvisible"
```
```
const options = {
	class: "oneClass anotherClass ...",
	duration: 700,
	reverse: false,
	delay: 0, 
	root: viewport
}
onVisible( '.selector', options );

//also accept Node and NodeList instead of a string selector
```
**2. HTML trigger**
```
import  "lb-onvisible"
```
```
<div data-onVisible="fadeFromLeft">
	will fade in from the left when intersecting with the root element
</div>
```

**NOTE**<br/>
Elements all have `.offScreen { opacity: 0; }` before the class is applied.<br/>
Feel free to override.

## Options

- **class** : `no default` class to add when the element is on screen
- **duration** : `700`: *number*, sets "animation-duration" for the element 
- **reverse** : `false` / true: *boolean* => reverse the order when delay is applied
- **delay** : `0` = *number*, delay to set className between each element. 
- **root** : `viewport` = *DOM element*, the IntersectionObserver root. 

## Built-in classes
- fadeFromTop
- fadeFromBottom
- fadeFromLeft
- fadeFromRight