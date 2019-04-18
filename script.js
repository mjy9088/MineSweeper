function loadMap(h, w, m)
{
    alert("Hello World!");
}

function requestLoadMap(h, w, m)
{
    loadMap(h, w, m);
}

function test()
{
    var map = document.createElement("SCRIPT");
    map.src = "sample/map0.js";
    document.getElementsByTagName("BODY")[0].appendChild(map);
    map.parentElement.removeChild(map);
}
