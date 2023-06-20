//your JS code here. If required.
window.onload = function() {
  const browserInfoDiv = document.getElementById("browser-info");

  const userAgent = navigator.userAgent;
  const browserName = getBrowserName(userAgent);
  const browserVersion = getBrowserVersion(userAgent);

  const message = "You are using " + browserName + " version " + browserVersion;

  browserInfoDiv.textContent = message;
};

function getBrowserName(userAgent) {
  const browserRegex = /(edge|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i;
  const matches = userAgent.match(browserRegex);

  if (matches && matches.length >= 3) {
    return matches[1];
  }

  return "Unknown";
}

function getBrowserVersion(userAgent) {
  const browserRegex = /(edge|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i;
  const matches = userAgent.match(browserRegex);

  if (matches && matches.length >= 3) {
    return matches[2];
  }

  return "Unknown";
}
