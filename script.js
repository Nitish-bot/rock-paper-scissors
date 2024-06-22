document.addEventListener('DOMContentLoaded', () =>  {
    const form = document.getElementsByClassName('inputform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let shoot = document.getElementsByClassName('selection').value;
        let cshoot = Math.floor((Math.random() * 3)) + 1;

        function result(x, y) {
            if (x === y) {
                return 0;
            } else if (x === 1 && y === 3) || (x === 2 && y === 1) || (x === 3 && y === 2) {
                return 1;
            } else {
                return 2;
            }
        }

    });
});