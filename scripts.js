botMsgEl = document.getElementById("bot-msg")
choiceSection = document.getElementById("choice-section")
userSection = document.getElementById("user-section")
dialogueSection = document.getElementById("dialogue-section")

/*
It looks like you have found yourself in the abomination that is my JavaScript.

"Is that 3 different loading functions?" Yes, yes it is.
I wish you nothing but the best in your traversal.

maxen 3/30/25
*/

// loading function (...) for bot messages
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

function longLoading(element, callback) {
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
        if (iterations >= 16) {
            clearInterval(interval)
            callback()
        }
    }, 300)
}

// for last message (loading function but infinite)
function infLoading(element, callback) {
    const dots = [".", "..", "..."]
    let i = 0
    // loops through the dots continuously
    // (it feels like magic!) 
    onGameComplete()
    const interval = setInterval(function() {
        element.textContent = "transferring your data to the AI Overlords for judgement" + dots[i % dots.length]
        i++
    }, 150)
}

function onGameComplete() {
    if (sessionStorage.getItem("visited")) {
    } else {
        sessionStorage.setItem("visited", "true")
        psst = document.getElementById('psst')
        psst.textContent = '*Psst* Click the header to refresh the page!'
        psst.style.display = 'block'
    }
}

// using localStorage for the first time
// first bot message
if (sessionStorage.getItem("visited")) {
    botMsgEl.textContent = "Hello! It's nice to meet you!"
    choiceSection.style.display = "block"
} else {
    loading(botMsgEl, function() {
        botMsgEl.textContent = "Hello! It's nice to meet you!"
        choiceSection.style.display = "block"
    })
}

let completeGame = false
// button functions
document.querySelectorAll(".choice-btn").forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.getElementById("user-msg").textContent = btn.textContent
        choiceSection.innerHTML = ``

        // waits 100ms before displaying after choice select
        setTimeout(function() {
            userSection = document.getElementById("user-section") 
            userSection.style.display = "block"

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
                        botMsg3El.textContent = "Goodbye."
                        botMsg3El.style.display = "block"
                        onGameComplete()
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
                    botMsg2El.textContent = "I'm YOU from another universe. I'm glad we could finally meet."
                    botMsg2El.style.display = "block"

                        
                    // create msg3
                    dialogueSection.innerHTML += `
                    <section id="bot-section">
                        <p id="bot-msg3">.</p>
                    </section>
                    `
                    botMsg3El = document.getElementById("bot-msg3")
                    longLoading(botMsg3El, function() {
                        botMsg3El.textContent = "I don't have a lot of time, we'll meet again soon. (dialogue test v2??)"
                        botMsg3El.style.display = "block"
                        onGameComplete()
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
                        <p id="bot-msg3" class="ital"></p>
                    </section>
                    `
                    botMsg3El = document.getElementById("bot-msg3")
                    infLoading(botMsg3El, function() {
                        botMsg3El.style.display = "block"
                    })
                })
                
            }
            


        }, 100) // Made this so that the message displayed isn't instant.
    })
})

// refreshes the page when header is clicked
document.querySelector("header").addEventListener("click", function() {
    location.reload()
})