var data;

var _w, _h;

function onStartGame(w, h, m)
{
	_w = w;
	_h = h;
}

function onClickTile(x, y)
{
	if(x < 0 || y < 0 || x >= _w || y >= _h)
	{
		return;
	}
	if(tds[y][x].classList.contains("known"))
	{
		return;
	}
	tds[y][x].classList.add("known");
	ff(x, y);
}

var dir8 =  [[1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1]];

function ff(x, y)
{
	if(tds[y][x].classList.contains("n0"))
	{
		for(var i = 0; i < 8; i++)
		{
			onClickTile(x + dir8[i][0], y + dir8[i][1]);
		}
	}
}

