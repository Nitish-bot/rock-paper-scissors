document.addEventListener('DOMContentLoaded', () =>  {
    const form = document.getElementById('inputform');
    form.addEventListener('submit', function(event) {
        console.log(event);
        event.preventDefault();
        let shoot = document.getElementById('selection').value;
        let cshoot = Math.floor((Math.random() * 3)) + 1;

        function result(x, y) {
            if (x === y) {
                return 0;
            } else if ((x === 1 && y === 3) || (x === 2 && y === 1) || (x === 3 && y === 2)) {
                return 1;
            } else {
                return 2;
            }
        }

        let res = document.getElementById('result');
        if (shoot === "") {
            res.textContent = 'Please select a valid response!';
        }
        else {
            switch (result(+shoot, cshoot)) {
                case 0:
                    res.textContent = 'It\'s a draw';
                    res.style.backgroundColor = 'grey';
                    break;
                case 1:
                    res.textContent = 'You WIN!';
                    res.style.backgroundColor = 'green';
                    break;
                case 2:
                    res.textContent = 'You LOOSE!';
                    res.style.backgroundColor = 'red';
                    break;
            }
        }
    });
});