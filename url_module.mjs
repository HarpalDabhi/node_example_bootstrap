import url, { URL } from "url";

const url_ = new URL("https://www.youtube.com/");

url_.pathname ="/nodejs/codewithdeveloper";
url_.search = "?query=nodejs";
url_.hash = "%%%default%*+-/&";

console.log(url_.href);