
let rt = document.getElementsByClassName('button')

for(let i =0;i<rt.length;i++){
    rt[i].lastElementChild.addEventListener('click',function()
    {
        rt[i].firstElementChild.classList.toggle('two');
        rt[i].lastElementChild.classList.toggle('rotate');
        rt[i].nextElementSibling.classList.toggle('ans')
    })
}


