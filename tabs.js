Array.from(document.getElementsByClassName("tablinks")).forEach(link =>
    link.addEventListener("click", evt =>
        revealTab(evt, link.id.split("link-").at(-1))
    )
);

const revealTab = (evt, tabName) => {
    Array.from(document.getElementsByClassName("tabcontent")).forEach(
        tab => (tab.style.display = "none")
    );
    Array.from(document.getElementsByClassName("tablinks")).forEach(link =>
        link.className.replace(" active", "")
    );
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};
