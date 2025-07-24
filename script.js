document.addEventListener('DOMContentLoaded', function() {
    console.log('Travel site loaded');

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thanks for reaching out!');
            form.reset();
        });
    }
});
