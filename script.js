document.addEventListener("DOMContentLoaded", () => {
    const url = "https://raw.githubusercontent.com/ThinklusiveTech/Maintainance/main/message.json"; // Ensure this is the correct GitHub raw URL
    const contentElement = document.getElementById("content"); // Ensure the ID matches your HTML

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            contentElement.textContent = JSON.stringify(data, null, 2); // Pretty-print JSON
        })
        .catch(error => {
            contentElement.textContent = "Failed to load content: " + error.message;
        });
});