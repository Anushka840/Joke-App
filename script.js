let count = 0;

async function getjoke() {
    let response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    let joke = await response.json();
    console.log(joke.punchline);
    count++;
    document.getElementById('joke').innerText = joke.setup + " - " + joke.punchline;
    document.getElementById('count').innerText = `You have read ${count} piece of advice today.`;
}


function startJokes() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('joke-page').style.display = 'block';
}

function backToIntro() {
    document.getElementById('intro-page').style.display = 'block';
    document.getElementById('joke-page').style.display = 'none';
}
