const revealTab = (evt, tabName) => {
    Array.from(document.getElementsByClassName("tab-contents")).forEach(
        tab => (tab.style.display = "none")
    );
    Array.from(document.getElementsByClassName("tab")).forEach(link =>
        link.classList.remove("active")
    );
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};


Array.from(document.getElementsByClassName("tab")).forEach(link =>
    link.addEventListener("click", evt =>
        revealTab(evt, link.id.split("link-").at(-1))
    )
);
document.getElementById("link-summary").click();