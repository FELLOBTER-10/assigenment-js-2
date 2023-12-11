

var arrey = ['“Always forgive your enemies; nothing annoys them so much.”', '“Live as if you were to die tomorrow. Learn as if you were to live forever.”', '“We accept the love we think we deserve.”', '“Without music, life would be a mistake.”', '“A room without books is like a body without a soul.”']
var arrey2 = ['― Marcus Tullius Cicero', '― Bernard M. Baruch', '― Dr. Seuss', '― Maya Angelou', '― Elbert Hubbard']

function qoute() {

    var result = Math.floor(Math.random() * arrey.length)
    var result2 = Math.floor(Math.random() * arrey2.length)

    document.getElementById('Quote').innerHTML = arrey[result]
    document.getElementById('author').innerHTML = arrey2[result2]
}
qoute()

