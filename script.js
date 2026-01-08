document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".image-box img");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            var text = this.nextElementSibling;

            if (text.style.display === "block") {
                text.style.display = "none";
            } else {
                text.style.display = "block";
            }
        });
    });
});


document.getElementById('current-year').textContent = new Date().getFullYear();