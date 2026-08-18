// Draws the players onto the pitch.
// You normally do NOT need to edit this file for substitutions.
// Edit players.js instead.

(function () {
  const pitch = document.getElementById("pitch");
  const teamNameEl = document.getElementById("team-name");
  const formationEl = document.getElementById("formation-name");

  // Safety check: did players.js load?
  if (typeof players === "undefined" || !Array.isArray(players)) {
    pitch.innerHTML +=
      '<p style="padding:1rem;color:#fff;">Error: players.js did not load.</p>';
    return;
  }

  // Put team + formation text in the header
  if (typeof teamName !== "undefined") {
    teamNameEl.textContent = teamName;
  }
  if (typeof formationName !== "undefined") {
    formationEl.textContent = formationName;
  }

  // Create one circle + name for each player
  players.forEach(function (player) {
    const el = document.createElement("div");
    el.className = "player";
    el.style.top = player.top;
    el.style.left = player.left;
    el.setAttribute("title", "#" + player.number + " " + player.name);

    el.innerHTML =
      '<div class="player-badge">' +
      player.number +
      "</div>" +
      '<div class="player-name">' +
      player.name +
      "</div>";

    pitch.appendChild(el);
  });
})();
