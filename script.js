function copyIP(ip) {
  navigator.clipboard.writeText(ip);
  alert("Copied: " + ip);
}

/* LIVE SERVER STATUS */
fetch("https://api.mcsrvstat.us/2/play.yourserver.xyz")
  .then(res => res.json())
  .then(data => {
    const status = document.getElementById("status");
    if (data.online) {
      status.innerHTML = `🟢 Online — ${data.players.online}/${data.players.max} players`;
      status.style.color = "#22c55e";
    } else {
      status.innerHTML = "🔴 Offline";
      status.style.color = "red";
    }
  })
  .catch(() => {
    document.getElementById("status").innerText = "Status unavailable";
  });
