var team = [];

function createList() {
    /// creates the champion list on the right side of the interface
    let html = '';
    for (const champion of championList) {
      html += `
  <div class="champion" id="${champion.name}">
    <h2>${champion.name}</h2>
    <button onclick="team.push(${champion.name}), createTeam(), synergyCheck()">
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
    if (team.length === 0) {
      divname = document.getElementById(champion.name);
      divname.classList.remove("origin");
      divname.classList.remove("class");
      divname.classList.remove("both");
    }
    champion.classChecker = [];
    champion.originChecker = [];
    champion.bothChecker = []; 
  }
  for (var champion of championList) {
    for (var member of team) { 
      if (member.origin === champion.origin) {
        champion.originChecker.push(1);
      }
      else if (member.origin.includes(champion.origin) == true) {
        champion.originChecker.push(1);
      }
      console.log([champion.name, champion.originChecker]);
      }
    }
  for (var champion of championList) {
    divName = document.getElementById(champion.name); 
    if (champion.originChecker.includes(1) == true) {
      divName.classList.add("origin");
      originCheck = true
    }
    else if (champion.originChecker.includes(1) == false) {
      divName.classList.remove("origin");
    }
  }
  for (var champion of championList) {
    for (var member of team) { 
      if (member.class === champion.class) {
        champion.classChecker.push(1);
      }
      else if (member.class.includes(champion.class) == true) {
        champion.classChecker.push(1);
      }
      console.log([champion.name, champion.classChecker]);
      }
    }
    for (var champion of championList) {
      divName = document.getElementById(champion.name); 
      if (champion.classChecker.includes(1) == true) {
        divName.classList.add("class");
      }
      else if (champion.classChecker.includes(1) == false) {
        divName.classList.remove("class");
      }
    }
    for (var champion of championList) {
      divName = document.getElementById(champion.name); 
      if (champion.classChecker.includes(1) == true && champion.originChecker.includes(1) == true) {
        divName.classList.remove("class");
        divName.classList.remove("origin");
        divName.classList.add("both");
      }
      else if (champion.classChecker.includes(1) == false || champion.originChecker.includes(1) == false) {
        divName.classList.remove("both");
      }
   }
    for (var champion of championList) {
      divname = document.getElementById(champion.name);
      for (var member of team) {
        if(member.name === champion.name) {
          divname.classList.remove("both");
        }
      }
    }
}