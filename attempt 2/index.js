document.addEventListener("DOMContentLoaded", () => {
    const ramenContainer = document.getElementById("ramen-container");
    const ramenName = document.getElementById("ramen-name");
    const ramenImage = document.getElementById("ramen-image");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");
    const ramenForm = document.getElementById("ramen-form");

    // Sample Ramen Data
    const ramenData = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Rich and tasty." },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 5, comment: "Creamy broth!" }
    ];

    // Function to display ramen images
    function displayRamenImages() {
        ramenContainer.innerHTML = "";
        ramenData.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.classList.add("ramen-item");
            img.addEventListener("click", () => displayRamenDetails(ramen));
            ramenContainer.appendChild(img);
        });
    }

    // Function to display ramen details
    function displayRamenDetails(ramen) {
        ramenName.textContent = ramen.name;
        ramenImage.src = ramen.image;
        ramenRestaurant.textContent = ramen.restaurant;
        ramenRating.textContent = ramen.rating;
        ramenComment.textContent = ramen.comment;
    }

    // Handle new ramen submission
    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            id: ramenData.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image-url").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        ramenData.push(newRamen);
        displayRamenImages();
        ramenForm.reset();
    });

    // Initialize app
    displayRamenImages();
});
