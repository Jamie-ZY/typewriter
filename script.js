const element = document.getElementById('typewriter');
const sentences = [
    'keep it cool', 
    'keep it aesthetic', 
    'keep it low-key', 
    'keep it going', 
    'keep it simple stupid'
];

const colors = ['red', 'green', 'blue', 'purple', 'orange'];
const bgColors = ['blue', 'orange', 'green', 'red', 'purple'];

let i = 0;

function typeSentence(sentence, index, fn) {
    let j = 0;
    element.style.color = colors[i % colors.length];
    document.body.style.backgroundColor = bgColors[i % bgColors.length];
    let typing = setInterval(() => {
        element.innerText += sentence[j];
        j++;
        if (j === sentence.length) {
            clearInterval(typing);
            setTimeout(() => {
                element.innerText = '';
                fn();
            }, 2000);
        }
    }, 100);
}

function typeNext() {
    if (i === sentences.length) {
        i = 0;
    }
    typeSentence(sentences[i], i, typeNext);
    i++;
}

typeNext();
