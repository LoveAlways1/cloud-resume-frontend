const visitorCount = document.getElementById("visitor-count");

async function updateVisitorCount() {
  try {
    const response = await fetch("https://vr88yevjgg.execute-api.us-east-1.amazonaws.com/Prod/visitors");
    const data = await response.json();

    visitorCount.textContent = data.count;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    visitorCount.textContent = "unavailable";
  }
}

updateVisitorCount();