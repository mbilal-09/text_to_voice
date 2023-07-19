const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
    let textValue = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(textValue)
})
