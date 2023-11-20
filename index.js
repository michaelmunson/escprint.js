const Parser = {
    regex: {
        tag: /<([^<>]+)>/g,
        endTag: /<\/([^<>]+)>/g,
        tagWhiteSpace: /\s<([^<>]+)>\s/g
    },
    matchStyles(string=""){
        const tags = [...string.matchAll(this.regex.tag)];
        const endTags = [...string.matchAll(this.regex.endTag)];
        const tagWhiteSpace = [...string.matchAll(this.regex.tagWhiteSpace)]; 
        return {tags, endTags, tagWhiteSpace}; 
    },
    handleStyles(string=""){
        if (typeof string !== "string"){
            return string; 
        }

        string = string.replaceAll("</> ",$.reset).replaceAll("</>",$.reset); 

        const {tags, endTags, tagWhiteSpace} = this.matchStyles(string); 

        for (const tws of tagWhiteSpace){
            const [outer,inner] = tws;
            string = string.replace(outer,outer.trimEnd());
        }
        
        for (const endTag of endTags){
            const [outer,inner] = endTag;
            const styles = inner.split(",");
            let styleString = $.reset;
            for (const style of styles){
                if (style in $){
                    styleString += $[style];
                }
            }
            string = string.replace(outer,styleString);
        }

        for (const tag of tags){
            const [outer,inner] = tag; 
            const styles = inner.split(","); 
            let styleString = "";
            for (const style of styles){
                if (style in $){
                    styleString += $[style];
                }
            }
            string = string.replace(outer,styleString); 
        }

        return string; 
    }
}

export function prnt(...args){
    for (const i in args){
        args[i] = Parser.handleStyles(args[i]); 
    }
    console.log(...args); 
    process.stdout.write(X); 
}

export const $ = {
    "reset" : "\x1b[0m",
    "bold" : "\x1b[1m",
    "dim" : "\x1b[2m",
    "blink" : "\x1b[5m",
    "italic" : "\x1b[3m",
    "i" : "\x1b[3m",
    "underline" : "\x1b[4m",
    "u" : "\x1b[4m",
    "reverse" : "\x1b[7m",
    "hidden" : "\x1b[8m",
    "strike" : "\x1b[9m",
    "strikethrough" : "\x1b[9m",
    "delete" : '\x1b[2K',
    "home" : "\x1b[H",
    "request" : "\x1b[6n",
    "upscroll" : "\x1b[8",
    "savecursor" : "\x1b[s",
    "restorecursor" : "\x1b[u",
    "black" : "\x1b[30m",
    "red" : "\x1b[31m",
    "green" : "\x1b[32m",
    "yellow" : "\x1b[33m",
    "blue" : "\x1b[34m",
    "magenta" : "\x1b[35m",
    "cyan" : "\x1b[36m",
    "white" : "\x1b[37m",
    "Black" : "\x1b[90m",
    "Red" : "\x1b[91m",
    "Green" : "\x1b[92m",
    "Yellow" : "\x1b[93m",
    "Blue" : "\x1b[94m",
    "Magenta" : "\x1b[95m",
    "Cyan" : "\x1b[96m",
    "White" : "\x1b[97m",
    "bblack" : "\x1b[40m",
    "bred" : "\x1b[41m",
    "bgreen" : "\x1b[42m",
    "byellow" : "\x1b[43m",
    "bblue" : "\x1b[44m",
    "bmagenta" : "\x1b[45m",
    "bcyan" : "\x1b[46m",
    "bwhite" : "\x1b[47m",
    "bBlack" : "\x1b[100m",
    "bRed" : "\x1b[101m",
    "bGreen" : "\x1b[102m",
    "bYellow" : "\x1b[103m",
    "bBlue" : "\x1b[104m",
    "bMagenta" : "\x1b[105m",
    "bCyan" : "\x1b[106m",
    "bWhite" : "\x1b[107m",
    // erase from cursor until end of screen
    "del2end" : "\x1b[J",
    // erase from cursor to beginning of screen
    "del2beg" : "\x1b[1J",
    // erase entire screen
    "delall" : "\x1b[2J",
    // erase saved lines
    "delsaved" : "\x1b[3J",
    // erase from cursor to end of line
    "del2endln" : "\x1b[K0",
    // erase start of line to the cursor
    "del2startln" : "\x1b[1K",
    // erase the entire line
    "delln" : "\x1b[2K",
    "nocursor" : "\x1b[?25l",
    "showcursor" : "\x1b[?25h",
    "altbuffer" : "\x1b[?1049h",
    "disablealtbuffer" : "\x1b[?1049l",
    "savescreen" : "\x1b[?47h",
    "restorescreen" : "\x1b[?47l"
}

export const X = $.reset; 
export const RESET = "\x1b[0m"
export const BOLD = "\x1b[1m"
export const DIM = "\x1b[2m"
export const BLINK = "\x1b[5m"
export const ITALIC = "\x1b[3m"
export const I = "\x1b[3m"
export const UNDERLINE = "\x1b[4m"
export const U = "\x1b[4m"
export const REVERSE = "\x1b[7m"
export const HIDDEN = "\x1b[8m"
export const STRIKE = "\x1b[9m"
export const STRIKETHROUGH = "\x1b[9m"
export const DELETE = "\x1b[2K"
export const HOME = "\x1b[H"
export const REQUEST = "\x1b[6n"
export const UPSCROLL = "\x1b[8"
export const SAVECURSOR = "\x1b[s"
export const RESTORECURSOR = "\x1b[u"
export const BLACK = "\x1b[30m"
export const RED = "\x1b[31m"
export const GREEN = "\x1b[32m"
export const YELLOW = "\x1b[33m"
export const BLUE = "\x1b[34m"
export const MAGENTA = "\x1b[35m"
export const CYAN = "\x1b[36m"
export const WHITE = "\x1b[37m"
export const XBLACK = "\x1b[90m"
export const XRED = "\x1b[91m"
export const XGREEN = "\x1b[92m"
export const XYELLOW = "\x1b[93m"
export const XBLUE = "\x1b[94m"
export const XMAGENTA = "\x1b[95m"
export const XCYAN = "\x1b[96m"
export const XWHITE = "\x1b[97m"
export const BBLACK = "\x1b[40m"
export const BRED = "\x1b[41m"
export const BGREEN = "\x1b[42m"
export const BYELLOW = "\x1b[43m"
export const BBLUE = "\x1b[44m"
export const BMAGENTA = "\x1b[45m"
export const BCYAN = "\x1b[46m"
export const BWHITE = "\x1b[47m"
export const BXBLACK = "\x1b[100m"
export const BXRED = "\x1b[101m"
export const BXGREEN = "\x1b[102m"
export const BXYELLOW = "\x1b[103m"
export const BXBLUE = "\x1b[104m"
export const BXMAGENTA = "\x1b[105m"
export const BXCYAN = "\x1b[106m"
export const BXWHITE = "\x1b[107m"
export const DEL2END = "\x1b[J"
export const DEL2BEG = "\x1b[1J"
export const DELALL = "\x1b[2J"
export const DELSAVED = "\x1b[3J"
export const DEL2ENDLN = "\x1b[K0"
export const DEL2STARTLN = "\x1b[1K"
export const DELLN = "\x1b[2K"
export const NOCURSOR = "\x1b[?25l"
export const SHOWCURSOR = "\x1b[?25h"
export const ALTBUFFER = "\x1b[?1049h"
export const DISABLEALTBUFFER = "\x1b[?1049l"
export const SAVESCREEN = "\x1b[?47h"
export const RESTORESCREEN = "\x1b[?47l"
