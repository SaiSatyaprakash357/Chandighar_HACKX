const flats = [
  { name: " Delhi", city: "Delhi", address:" Delhi" },
  { name: "Chennai", city: "Chennai", address: " Chennai" },
  { name: " Hyderabad", city: "Hyderabad", address: "Hyderabad" },
  { name: "Bengaluru", city: "Bengaluru", address: " Bengaluru" },
];

const searchInput = document.getElementById("searchInput");
const flatList = document.getElementById("flatList");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = flats.filter(flat =>
    flat.name.toLowerCase().includes(query) ||
    flat.city.toLowerCase().includes(query)
  );

  flatList.innerHTML = filtered.map(flat => `
    <div class="flat-card">
      <h2>${flat.name}</h2>
      <p>${flat.address}</p>
    </div>
  `).join("");

  document.querySelectorAll('.flat-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = "flatlist.html";
    });
  });
 
  if (filtered.length === 0 && query.length > 0) {
    flatList.innerHTML = `<p>No area found.</p>`;
  }
});