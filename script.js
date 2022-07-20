const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    // set the content to zero
    counter.innerText = '0';
    // add a constant number to the counter until target is reached
    const updateCounter = function(){
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target/250;
        counter.innerText = `${Math.ceil(count + increment)}`
        if (count < target){
            setTimeout(updateCounter,1);
        }else{
            counter.innerText = target;
        }
    };

    updateCounter();
})