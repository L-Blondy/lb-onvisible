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

- from : `bottom` / top / left/ right
- duration : `"700ms"`, has to be a string
- delay : `"0ms"`, has to be a string
- reverse: `false` / true => reverse the order when delay is applied
