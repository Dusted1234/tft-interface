import "logic/";
import "assets/";

var team = '';

function createList () {

for (let champion of championList) {
    team += `
    <div id="champion">
        <h2>${champion.name}</h2>
        <button> <img src="/assets/${champion.image}.png">
        </button>
    </div>    
    `
}

const teamNode = document.getElementById('championDisplay');
targetNode.innerHTML = team;
}
