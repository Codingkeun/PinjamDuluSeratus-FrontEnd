const timer = (elementIdName, dueDate) => {
    const countDownDate = new Date(dueDate).getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    $(elementIdName).html(days + "hari " + hours + "jam " + minutes + "menit " + seconds + "detik ");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
            $(elementIdName).html('EXPIRED');
        }
    }, 1000);
}