var homeContent = '<h1>home</h1>';
var aboutContent = '<h1>about</h1>';
var productsContent = '<h1>products</h1>';
var ourteamContent = '<h1>contact</h1>';


export function modelPageName(pgName) {
    $("#app").html(eval(pgName));
}