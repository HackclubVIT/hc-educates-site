class Speaker {
    constructor(args) {
        Object.assign(this, args);
    }
}

const speakerList = [{
    image: "assets/img/galiciag.png",
    name: "Galicia Gordon",
    occupation: "Educator",
    title: "Entrepreneurship",
    about: `Galicia Gordon is the Founder of Leading Learners, 
        the all-in-one platform for free student resources. Galicia 
        started Leading Learners to develop a centralized support 
        system for students — tying together the resources, materials, 
        and tools students with various challenges may need. The startup 
        is supporting thousands of unheard stories of students with 
        academic struggles and financial barriers in education.`,
}, {
    image: "assets/img/praveenk.png",
    name: "Praveen Kumar",
    occupation: "Full-stack specialist",
    title: "Introduction to Flutter",
    about: `Praveen Kumar is a Full Stack JavaScript Specialist from London, 
    England, originally from Chennai, India, specialising on React and node.js, 
    working for one of the top two banks in the UK, which he resigned recently. 
    He’s got about a decade of experience in the Industry. He’s a Web Specialist, 
    Careers Coach Mentor, ex-Microsoft Most Valuable Professional, Speaker, 
    Author and also a Guinness Record Holder with Microsoft AppFest. 
    Oh, and out of techie stuff, he’s a Cat Lover.`
}]

const container = document.querySelector("#speakers-swiper");
for (const speaker of speakerList) {
    container.innerHTML += `
        <div class="swiper-slide">
            <div class="speaker-profile">
                <div class="speaker-image">
                    <img src="${speaker.image}">
                </div>
                <div class='speaker-details flex-column flex-centered'>
                    <div class="speaker-name">
                        <strong>${speaker.name}</strong>
                    </div>
                    <div class="speaker-occupation">
                        <em>${speaker.occupation}</em>
                    </div>
                </div>
            </div>
            <div class="speaker-event">
                <div class = "speaker-event-title">
                    <strong>${speaker.title}</strong>
                </div>
                <div class = "speaker-event-about">
                    ${speaker.about}
                </div>
            </div>
        </div>
    `;
}

const swiper = new Swiper(".speaker-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    preventInteractionOnTransition: true,
    effect: 'coverflow',
    pagination: {
        el: ".swiper-pagination",
    },
});