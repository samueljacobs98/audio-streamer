const resultsContainer = document.getElementById("results-container");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  // for simplicity just display one song (song1) as a search result
  // const searchQuery = document.getElementById("search-box").value;

  const songResult = document.createElement("div");

  songResult.setAttribute("onclick", `playSong('song1.mp3')`);
  songResult.innerText = "Song 1";

  resultsContainer.innerHTML = `<button onclick="playSong('song1.mp3')">Song 1</div>`;
});

function playSong(songName) {
  const player = document.getElementById("audio-player");
  player.src = `/stream/${songName}`;
  player.play();
}
