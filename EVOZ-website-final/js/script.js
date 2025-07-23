// Animated Headline
function typeWriter() {
const text = "EVOZ: Tired Together. Evolved Forever.";
const speed = 50;
const element = document.getElementById("headline");

let i = 0;
function typing() {
if (i < text.length) {
element.innerHTML += text.charAt(i);
i++;
setTimeout(typing, speed);
}
}

typing();
}

function toggleMenu() {
document.querySelector('.menu-nix-panel').classList.toggle('active');
}

// Show storyline on menu click
function showStoryline() {
  document.getElementById("storylineOverlay").style.display = "block";
}

// Close overlay
function closeStoryline() {
  document.getElementById("storylineOverlay").style.display = "none";
}



// Start the typewriter when page loads
window.onload = function () {
typeWriter();
fetchHypePrice();
setInterval(fetchHypePrice, 30000); // every 30 seconds
};

// ✅ Live $HYPE price from Hyperliquid
async function fetchHypePrice() {
  try {
    const url = "https://api.dexscreener.com/latest/dex/pairs/hyperliquid";
    const response = await fetch(url);
    const data = await response.json();

    const hypePair = data.pairs.find(pair => pair.baseToken.symbol === "HYPE");

    if (hypePair && hypePair.priceUsd) {
      const price = parseFloat(hypePair.priceUsd).toFixed(2);
      document.getElementById("hype-price-text").textContent = `$HYPE: $${price}`;
    } else {
      document.getElementById("hype-price-text").textContent = "$HYPE: N/A";
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    document.getElementById("hype-price-text").textContent = "$HYPE: Error";
  }
}

// ✅ Run it every 30 seconds
fetchHypePrice();
setInterval(fetchHypePrice, 30000);



function showUtilities() {
  document.getElementById("utilitiesOverlay").style.display = "flex";
}

function closeUtilitiesAndOpenMenu() {
  document.getElementById('utilitiesOverlay').style.display = 'none';
  document.querySelector('.menu-nix-panel').style.display = 'block';
}


