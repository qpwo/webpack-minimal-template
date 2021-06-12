import { derivative } from 'mathjs'

document.getElementById("button").onclick = function updateResult() {
    const input = document.getElementById("input").value
    console.log("input:", input)
    const result = derivative(input, 'x')
    document.getElementById("result").innerText = result
}
