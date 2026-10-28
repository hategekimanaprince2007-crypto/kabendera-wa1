
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("hotelSearch");
  const filterSelect = document.getElementById("hotelFilter");
  const hotelCards = document.querySelectorAll(".hotel-card");
  const hotelCount = document.getElementById("hotelCount");
  const noHotels = document.getElementById("noHotels");

  if (!searchInput || !filterSelect || !hotelCount || !noHotels) {
    return;
  }

  function filterHotels() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedType = filterSelect.value;

    let visibleCount = 0;

    hotelCards.forEach((card) => {
      const name = card.dataset.name || "";
      const type = card.dataset.type || "";
      const location = card.dataset.location || "";
      const text = `${name} ${location}`.toLowerCase();

      const matchesSearch = text.includes(searchText);
      const matchesType =
        selectedType === "all" || type === selectedType;

      const isVisible = matchesSearch && matchesType;

      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount++;
      }
    });

    hotelCount.textContent =
      `${visibleCount} ${visibleCount === 1 ? "hotel" : "hotels"} found`;

    noHotels.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterHotels);
  filterSelect.addEventListener("change", filterHotels);

  filterHotels();
});
