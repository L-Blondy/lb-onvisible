# lb-on-visible

Helps you toggle animations when elements are visible. Works by adding classNames.<br/>
Great for animation libraries like **Animate.css**


## Usage

```
import onVisible from "lb-slidein"

...
const options = {
	class: "left",
}
onVisible( nodeList || element || string, options );
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