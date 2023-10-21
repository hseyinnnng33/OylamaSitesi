const btn = document.querySelectorAll(".learn-more")

let h2 = document.createElement("h2")
let adi = document.createElement("h1")
btn.forEach((item) =>{
    item.addEventListener("click", function(e){
        e.preventDefault()
        let dataKey = item.getAttribute("data-key")
        let dataParcent = item.getAttribute("data-percent")
        let fill = item.parentElement.parentElement.nextElementSibling.querySelector(".fill");
        
        

        fill.style.width = `${dataParcent}%`;
        fill.style.backgroundColor = "green";

        fill.appendChild(h2)
        fill.appendChild(adi)
        adi.textContent = dataKey;
        h2.textContent = "%" + dataParcent;

        const barAcik = item.parentElement.parentElement.nextElementSibling;
        barAcik.classList.add("acik")

        console.log(dataKey);

    })
})
