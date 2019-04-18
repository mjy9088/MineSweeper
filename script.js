var height, width, map;

function loadMap(h, w, m)
{
    height = h;
    width = w;
    map = m;
    var game = document.getElementById("game");
    while (game.firstChild)
    {
        game.removeChild(game.firstChild);
    }
    for(var i = 0; i < h; i++)
    {
        var tr = document.createElement("TR");
        for(var j = 0; j < w; j++)
        {
            var td = document.createElement("TD");
            td.innerText = m.charAt(i * w + j);
            tr.appendChild(td);
        }
        game.appendChild(tr);
    }
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
