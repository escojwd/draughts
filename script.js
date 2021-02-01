// const gameTable = document.getElementById('gameTable');
const rows = [8,7,6,5,4,3,2,1];
const columns = ['A','B','C','D','E','F','G','H',];


function Game (board, players) {
    this.board = board;
    this.players = players;
}

function Board (element) {
    this.coordinates = [];
    this.generateBoard = function (arr1, arr2){
        element = document.getElementById('gameTable');
        
        arr1.forEach(el1 => {
            arr2.forEach(el2 => {
                let z = el2 + el1;
                const div = document.createElement('div');
                // div.setAttribute.add('draggable');
                // div.textContent = z;
                div.setAttribute('data-id' , z);
                if (el1 % 2) {
                    if (el1) {
                        div.classList.add('grey-even'); 
                    }
                } else {
                    if (el2) {
                        div.classList.add('grey-odd');
                    }
                }
                element.appendChild(div);
                let coordinate = el2 + el1;
                this.coordinates.push(coordinate);
            });
        });
    }
}

const boardOne = new Board('game');


boardOne.generateBoard(rows, columns);

console.log(boardOne);


