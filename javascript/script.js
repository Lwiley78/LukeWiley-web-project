// Project 4 JavaScript - Music Greeting

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("greetBtn");
    const input = document.getElementById("username");
    const output = document.getElementById("dynamic-area");

    button.addEventListener("click", function () {

        const name = input.value.trim();

        if (name === "") {
            output.innerHTML = "<p style='color:red;'>Please enter your name.</p>";
            return;
        }

        output.innerHTML = `
            <h2>Hello, ${name}!</h2>
            <p>Music is powerful — it can relax you, energize you, or inspire creativity.</p>
        `;
    });

});
