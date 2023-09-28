const element = document.getElementById('typewriter');
const sentences = [
    'keep it cool',
    'keep it aesthetic',
    'keep it low-key',
    'keep it going',
    'keep it simple stupid'
];
const colors = ['red', 'green', 'blue', 'purple', 'orange'];

let i = 0;

function typeSentence(sentence, index, fn) {
    let j = 0;
    element.style.color = colors[i];
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
