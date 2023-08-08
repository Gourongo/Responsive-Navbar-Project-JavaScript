const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linked = document.querySelectorAll(".links a"); // Get all the links


navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});


linked.forEach(link => {
    link.addEventListener("click", function(event) {
            linked.forEach(link => {
                link.classList.remove("active"); // Remove active class from all links
            });
            this.classList.add("active"); // Add active class to the clicked link
        
    });
});