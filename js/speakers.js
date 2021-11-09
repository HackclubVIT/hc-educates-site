class Speaker {
    constructor(args) {
        Object.assign(this, args);
    }
}

const speakerList = [
    {
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
    },
    {
        image: "assets/img/praveenk.png",
        name: "Praveen Kumar",
        occupation: "Full-stack specialist",
        title: "React & PHP",
        about: `Praveen Kumar is a Full Stack JavaScript Specialist from London, 
    England, originally from Chennai, India, specialising on React and node.js, 
    working for one of the top two banks in the UK, which he resigned recently. 
    He’s got about a decade of experience in the Industry. He’s a Web Specialist, 
    Careers Coach Mentor, ex-Microsoft Most Valuable Professional, Speaker, 
    Author and also a Guinness Record Holder with Microsoft AppFest. 
    Oh, and out of techie stuff, he’s a Cat Lover.`,
    },
    {
        image: "assets/img/siddharth.png",
        name: "Siddharth Singha Roy",
        occupation: "Upcoming SDE @Microsoft",
        title: "Dynamic Programming",
        about: `I'm Siddharth Singha Roy, a final-year student at VIT and an upcoming SDE at Microsoft. I have cleared 
        seven interview rounds and have been offered jobs from reputable companies, including PayPal, Morgan Stanley, 
        Udaan, De Shaw, JP Morgan, and NatWest Group. Moreover, I have won multiple hackathons in the past including national 
        and international level hackathons. A CP enthusiast with 4* on CodeChef and over 950+ problems solved on LeetCode. 
        All of this while maintaining a 9.55 CGPA and ranking 3 in the CS department.`,
    },
    {
        image: "assets/img/ajinkya.png",
        name: "Ajinkya Lohakare",
        occupation: "Security consultant",
        title: "Ethical Hacking",
        about: `Mr. Ajinkya Lohakare is a paid security consultant , Ethical Hacking expert, cyber security researcher , Entrepreneur, Public speaker and Author.
    He does security consulting for fortune 500 companies and the law enforcements , perform penetration testing services for the world’s largest companies and teaches social engineering classes to 
    Dozens of companies and government agencies. He has also assisted law enforcement in India , Bangladesh & Sri-lanka since 2015 on cyber crime cases.
    Ajinkya has given keynotes and presentations at a number of conferences around the world . Alongside conducting 1200+ Workshops and being an inspiring JOSH talk Speaker, he has also delivered talks at event like , Josh talk , Vedh talk , The dais conclave etc.`,
    },
    {
        image: "assets/img/aditya_thakur.png",
        name: "Aditya Thakur",
        occupation: "App Dev",
        title: "Flutter Workshop",
        about: `Aditya is a 𝗙𝗹𝘂𝘁𝘁𝗲𝗿 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with experience in building Cross-Platform Applications. He has previously been 
        a speaker at the Flutter Global Summit'21 and a number of events at Universities and Clubs across India. Aditya is also
        a creator with a 4.75K YouTube channel and a 500+ member Discord Community (teamaditya.co). He believes in adding value 
        and giving back to the community.`,
    },
    {
        image: "assets/img/amanv.png",
        name: "Aman Verma",
        occupation: "App Dev",
        title: "Introduction to Flutter",
        about: `Aman Verma is a person having a wide range of interests which include exploring new technology and ideas. 
    He has been leading the team of App development in HackClub for the past 2 sessions with exemplary leadership qualities and experience. With his effective team building, he has worked on different projects and held multiple workshops. 
    Alongside with technical interests, he is a Linux fanatic and a keen gaming enthusiast. 
    He is a dedicated, hardworking, and helpful individual who believes in collective growth.`,
    },
    {
        image: "assets/img/hasnain_sikora.png",
        name: "Hasnain Sikora",
        occupation: "App Dev",
        title: "Introduction to Flutter",
        about: `Hasnain Sikora is an enthusiastic person who loves challenges and learning new things. As an integral part of the Hack Club of his college, Hasnain has contributed to the completion of several projects and helped many of his peers in their journey to become app developers. He has also undertaken several projects in his field of specialization, artificial intelligence, and machine learning. These experiences have made him adept in several important concepts like Deep learning, machine learning, full-stack web and app development and  game development . Hasnain also takes immense pleasure in sketching, 3D model development, photography and enjoys a wide array of sports. He is a diligent, hard-working, and optimistic young man who uplifts everyone around him.`,
    },
    {
        image: "assets/img/deeptiman.png",
        name: "Deeptimaan Banerjee",
        occupation: "Web Developer",
        title: "Introduction to LAMP Stack",
        about: `I am Deeptimaan Banerjee, a tech enthusiast and a full-stack web developer. With a knack for Data Science and Automation, I've developed many data miners and web crawlers over time, and have also published a research paper under the CCPS department of VIT Chennai. I currently intern as a Health Economics and Outcomes Research Intern at Becton Dickinson, and have helped them automate and digitize their various workflows. 
        I've been an active part of the Hack Club since my second year and it has enabled me to broaden my technical knowledge to a great extent. I'm excited to share what I have learned from my experiences so far through this workshop.
        `,
    },
    {
        image: "assets/img/haridhrak.png",
        name: "Haridhra Kajan R",
        occupation: "Electronics specialist",
        title: "Introduction to Digital Integrated Circuit Design",
        about: `A highly self-motivated, passionate electronics enthusiast and consultant. Keen on innovatively solving interesting, challenging real world problem statements to help develop great products of service and to maximize my knowledge in the process. Strong believer in learn by practice.
    Specializes in developing Embedded Hardware and Software for Industrial/Consumer grade applications with IoT and Low Power capabilities. Part of the Top Rated Talent on Upwork as an embedded systems developer. Implemented a RISC-V RV32I multi-cycle processor core on an FPGA.`,
    },
    {
        image: "assets/img/sasisekhar.png",
        name: "Sasisekhar MG",
        occupation: "Electronics engineer",
        title: "Embedded Systems in the real-world",
        about: `A passionate and self-motivated electronics engineer keen on broadening his skill set both in digital and analog and to delve deeper into the realm of electronics. Has learnt to steer his way through complex problems by producing innovative solutions by virtue of the knowledge gained through the previous projects he has done.
    A Top Rated Embedded Systems Developer on Upwork. Extensive experience working with Wifi/BLE System-on-Chips from Espressif systems and Nordic Semiconductors.`,
    },
];

const container = document.querySelector("#speakers-swiper");
for (const speaker of speakerList) {
    let slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML += `
            <div class="speaker-profile">
                <div class="speaker-image">
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
    `;

    slide.querySelector(
        ".speaker-image"
    ).style.backgroundImage = `url("${speaker.image}")`;

    container.appendChild(slide);
}

const swiper = new Swiper(".speaker-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    preventInteractionOnTransition: true,
    effect: "coverflow",
    pagination: {
        el: ".swiper-pagination",
    },
});
