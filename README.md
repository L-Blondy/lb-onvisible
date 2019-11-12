# lb-slidein

Slide images on screen

## Usage

```
import slideInView from "lb-slidein"

...

const elems = document.querySelectorAll( ".elem" );
const options = {
	from: "left",
}

slideInView( elems, options );
```

## Options

- **from** : `"bottom"` / "top" / "left" / "right", *string*
- **duration** : `700`, *number*
- **delay** : `0`, *number*
- **reverse** : `false` / true, *boolean* => reverse the order when delay is applied
