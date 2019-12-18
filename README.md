# lb-onvisible

Helps you toggle animations when elements are visible. Works by adding classNames.<br/>
Great for animation libraries like **Animate.css**


## Usage

**1. Javascript trigger**

```
import onVisible from "lb-onvisible"
```
```
const options = {
	class: "oneClass anotherClass ...",
	duration: 700,
	reverse: false,
	delay: 0
}
onVisible( nodeList || element || string, options );
```
**2. HTML trigger**
```
import  "lb-onvisible"
```
```
<section class="section-1" id="one" data-onVisible="fadeFromLeft">
```

**NOTE**<br/>
Elements all have `.offScreen { opacity: 0; }` before the class is applied.<br/>
Feel free to override.

## Options

- **class** : `no default` class to add when the element is on screen
- **duration** : `700` = *number*, sets "animation-duration" for the element 
- **reverse** : `false` / true = *boolean* => reverse the order when delay is applied
- **delay** : `0` = *number*, delay defore applying the class. 

## Native classes
- fadeFromTop
- fadeFromBottom
- fadeFromLeft
- fadeFromRight