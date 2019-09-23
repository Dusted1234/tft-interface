function teamEdit () {
    var newTeam = document.createElement("div");
    var newMember = document.createTextNode("Aatrox");
    newTeam.appendChild(newMember);
    var interface = document.getElementById("teamEnd")
    document.body.insertBefore(newTeam, interface)
    }