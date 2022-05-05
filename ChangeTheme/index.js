//var button = document.getElementById('button');
//var direction = document.getElementById('direction');

function change(){
    if(document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black';
        document.getElementById('button').style.color = 'white';
        document.getElementById('direction').style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.getElementById('button').style.color = 'black';
        document.getElementById('direction').style.color = 'black';
    }
}

button.addEventListener('click', change)