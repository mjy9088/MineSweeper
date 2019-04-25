var data;

function onStartGame(w, h, m)
{
}

function onClickTile(x, y)
{
	tds[y][x].classList.toggle("known");
}

