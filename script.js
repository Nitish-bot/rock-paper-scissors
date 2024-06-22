document.addEventListener('DOMContentLoaded', () =>  {
    const form = document.getElementsByClassName('inputform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let shoot = document.getElementsByClassName('selection').value;

        let cshoot = Math.floor((Math.random() * 3)) + 1;
    });
});