const listings = [
  {
    id: 1,
    title: "1 BHK Flat in Kankarbagh",
    price: 8000,
    furnished: "Semi-Furnished",
    category: "Flat",
    location: "Patna, Bihar",
    image: "https://via.placeholder.com/400x250",
    contact: "6207789956"
  },
  {
    id: 2,
    title: "Room for Students in Rajendra Nagar",
    price: 4500,
    furnished: "Furnished",
    category: "Room",
    location: "Patna, Bihar",
    image: "https://via.placeholder.com/400x250",
    contact: "6207789956"
  }
];

function displayListings(items) {
  const listingsContainer = document.getElementById("listings");
  listingsContainer.innerHTML = "";

  if (items.length === 0) {
    listingsContainer.innerHTML = "<p>No listings found matching your filters.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h2>${item.title}</h2>
      <p><b>₹${item.price}</b> / month</p>
      <p>${item.furnished} | ${item.category}</p>
      <p>📍 ${item.location}</p>
      <a href="tel:${item.contact}">📞 Call</a> | 
      <a href="https://wa.me/91${item.contact}" target="_blank">💬 WhatsApp</a>
    `;
    listingsContainer.appendChild(card);
  });
}

function filterListings() {
  const location = document.getElementById("location").value.toLowerCase();
  const category = document.getElementById("category").value;
  const budget = document.getElementById("budget").value;

  const filtered = listings.filter(item => {
    return (
      (!location || item.location.toLowerCase().includes(location)) &&
      (!category || item.category === category) &&
      (!budget || item.price <= budget)
    );
  });

  displayListings(filtered);
}

// show all by default
displayListings(listings);
