function startTrade() {
  alert("Trade Setup Wizard Opened");
}

function startTrade(name) {
  // store selected supplier
  localStorage.setItem("startTrade", name);

  // go to trade setup page
  window.location.href = "trade-setup.html";
}