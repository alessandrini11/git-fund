window.addEventListener("load",() =>{
    
    let counters = document.querySelectorAll(".counter");
    let speed = 200;
    const menu = document.querySelector("#menu");
    const dropDown = document.querySelector("#dropdown");
    const depotbtn = document.querySelector("#depotadd");
    const modal = document.querySelector("#modal");
    const closeModal = document.querySelector("#closemodal")
    

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
    function removeModal() {
        if(modal.classList.contains("block")){
            modal.classList.remove("block")
            modal.classList.add("hidden")
        }
    }
    function toggleMenu() {
        dropDown.classList.toggle("md:block")
        
    }
    function addModal(){
        if(modal.classList.contains("hidden")){
            modal.classList.remove("hidden")
            modal.classList.add("block")
        }
    }
    menu.addEventListener("click",toggleMenu);
    depotbtn.addEventListener("click",addModal);
    closeModal.addEventListener("click",removeModal)
    modal.addEventListener("click",removeModal)
})