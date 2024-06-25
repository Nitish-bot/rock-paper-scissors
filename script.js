document.addEventListener('DOMContentLoaded', () =>  {
    const form = document.getElementById('inputform');
    const res = document.getElementById('result');
    const table = document.getElementById('scoreTable');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        table.style.display = "block";
        const shoot = event.submitter.value;
        const cshoot = Math.floor((Math.random() * 3)) + 1;

        function result(x, y) {
            if (x === y) {
                return 0;
            } else if ((x === 1 && y === 3) || (x === 2 && y === 1) || 
            (x === 3 && y === 2)) {
                return 1;
            } else {
                return 2;
            }
        }

        let row = table.insertRow(-1);
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        switch (result(+shoot, cshoot)) {
            case 0:
                c1.innerText = "0.5";
                c2.innerText = "0.5";
                row.style.backgroundColor = 'grey';
                break;
            case 1:
                c1.innerText = "1";
                c2.innerText = "0";
                c1.style.backgroundColor = 'green';
                c2.style.backgroundColor = 'red';
                break;
            case 2:
                c1.innerText = "0";
                c2.innerText = "1";
                c1.style.backgroundColor = 'red';
                c2.style.backgroundColor = 'green';
                break;
        }
    });
});