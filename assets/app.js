window.addEventListener("load",() =>{
    
    let counters = document.querySelectorAll(".counter");
    let speed = 200;
    const menu = document.querySelector("#menu");
    const dropDown = document.querySelector("#dropdown");
    

    counters.forEach(counter => {
        const updateCount = () =>{
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            
            const inc = target/speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount,1)
            } else {
                count.innerText = target;
            }


        }
        updateCount();
    });

    function toggleMenu() {
        dropDown.classList.toggle("md:block")
    }
    menu.addEventListener("click",toggleMenu)
})