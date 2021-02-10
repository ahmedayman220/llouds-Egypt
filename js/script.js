// ============================
/* All Array */
// ============================
let src_desc = [{
        id: 1,
        src: "url(images/pexels-maria-geller-2127040-edit-1-1900x1000.jpg)",
        desc_h2: "Our past projects are the best testament to our quality.",
        desc_p: "Effective management of mega-projects relies on three key concepts: early planning and organizing, stakeholder communication and project controls integration",
    },
    {
        id: 2,
        src: "url(images/pexels-le-minh-1583065-1900x1000.jpg)",
        desc_h2: "We Create Effective Solutions",
        desc_p: "We apply the principles of engineering, physics, and materials science for the design, analysis, manufacturing, and maintenance of mechanical systems.",
    },
    {
        id: 3,
        src: "url(images/ventilator-349658_1920-1900x1000.jpg)",
        desc_h2: "Change Is All What Matters",
        desc_p: "Enginery Inc. is responsible for the research, specification, design and development of materials to advance technologies of aviation industry.",
    },
]

// ============================
/* All variables */
// ============================
let wallpaper = document.querySelector("section.wallpaper")
let desc_wallpaper = document.querySelector(".desc-h2-p-wallpaper")
let content_h2 = document.querySelector(".desc-h2-p-wallpaper h2")
let content_p = document.querySelector(".desc-h2-p-wallpaper p")
let btns_wallpaper = document.querySelectorAll(".btn-wallpaper")
let owl_dot = document.querySelectorAll(".owl-dot")
let acordion = document.querySelectorAll(".what-we-do-accordion-desc ul li")
let acordion_icon = document.querySelectorAll(".what-we-do-accordion-desc ul li h4 i")
let i = 0
let x = 0

// ============================
/* All Function */
// ============================

// change BackgroundImage $$ dscription wallapaper
function call_change_Wallper() {
    wallpaper.style.backgroundImage = src_desc[i].src
    content_h2.innerHTML = src_desc[i].desc_h2
    content_p.innerHTML = src_desc[i].desc_p
}
call_change_Wallper()

// remove_class_on_all_items_with_forEach
function remove_class_on_all_items_with_forEach() {
    owl_dot.forEach((item) => {
        item.classList.remove("active-hover")
    })
}
// wallpaper_SetInterval
function wallpaper_SetInterval() {
    remove_class_on_all_items_with_forEach()
    if (i >= src_desc.length - 1) {
        i = -1
    }
    ++i
    call_change_Wallper()
    if (x >= owl_dot.length - 1) {
        x = -1
    }
    ++x
    owl_dot[x].classList.add("active-hover")

}
// ============================
/* All DOM */
// ============================
owl_dot[x].classList.add("active-hover")
btns_wallpaper.forEach((btn) => {
        btn.addEventListener("click", () => {
            // change image source
            if (btn.id == "next") {
                if (i >= src_desc.length - 1) {
                    i = -1
                }
                ++i
                call_change_Wallper()
            } else {
                if (i <= 0) {

                    i = src_desc.length
                }
                --i
                call_change_Wallper()
            }

            // changeClassList_active_hover
            remove_class_on_all_items_with_forEach()
            if (btn.id == "next") {
                if (x >= owl_dot.length - 1) {
                    x = -1
                }
                ++x
                owl_dot[x].classList.add("active-hover")

            } else {
                if (x <= 0) {
                    x = owl_dot.length
                }
                --x
                owl_dot[x].classList.add("active-hover")

            }
        })
    })
    // set Interval
setInterval(wallpaper_SetInterval, 10000)

// acordion items "p"
acordion.forEach((item) => {
    item.addEventListener("click", () => {
        let item_sipiling = item.nextElementSibling
        if (item_sipiling.classList == "active_toggler") {
            item_sipiling.classList.remove("active_toggler")
        } else {
            acordion.forEach((clearClass) => {
                clearClass.nextElementSibling.classList.remove("active_toggler")
            })
            item_sipiling.classList.toggle("active_toggler")
        }
    })
})