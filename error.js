document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.onerror = null;
        this.src = 'images/default_image.jpg';
        this.alt = "";
    };
});