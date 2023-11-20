# escprint

A minimalist package for styling command line outputs

## Usage
`prnt` function
- Use **&lt;style...&gt;** to add that style to the current output style
- Use **&lt;/style...&gt;** to reset the output style and then set the style to whatever is in the tag
- Use **&lt;/&gt;** to reset the output style
- Use a **,** to deliminate multiple styles

*Example*
```js
import {prnt} from "escprint";

prnt(`
    This is normal 
    <cyan> this is cyan 
    <underline> this is cyan and underlined 
    </green> this is just green 
    </> this is normal again
`);

// use "," to use multiple styles

prnt(`
    <red,underline> This is red and underlined
    </italic> This is just italic 
`)
```

## Recognized Styles
### Text Decoration
| String | Description |
| ------ | ----------- |
| reset | reset formatting to default |
| bold | make text bold |
| dim | make text dim |
| blink | make text blink |
| italic | make text italic |
| i | italic shorthand |
| underline | underline text |
| u | underline shorthand |
### Color
| String | Description |
| ------ | ----------- |
| black | set foreground color to black |
| white | set foreground color to white |
| red | set foreground color to red|
| green | set foreground color to green |
| yellow | set foreground color to yellow |
| blue | set foreground color to blue |
| magenta | set foreground color to magenta |
| cyan | set foreground color to cyan |
| Black | set foreground color to bright black |
| White | set foreground color to bright white |
| Red | set foreground color to bright red|
| Green | set foreground color to bright green |
| Yellow | set foreground color to bright yellow |
| Blue | set foreground color to bright blue |
| Magenta | set foreground color to bright magenta |
| Cyan | set foreground color to bright cyan |
| bblack | set background color to black |
| bwhite | set background color to white |
| bred | set background color to red|
| bgreen | set background color to green |
| byellow | set background color to yellow |
| bblue | set background color to blue |
| bmagenta | set background color to magenta |
| bcyan | set background color to cyan |
| bBlack | set background color to bright black |
| bWhite | set background color to bright white |
| bRed | set background color to bright red|
| bGreen | set background color to bright green |
| bYellow | set background color to bright yellow |
| bBlue | set background color to bright blue |
| bMagenta | set background color to bright magenta |
| bCyan | set background color to bright cyan |

### Other
| String | Description |
| ------ | ----------- |
| reverse | reverse foreground & background |
| hidden | hide text |
| strike | strikethrough text |
| strikethrough | strikethrough text|
| delete | delete character |
| home | set cursor to home position |
| request | request cursor position |
| savecursor | save cursor position |
| restorecursor | restore cursor position |
