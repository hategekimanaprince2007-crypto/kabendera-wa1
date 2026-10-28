
/* =========================================
   KABENDERA TOUR LTD.
   DESTINATIONS JAVASCRIPT
   File: destinations.js
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Get HTML elements
    const searchInput = document.getElementById("destination-search");
    const categorySelect = document.getElementById("destination-category");
    const destinationCards = document.querySelectorAll(".destination-card");
    const emptyMessage = document.getElementById("destination-empty");

    const detailsPanel = document.getElementById("destination-panel");
    const closeButton = document.getElementById("destination-close");

    const detailTitle = document.getElementById("destination-detail-title");
    const detailLocation = document.getElementById("destination-detail-location");
    const detailDescription = document.getElementById("destination-detail-description");
    const activitiesList = document.getElementById("destination-activities");
    const bookingLink = document.getElementById("destination-booking");

    // 2. Destination information
    const destinations = {
        volcanoes: {
            title: "Volcanoes National Park",
            location: "Northern Province, Rwanda",
            description:
                "Discover Rwanda's mountain gorillas, beautiful volcanic " +
                "landscapes, and rich biodiversity in Volcanoes National Park.",
            activities: [
                "Mountain gorilla trekking",
                "Golden monkey tracking",
                "Guided nature walks",
                "Explore volcanic mountain scenery"
            ]
        },

        kivu: {
            title: "Lake Kivu",
            location: "Western Rwanda",
            description:
                "Relax beside one of Rwanda's beautiful lakes and enjoy " +
                "scenic shores, surrounding hills, and peaceful lake views.",
            activities: [
                "Enjoy lakeside scenery",
                "Explore nearby towns",
                "Photography",
                "Optional boat excursions"
            ]
        },

        akagera: {
            title: "Akagera National Park",
            location: "Eastern Rwanda",
            description:
                "Experience Rwanda's savannah landscapes, lakes, and " +
                "wildlife on a memorable safari adventure.",
            activities: [
                "Guided wildlife game drives",
                "Wildlife photography",
                "Birdwatching",
                "Explore the park's landscapes"
            ]
        },

        nyungwe: {
            title: "Nyungwe National Park",
            location: "Southwestern Rwanda",
            description:
                "Explore a remarkable montane rainforest known for its " +
                "biodiversity, primates, and forest trails.",
            activities: [
                "Chimpanzee tracking",
                "Canopy walkway experience",
                "Guided forest walks",
                "Birdwatching"
            ]
        },

        kigali: {
            title: "Kigali City",
            location: "Kigali, Rwanda",
            description:
                "Discover Rwanda's capital through its cultural sites, " +
                "city attractions, local markets, and dining experiences.",
            activities: [
                "Explore selected city attractions",
                "Discover local culture",
                "Visit markets and craft shops",
                "Enjoy a guided city tour"
            ]
        },

        mountains: {
            title: "Rwanda's Mountain Landscapes",
            location: "Rwanda",
            description:
                "Enjoy scenic mountain views and discover outdoor " +
                "adventures in Rwanda's beautiful highland regions.",
            activities: [
                "Guided hiking",
                "Nature photography",
                "Explore mountain scenery",
                "Discover local communities"
            ]
        }
    };

    // 3. Search and filter destinations
    function filterDestinations() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedCategory = categorySelect.value;

        let visibleCount = 0;

        destinationCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();
            const categoryElement = card.querySelector(".destination-tag");

            const cardCategory = categoryElement
                ? categoryElement.textContent.trim().toLowerCase()
                : "";

            const matchesSearch = cardText.includes(searchTerm);

            // Match the selected category against the card's tag.
            // "all" displays every destination.
            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory.toLowerCase();

            const shouldShow = matchesSearch && matchesCategory;

            card.hidden = !shouldShow;

            if (shouldShow) {
                visibleCount++;
            }
        });

        emptyMessage.hidden = visibleCount > 0;

        // Hide details if the selected destination is filtered out.
        if (!detailsPanel.hidden) {
            const selectedCard = Array.from(destinationCards).find(
                function (card) {
                    const button = card.querySelector(".destination-details");
                    const destination = button
                        ? destinations[button.dataset.destination]
                        : null;

                    return destination &&
                        destination.title === detailTitle.textContent;
                }
            );

            if (selectedCard && selectedCard.hidden) {
                detailsPanel.hidden = true;
            }
        }
    }

    // 4. Search as the visitor types
    if (searchInput && categorySelect && emptyMessage) {
        searchInput.addEventListener("input", filterDestinations);
        categorySelect.addEventListener("change", filterDestinations);
    }

    // 5. Display destination details
    document.querySelectorAll(".destination-details").forEach(
        function (button) {
            button.addEventListener("click", function () {
                const destinationId = button.dataset.destination;
                const destination = destinations[destinationId];

                if (!destination) {
                    return;
                }

                detailTitle.textContent = destination.title;
                detailLocation.textContent = destination.location;
                detailDescription.textContent = destination.description;

                // Clear the previous activities
                activitiesList.replaceChildren();

                // Add activities for the selected destination
                destination.activities.forEach(function (activity) {
                    const item = document.createElement("li");
                    item.textContent = activity;
                    activitiesList.appendChild(item);
                });

                // Link to the booking section on the main page
                bookingLink.href = "index.html#booking";

                // Open the details panel
                detailsPanel.hidden = false;

                detailsPanel.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }
    );

    // 6. Close the details panel
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            detailsPanel.hidden = true;
        });
    }

    // 7. Initialize the page
    if (searchInput && categorySelect && emptyMessage) {
        filterDestinations();
    }

});
