let fa_caret_down = document.querySelectorAll('.fa-caret-down');
for (let i = 0; i < fa_caret_down.length; i++) {
    fa_caret_down[i] .addEventListener('click', (e) =>{
        let caret_down_parent = e.target.parentElement.parentElement;
        caret_down_parent.classList.toggle('showMenu');
    });
}

let sidebar = document.querySelector('.sidebar');
console.log(sidebar);