(function(){
    const form = document.querySelector("#message-form")

    form.addEventListener('submit', function(e){
        
        e.preventDefault();

        const messageContent = document.querySelector(".message-content");
        const feedBack = document.querySelector(".feedback");
        const message = document.querySelector("#message");

        if(message.value === '') {
            feedBack.classList.add('show')
            setTimeout(function(){
                feedBack.classList.remove('show')
            }, 2000)
        } else {
            messageContent.textContent = message.value;
            message.value = '';
        }

    })
})();