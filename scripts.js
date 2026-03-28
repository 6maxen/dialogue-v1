botMsgEl = document.getElementById("bot-msg")
botMsg = botMsgEl.textContent
choiceSection = document.getElementById("choice-section")

function loading(callback) {
    const dots = [".", "..", "..."]
    let i = 0
    let iterations = 0
    // loops through the dots continuously
    // (it feels like magic!) 
    const interval = setInterval(function() {
        botMsgEl.textContent = dots[i]
        i++
        iterations++
        if (i >= 3) { i = 0 }
        if (iterations >= 10) {
            clearInterval(interval)
            callback()
        }
    }, 300)
}

loading(function() {
    botMsgEl.textContent = "Hi, nice to meet you!"
    choiceSection.style.display = "block"
})

document.querySelectorAll(".choice-btn").forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.getElementById("user-msg").textContent = btn.textContent
        choiceSection.innerHTML = ``
    })
})

