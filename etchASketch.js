var $grid = $('#pixelgrid');

for (i = 0; i < 16; i++) {
    var row = '<div>';
    for (j = 0; j < 16; j++)
        row += '<div class="square"></div>';
        row += '</div>';
        $grid.append(row);
}

var divGrid = document.querySelectorAll('.square');
divGrid.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
    div.setAttribute('style', 'background: black');
    });
});

var resetGrid = document.querySelector('#reset');
resetGrid.addEventListener('click', (e) => {
    divGrid.forEach((div) => {
        div.setAttribute('style', 'background: white');
    });
});

function makeGrid() {
    clearBox();
    gridLayout = window.prompt("How many grids do you want? (default: 16x16) ");

    for (i = 0; i < gridLayout; i++) {
        var row = '<div>';
        for (j = 0; j < gridLayout; j++)
            row += '<div class="square"></div>';
            row += '</div>';
            $grid.append(row);
    }
    var divGrid = document.querySelectorAll('.square');
        divGrid.forEach((div) => {
            div.addEventListener('mouseover', (e) => {
            div.setAttribute('style', 'background: black');
    });
});
}

function clearBox() {
    var div = document.querySelector('#pixelgrid');
    while (div.firstChild){
        div.removeChild(div.firstChild);

    }
}
