var height, width, map, tds;

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
    var dir =  [[1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1]];
	function getListener(x, y)
	{
		return function () { return onClickTile(x, y); };
	}
	tds = [];
    for(var i = 0; i < h; i++)
    {
        var tr = document.createElement("TR");
		var tmp = [];
        for(var j = 0; j < w; j++)
        {
            var td = document.createElement("TD");
			td.addEventListener("click", getListener(j, i));
			var mine = m.charAt(i * w + j);
            var n = 0;
            for(var k = 0; k < 8; k++)
            {
                if(i + dir[k][0] >= 0 && i + dir[k][0] < h && j + dir[k][1] >= 0 && j + dir[k][1] < w && m.charAt((i + dir[k][0]) * w + j + dir[k][1]) == "1")
                {
                    n++;
                }
            }
            if(mine == "1")
            {
                td.classList.add("mine");
            }
            else
            {
                td.classList.add("n" + n);
            }
            tr.appendChild(td);
			tmp.push(td);
        }
        game.appendChild(tr);
		tds.push(tmp);
    }
	onStartGame(w, h, m);
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
	document.getElementById("noti").style.display = "none";
}

var theme;

function setTheme(src)
{
	theme.parentElement.removeChild(theme);
	theme = document.createElement("LINK");
	theme.rel = "stylesheet";
	theme.href = src;
	document.getElementsByTagName("HEAD")[0].appendChild(theme);
}

window.addEventListener("load", function ()
{
	theme = document.createElement("LINK");
	theme.rel = "stylesheet";
	theme.href = "theme/default.css";
	document.getElementsByTagName("HEAD")[0].appendChild(theme);
});

