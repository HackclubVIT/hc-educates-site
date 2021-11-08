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
}, {
    image: "assets/img/amanv.png",
    name: "Aman Verma",
    occupation: "App Dev",
    title: "",
    about: `Aman Verma is a person having a wide range of interests which include exploring new technology and ideas. 
    He has been leading the team of App development in HackClub for the past 2 sessions with exemplary leadership qualities and experience. With his effective team building, he has worked on different projects and held multiple workshops. 
    Alongside with technical interests, he is a Linux fanatic and a keen gaming enthusiast. 
    He is a dedicated, hardworking, and helpful individual who believes in collective growth.`
}, {
    image: "assets/img/hasnain_sikora.png",
    name: "Hasnain Sikora",
    occupation: "App Dev",
    title: "",
    about: `Hasnain Sikora is an enthusiastic person who loves challenges and learning new things. As an integral part of the Hack Club of his college, Hasnain has contributed to the completion of several projects and helped many of his peers in their journey to become app developers. He has also undertaken several projects in his field of specialization, artificial intelligence, and machine learning. These experiences have made him adept in several important concepts like Deep learning, machine learning, full-stack web and app development and  game development . Out of his sheer curiosity about the field, he has also enamored a new interest in philosophical sciences. Hasnain also takes immense pleasure in sketching, 3D model development, photography and enjoys a wide array of sports. He is a diligent, hard-working, and optimistic young man who uplifts everyone around him.`
}, {
    image: "assets/img/haridhrak.png",
    name: "Haridhra Kajan R",
    occupation: "",
    title: "",
    about: `A highly self-motivated, passionate electronics enthusiast and consultant. Keen on innovatively solving interesting, challenging real world problem statements to help develop great products of service and to maximize my knowledge in the process. Strong believer in learn by practice.
    Specializes in developing Embedded Hardware and Software for Industrial/Consumer grade applications with IoT and Low Power capabilities. Part of the Top Rated Talent on Upwork as an embedded systems developer. Implemented a RISC-V RV32I multi-cycle processor core on an FPGA.`
}, {
    image: "assets/img/sasisekhar.png",
    name: "Sasisekhar MG",
    occupation: "",
    title: "",
    about: `A passionate and self-motivated electronics engineer keen on broadening his skill set both in digital and analog and to delve deeper into the realm of electronics. Has learnt to steer his way through complex problems by producing innovative solutions by virtue of the knowledge gained through the previous projects he has done.
    A Top Rated Embedded Systems Developer on Upwork. Extensive experience working with Wifi/BLE System-on-Chips from Espressif systems and Nordic Semiconductors.`
},  {
    image: "assets/img/ajinkya.png",
    name: "Ajinkya Lohakare",
    occupation: "",
    title: "",
    about: `Mr. Ajinkya Lohakare is a paid security consultant , Ethical Hacking expert, cyber security researcher , Entrepreneur, Public speaker and Author.
    He does security consulting for fortune 500 companies and the law enforcements , perform penetration testing services for the world’s largest companies and teaches social engineering classes to 
    
    Dozens of companies and government agencies. He has also assisted law enforcement in India , Bangladesh & Sri-lanka since 2015 on cyber crime cases.
    
    Ajinkya has given keynotes and presentations at a number of conferences around the world . Alongside conducting 1200+ Workshops and being an inspiring JOSH talk Speaker, he has also delivered talks at event like , Josh talk , Vedh talk , The dais conclave etc.`
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