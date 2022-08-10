
// =============== according skills====================
// const skillsContent = document.getElementsByClassName("skills_content");
// const skillsHeader = document.querySelectorAll(".skills_header");

// console.log(skillsContent)
// console.log(skillsHeader)

// function toggleSkille() {
//     itemclass = this.parentNode.className;// error
//     skillsContent.forEach((elm)=>{
//         elm.className = "skills_content skills_close";
//     })
//     if (itemclass == "skills_content skills_close" ) {
//         this.parentNode.className = "skills_content skills_open";
//     }
// }

// skillsHeader.forEach((elm)=>{
//     elm.addEventListener("click",toggleSkille());
// })


// ========================= services modal =========================

const modalView = document.querySelectorAll(".services_modal"),
      modalBtn = document.querySelectorAll(".services_button"),
      modalClose = document.querySelectorAll(".services_model-close")

let modal = function(modalIndex){
    modalView[modalIndex].classList.add("active_modal");
}

modalBtn.forEach((mb,i) =>{
    mb.addEventListener("click",() =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener("click",() =>{
        modalView.forEach((mv) =>{
            mv.classList.remove("active_modal")
        })
    })
})

// ===================== WORK =========================

// ----------- MIXITUP FILTER ----------
let mixer = mixitup(".work_container",{
    selectors:{
        target: ".work_card"
    },
    animation:{
        duration: 300
    }
})

// --------- Link Active Work ----------

const filterLinks = document.querySelectorAll(".work_itme")

function activeWorkitem() {
    filterLinks.forEach((fl) => fl.classList.remove("active_item"))
    this.classList.add("active_item")
}

filterLinks.forEach((fl) =>{
    fl.addEventListener("click",activeWorkitem)
})



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollY = window.pageYOffset

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fas fa-moon' : 'fas fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'fas fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})