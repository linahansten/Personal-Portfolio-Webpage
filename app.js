

let projectSize = document.getElementById("projects")

function toggleText() {

    let showMore = document.getElementById("showmore")
    let arrow = document.getElementById("arrow")
    let buttonText = document.getElementById("textbutton")

    //seeing if arrow has display none
    //if it does it changes text on button and removes the extra projects
    //else projects are shown and button text changes

    if (arrow.style.display == "none") {
        showMore.style.display = "none"

        arrow.style.display = "flex"

        buttonText.innerHTML = "SHOW MORE"
        buttonText.style.margin = "0%"

        projectSize.style.height = "100vh"

    } else {
        showMore.style.display = "flex"

        arrow.style.display = "none"

        buttonText.innerHTML = "SHOW LESS"
        buttonText.style.margin = "15%"

        projectSize.style.height = "210vh"
    }

}
console.log(toggleText)

