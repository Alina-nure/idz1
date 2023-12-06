function encode() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(document.getElementById('key').value);
    var outputText = document.getElementById('outputText');

    outputText.value = caesarCipher(inputText, key);
}

function decode() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(document.getElementById('key').value);
    var outputText = document.getElementById('outputText');

    outputText.value = caesarCipher(inputText, -key); // Use negative key for decoding
}

function caesarCipher(text, key) {
    return text.split('').map(function(char) {
        if (char.match(/[a-z]/i)) {
            var code = char.charCodeAt();
            var shift = code < 91 ? 65 : 97;
            return String.fromCharCode((code - shift + key) % 26 + shift);
        }
        return char;
    }).join('');
}
