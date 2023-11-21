let isScrolling = false;

window.addEventListener("scroll", function() {
    if (!isScrolling) {
        isScrolling = true;

        const scrollTopBtn = document.getElementById("scrollTopBtn");

        if (window.scrollY > 20) {
            scrollTopBtn.style.display = "block";
            scrollTopBtn.style.opacity = "1";
        } else {
            scrollTopBtn.style.opacity = "0";
            setTimeout(function() {
                scrollTopBtn.style.display = "none";
            }, 300);
        }

        isScrolling = false;
    }
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
