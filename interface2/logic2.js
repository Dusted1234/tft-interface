var team = [];
var origins = [];
var classes = [];

function createList() {
    /// creates the champion list on the right side of the interface
    let html = '';
    for (const champion of championList) {
      html += `
  <div class="champion" id="${champion.name}">
    <h2>${champion.name}</h2>
    <button onclick="team.push(${champion.name}), createTeam(), addList(), synergyCheck()">
    <img class="championSource" src="/assets/${champion.image}">
    </button>
    </div>
      `
    }
    const targetNode = document.getElementById('championDisplay');
    targetNode.innerHTML = html;
  }

function createTeam() {
    /// adds the champion to your team when clicked and restricts team size
    if (team.length <= 9){
    let teamHtml = '';
    for (const member of team) {
        teamHtml += `
    <div class="team">
     <h2>${member.name}</h2>
     <img class ="teamImage" src="/assets/${member.image}">
    </div>
        `
    console.log(team);
    }

    const teamTarget = document.getElementById('teamInterface');
    teamTarget.innerHTML = teamHtml;
  }

  else {
  }
}

function synergyCheck () {
  /// checks for commonalities and applies css classes accodingly
    for (var champion of championList) {
     divName = document.getElementById(champion.name);
     var originCheck = false;
     var classCheck = false;
     for (var member of team) { 
     for (var i = 0; i < origins.length; i++) {
      if (origins[i] === champion.origin) {
        divName.classList.add("origin");
        originCheck = true;
      }
    }
     for (var i = 0; i < origins.length; i++) {
      if (classes[i] === champion.class) {
        divName.classList.add("class");
        classCheck = true;
      }
    }
      if (originCheck == true && classCheck == true) {
        divName.classList.remove("origin");
        divName.classList.remove("class");
        divName.classList.add("both");
      }
     }
    }
  }

function originList() {
  for (var i = 0; i < team.length; i++) {
    origins.push(team[i].origin);
    console.log(origins);
  } 
}
function classList() {
  for (var i = 0; i < team.length; i++) {
    classes.push(team[i].class);
    console.log(classes);
  }
}

function addList() {
  classList();
  originList();
}