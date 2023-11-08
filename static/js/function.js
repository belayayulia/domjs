const node_for_click1 = document.getElementById("for_click")
function find_edit(){
    const div2  = document.getElementsByTagName('div')[3]
    console.log(div2.innerText)
    div2.innerText = 'Belaya'

    const div1  = document.getElementsByTagName('div')[4]
    console.log(div1.innerText)
    div1.innerText = 'Yulia'
    
    const div3  = document.getElementsByTagName('div')[5]
    console.log(div3.innerText)
    div3.innerText = 'Andreevna'
}
node_for_click1.addEventListener("click",find_edit)


