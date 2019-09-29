function render() {
  let html = '';
  for (const champion of championList) {
    html += `
<div class="champion">
  <h2>${champion.origin}</h2>
  <img src="../assets/zed.png" onClick="team.push('Zed')">
</div>
    `
  }
  const targetNode = document.getElementById('championDisplay');
  targetNode.innerHTML = html;
}
