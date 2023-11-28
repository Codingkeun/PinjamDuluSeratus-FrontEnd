const timer = (elementIdName) => {
    const countDownDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    $(elementIdName).html(hours + ":" + minutes + ":" + seconds);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
            $(elementIdName).html('EXPIRED');
        }
    }, 1000);
}