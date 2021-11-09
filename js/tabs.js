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
    link.addEventListener("click", evt => {
        const [, tabName] = link.id.split("link-");
        revealTab(evt, tabName);
    })
);
document.getElementById("link-summary").click();
