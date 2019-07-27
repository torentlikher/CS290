let currentRow = 0;
let currentCol = 0;

createTable();
document.getElementById('myTable').rows[currentRow].cells[currentCol].style.border = 'thick solid black';
createButtons();

document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
    document.getElementById('upButton').addEventListener('click', function(){ selectCell('up'); });
    document.getElementById('downButton').addEventListener('click', function(){ selectCell('down'); });
    document.getElementById('rightButton').addEventListener('click', function(){ selectCell('right'); });
    document.getElementById('leftButton').addEventListener('click', function(){ selectCell('left'); });
    document.getElementById('markButton').addEventListener('click', function(){ selectCell('mark'); })
}


function selectCell(direction){
    
    let table = document.getElementById('myTable');

    if(direction == 'up'){
        if(currentRow == 0){
            //do nothing
        } else {
            table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
            currentRow--;
            table.rows[currentRow].cells[currentCol].style.border = 'thick solid black';
        }
    } else if(direction == 'down') {
        if(currentRow == 2){
            //do nothing
        } else {
            table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
            currentRow++;
            table.rows[currentRow].cells[currentCol].style.border = 'thick solid black';
        }
   
    } else if(direction == 'left'){
        if(currentCol == 0){
            //do nothing
        } else {
            table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
            currentCol--;
            table.rows[currentRow].cells[currentCol].style.border = 'thick solid black';
        }
    } else if(direction == 'right'){
        if(currentCol == 3){
            //do nothing
        } else {
            table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
            currentCol++;
            table.rows[currentRow].cells[currentCol].style.border = 'thick solid black';
        }
    } else if(direction == 'mark'){
        table.rows[currentRow].cells[currentCol].style.backgroundColor = 'yellow';
    }

}

function createButtons(){
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.id = 'buttonTable';
    tbl.style.width = '25%';

    for(let i = 0; i < 3; i++){
        let row = document.createElement('tr');
        for(let j = 0; j < 3; j++){
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    
    body.appendChild(document.createElement('br'));

    body.appendChild(tbl);
    let table = document.getElementById('buttonTable');

    let upButton = document.createElement('button');
    upButton.textContent = 'up';
    upButton.id = 'upButton';

    let downButton = document.createElement('button');
    downButton.textContent = 'down';
    downButton.id = 'downButton';
    
    let leftButton = document.createElement('button');
    leftButton.textContent = 'left';
    leftButton.id = 'leftButton';

    let rightButton = document.createElement('button');
    rightButton.textContent = 'right';
    rightButton.id = 'rightButton';

    table.rows[0].cells[1].appendChild(upButton);
    table.rows[1].cells[0].appendChild(leftButton);
    table.rows[1].cells[2].appendChild(rightButton);
    table.rows[2].cells[1].appendChild(downButton);


}

function createTable(){
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.id = 'myTable';
    tbl.setAttribute('border', '1px solid black');
    tbl.style.width = '50%';

    let thead = document.createElement('thead');

    for(let i = 0; i < 4; i++){
        let th = document.createElement('th');
        th.appendChild(document.createTextNode('Header ' + (i+1)))
        thead.appendChild(th);
    }
    
    tbl.appendChild(thead);

    for(let i = 0; i < 3; i++){
        let row = document.createElement('tr');

        for(let j = 0; j < 4; j++){
            let cell  = document.createElement('td');
            let content = document.createTextNode((i+1) + ', ' + (j+1));

            cell.appendChild(content);
            row.appendChild(cell);

        }
        tbl.appendChild(row);
    }

    body.appendChild(tbl);
    body.appendChild(document.createElement('br'));
    let button = document.createElement('button');
    button.id = 'markButton'
    button.textContent = 'Mark Cell';
    body.appendChild(button);

    
}