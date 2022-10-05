const InLinks = document.querySelectorAll('.logged-in')
const OutLinks = document.querySelectorAll('.logged-out')

export const loginCheck = user => {
    if(user){
        OutLinks.forEach(link => link.style.display = 'none')
        InLinks.forEach(link => link.style.display = 'block')
    }
    else{
        InLinks.forEach(link => link.style.display = 'none')
        OutLinks.forEach(link => link.style.display = 'block')
    }
}