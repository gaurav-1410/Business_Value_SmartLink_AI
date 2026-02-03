const suppliers = [
  {
    name: "ABC Textiles",
    location: "Mumbai, India",
    industry: "Textiles",
    trust: 85,
    moq: "500 units"
  },
  {
    name: "IndoMach",
    location: "Pune, India",
    industry: "Machinery",
    trust: 78,
    moq: "200 units"
  },
  {
    name: "Bharat Pharma",
    location: "Hyderabad, India",
    industry: "Pharma",
    trust: 91,
    moq: "1000 units"
  }
];

function renderSuppliers(data) {
  const grid = document.getElementById("supplierGrid");
  grid.innerHTML = "";

  data.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="badge">Verified</div>
      <h3>${s.name}</h3>
      <div class="meta">${s.location} • ${s.industry}</div>
      <div class="score">${s.trust}</div>
      <small>Trust Score</small>
      <p>MOQ: ${s.moq}</p>
      <div class="actions">
        <button onclick="viewProfile('${s.name}')">View Profile</button>
        <button class="secondary" onclick="startTrade('${s.name}')">Start Trade</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function searchSuppliers() {
  renderSuppliers(suppliers);
}

function viewProfile(name) {
  // store selected supplier (optional, future use)
  localStorage.setItem("selectedSupplier", name);

  // navigate to supplier profile page
  window.location.href = "supplier-profile.html";
}

function startTrade(name) {
  // Store selected supplier for trade setup
  localStorage.setItem("selectedSupplier", name);
  
  // Navigate to trade setup page
  window.location.href = "trade-setup.html";
}

renderSuppliers(suppliers);
