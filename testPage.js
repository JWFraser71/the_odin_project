/*var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;

while(i >= 0) {
    var para = document.createElement('p');
    if (1 === 10) {
        para.textContent = 'Countdown ' + i;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = i;
    }

    output.appendChild(para);

    i--;
}
*/

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (var i = 0; i < people.length; i ++) {

    if ( people[i] == "Phil" || people[i] == "Lola") {
        refused.textContent += people[i];
        refused.textContent += ', ';
    } else {
        admitted.textContent += people[i];
        admitted.textContent += ', ';
    }
}
refused.appendChild(refused);
admitted.appendChild(admitted);