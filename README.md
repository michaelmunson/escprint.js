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

prnt("The <cyan> quick <underline> brown </green> fox </> jumped");
```
output: 
<div>
    The 
    <span style="color:cyan">Quick <u>Brown</u></span> <span style="color:green">fox</span>
    jumped
</div>

*Example 2*
```js
import {prnt} from "escprint";

prnt("The <red,italic> quick <underline> brown </green> fox </> jumped");
```
output: 
<div>
    The 
    <span style="color:red;font-style:italic">Quick <u>Brown</u></span> <span style="color:green">fox</span>
    jumped
</div>