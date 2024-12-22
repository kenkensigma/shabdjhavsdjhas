// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Hide elements when the page loads
    hideInitialElements();
});

document.getElementById("flower-button").addEventListener("click", function () {
    hideOriginalMessage();
    createHeart();
});

function hideInitialElements() {
    const header = document.querySelector("h1");
    const images = document.querySelectorAll("img");
    const originalMessage = document.querySelector("b i p");

    if (header) {
        header.style.opacity = "0"; // Hide h1
        header.style.transition = "opacity 0.5s ease-in"; // Smooth transition with ease-in
    }

    if (originalMessage) {
        originalMessage.style.opacity = "0"; // Hide <b><i><p>
        originalMessage.style.transition = "opacity 0.5s ease-in"; // Smooth transition with ease-in
    }

    images.forEach(img => {
        img.style.opacity = "0"; // Hide images
        img.style.transition = "opacity 0.5s ease-in"; // Smooth transition with ease-in
    });
}

function hideOriginalMessage() {
    const originalMessage = document.querySelector("b i p");
    const header = document.querySelector("h1");
    const images = document.querySelectorAll("img");

    if (originalMessage) {
        originalMessage.style.transition = "opacity 0.5s ease-in"; // Ease-in transition
        originalMessage.style.opacity = "0";
        setTimeout(() => {
            originalMessage.remove(); // Remove after fading out
        }, 500); // Matches transition duration
    }

    // Hide the <h1> and images
    if (header) {
        header.style.transition = "opacity 0.5s ease-in"; // Ease-in transition
        header.style.opacity = "0";
    }
    images.forEach(img => {
        img.style.transition = "opacity 0.5s ease-in"; // Ease-in transition
        img.style.opacity = "0";
    });
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;"; // Unicode for heart symbol

    const size = Math.min(window.innerWidth, window.innerHeight) * 0.6; // Adjust size for fullscreen
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.position = "fixed"; // Stay fixed in the viewport
    heart.style.left = "20%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.color = "#ff69b4";
    heart.style.fontSize = `${size}px`;
    heart.style.cursor = "pointer";
    heart.style.transition = "transform 0.5s ease-in, opacity 0.5s ease-in"; // Ease-in transition

    document.body.appendChild(heart);

    // Click to reveal message
    heart.addEventListener("click", function () {
        heart.style.transform = "scale(0.8)";
        heart.style.opacity = "0";

        setTimeout(() => {
            heart.remove();

            const messageContainer = document.createElement("div");
            messageContainer.style.position = "fixed";
            messageContainer.style.left = "50%";
            messageContainer.style.top = "50%";
            messageContainer.style.transform = "translate(-50%, -50%)";
            messageContainer.style.textAlign = "center";
            messageContainer.style.color = "#ff1493";
            messageContainer.style.fontSize = "24px";
            messageContainer.style.fontWeight = "bold";
            messageContainer.classList.add("fade-in"); // Add fade-in effect

            const message = document.createElement("p");
            message.textContent = "Happy Mother's Day!";
            messageContainer.appendChild(message);

            const photo = document.createElement("img");
            photo.src = "IMG20210624122120.jpg"; // Replace with a valid path
            photo.style.width = "300px";
            photo.style.marginTop = "20px";
            photo.classList.add("fade-in"); // Add fade-in effect
            messageContainer.appendChild(photo);

            document.body.appendChild(messageContainer);

            // Apply fade-in animation after a slight delay
            setTimeout(() => {
                messageContainer.classList.add("show"); // Trigger fade-in animation
                photo.classList.add("show"); // Trigger fade-in animation for photo
            }, 100);

            setTimeout(() => {
                messageContainer.remove();
                restoreOriginalMessage();
            }, 5000);
        }, 500);
    });

    setTimeout(() => {
        if (document.body.contains(heart)) {
            heart.remove();
        }
    }, 5000);
}

function restoreOriginalMessage() {
    const originalHTML = `
        <b><i><p>
            Happy Mother's Day. I love you so much!<br>
            You are so funny, kind and helpful. 
            <br> You make me smile and laugh and
            <br> you are always there for me no matter what .<br>
            You are my favorite person in the whole entire 
            <br>world and Love you so so much! We have so <br>
            amazing memories and we have so much fun. <br>
            Thank You for all the things you do for me. <br>
            You are the BEST MOM EVER! <br>
        </p></i></b>`;

    const container = document.createElement("div");
    container.innerHTML = originalHTML;
    document.body.appendChild(container);

    // Show the <h1> and images again after the message is restored
    const header = document.querySelector("h1");
    const images = document.querySelectorAll("img");

    if (header) {
        header.style.transition = "opacity 0.5s ease-in"; // Ease-in transition
        header.style.opacity = "1"; // Show h1
    }
    images.forEach(img => {
        img.style.transition = "opacity 0.5s ease-in"; // Ease-in transition
        img.style.opacity = "1"; // Show images
    });
}
