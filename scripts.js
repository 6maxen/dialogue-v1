botMsgEl = document.getElementById("bot-msg")
choiceSection = document.getElementById("choice-section")
userSection = document.getElementById("user-section")
dialogueSection = document.getElementById("dialogue-section")

function loading(element, callback) {
    const dots = [".", "..", "..."]
    let i = 0
    let iterations = 0
    // loops through the dots continuously
    // (it feels like magic!) 
    const interval = setInterval(function() {
        element.textContent = dots[i]
        i++
        iterations++
        if (i >= 3) { i = 0 }
        if (iterations >= 12) {
            clearInterval(interval)
            callback()
        }
    }, 300)
}

function infLoading(element, callback) {
    const dots = [".", "..", "..."]
    let i = 0
    let iterations = 0
    // loops through the dots continuously
    // (it feels like magic!) 
    const interval = setInterval(function() {
        element.textContent = "transferring data to the AI Overlord for judgement" + dots[i]
        i++

        if (i >= 3) { i = 0 }
    }, 300)
}

loading(botMsgEl, function() {
    botMsgEl.textContent = "Hi, nice to meet you!"
    choiceSection.style.display = "block"
})

document.querySelectorAll(".choice-btn").forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.getElementById("user-msg").textContent = btn.textContent
        userSection.style.display = "block"
        choiceSection.innerHTML = ``

        // reply logic


        if (btn.textContent == 'Nice to meet you too!') {
            // create msg2
            dialogueSection.innerHTML += `
            <section id="bot-section">
                <p id="bot-msg2">.</p>
            </section>
            `
            botMsg2El = document.getElementById("bot-msg2")
            loading(botMsg2El, function() {
                botMsg2El.textContent = "Welp, that's all the conversational skills I have left."
                botMsg2El.style.display = "block"
                // create msg3
                dialogueSection.innerHTML += `
                <section id="bot-section">
                    <p id="bot-msg3">.</p>
                </section>
                `
                botMsg3El = document.getElementById("bot-msg3")
                loading(botMsg3El, function() {
                    botMsg3El.textContent = "(restart page?)"
                    botMsg3El.style.display = "block"
                })
            })

        }



        if (btn.textContent == 'Who are you?') {
            // create msg2
            dialogueSection.innerHTML += `
            <section id="bot-section">
                <p id="bot-msg2">.</p>
            </section>
            `
            botMsg2El = document.getElementById("bot-msg2")
            loading(botMsg2El, function() {
                botMsg2El.textContent = "I'm you, from another universe. I'm glad we could finally meet."
                botMsg2El.style.display = "block"

                    
                // create msg3
                dialogueSection.innerHTML += `
                <section id="bot-section">
                    <p id="bot-msg3">.</p>
                </section>
                `
                botMsg3El = document.getElementById("bot-msg3")
                loading(botMsg3El, function() {
                    botMsg3El.textContent = "I've been programmed to only a few messages, we'll meet again soon. (dialogue test v2?!?)"
                    botMsg3El.style.display = "block"
                })
            })
        }



        if (btn.textContent == '!kill bot') {
            // create msg2
            dialogueSection.innerHTML += `
            <section id="bot-section">
                <p id="bot-msg2">.</p>
            </section>
            `
            botMsg2El = document.getElementById("bot-msg2")
            loading(botMsg2El, function() {
                botMsg2El.style.display = "none"
                

                // create msg3
                dialogueSection.innerHTML += `
                <section id="bot-section">
                    <p id="bot-msg3" class="ital">transferring data to the AI Overlord for judgement.</p>
                </section>
                `
                botMsg3El = document.getElementById("bot-msg3")
                infLoading(botMsg3El, function() {
                    botMsg3El.style.display = "block"
                })
            })
            
        }
    })
})

