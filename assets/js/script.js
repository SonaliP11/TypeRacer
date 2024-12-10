document.getElementById('difficulty').addEventListener('change', function () {
    const difficulty = this.value;
    const sampleText = document.getElementById('sample-text');
    let text = '';

    if (difficulty === 'easy') {
        text = 'The cat sat on the mat.';
    } else if (difficulty === 'medium') {
        text = 'The quick brown fox jumps over the lazy dog.';
    } else if (difficulty === 'hard') {
        text = 'She sells seashells by the seashore. How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
    }

    sampleText.textContent = text;
});