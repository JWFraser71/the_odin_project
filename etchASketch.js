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