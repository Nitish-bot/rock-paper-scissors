document.addEventListener('DOMContentLoaded', () =>  {
    const form = document.getElementById('inputform');
    const res = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const shoot = event.submitter.value;
        const cshoot = Math.floor((Math.random() * 3)) + 1;

        function result(x, y) {
            if (x === y) {
                return 0;
            } else if ((x === 1 && y === 3) || (x === 2 && y === 1) || (x === 3 && y === 2)) {
                return 1;
            } else {
                return 2;
            }
        }

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