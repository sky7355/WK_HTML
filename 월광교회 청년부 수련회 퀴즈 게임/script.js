
function openQuestion(url) {
    window.open(url, '_blank').focus();
}

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', function() {
        this.classList.add('clicked');
    });
});
