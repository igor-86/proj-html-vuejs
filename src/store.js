import { reactive } from "vue";

export const store = reactive({
    arrayMenu: [
        {
            name: "Courses",
            href: "#",
            active: false
        },
        {
            name: "Course Formats",
            href: "#",
            active: false
        },
        {
            name: "Add Course",
            href: "#",
            active: false
        },
        {
            name: "Pages",
            href: "#",
            active: false
        },
        {
            name: "Demos",
            href: "#",
            active: true
        },
    ],
    arraySocial: [
        {
            link: "fa-linkedin",
            href: "#"
        },
        {
            link: "fa-instagram",
            href: "#"
        },
        {
            link: "fa-facebook",
            href: "#"
        },
        {
            link: "fa-twitter",
            href: "#"
        }
    ],
    arrayFooter: [
        {

            description: [
                {
                    title: "About",
                    text: "Masterstudy is education of wordpress the featured by Learning Management System (LMS) for online education.",
                    develope: "Developed by StylemixTheme"
                }
            ],
            footerSocial: [
                {
                    socials: "fa-facebook",
                },
                {
                    socials: "fa-twitter",
                },
                {
                    socials: "fa-instagram",
                },
            ],
            contact: [
                {
                    title: "Contact",
                    adress: "USA, California 20, First Avenue, California",
                    phone: "Tel: +1 21245830032",
                    fax: "Fax: +1 2123752414",
                    email: "info@masterstudy.com",
                }
            ],
            pagesList: [
                {
                    title: "Pages",
                    list: [
                        {
                            pagelist: "Blog"
                        },
                        {
                            pagelist: "Courses"
                        },
                        {
                            pagelist: "Home"
                        },
                        {
                            pagelist: "Membership"
                        },
                        {
                            pagelist: "Shortcode"
                        },
                        {
                            pagelist: "Tipography"
                        }
                    ]
                }
            ],
            blog: [
                {
                    title: "Blog",
                    preview: [

                        {
                            image: "blog1.jpeg",
                            article: 'Our many target is to "Developing Yourself as a leader"',
                            date: "August 9, 2018",
                        },
                        {
                            image: "blog2.jpeg",
                            article: "Those Other College Expenses You Arent't thikhing About",
                            date: "June 3,2015"
                        }
                    ]
                }
            ],


        },

    ],

    arrayCart: [
        {
            out: "fa-desktop"
        },
        {
            out: "fa-life-ring"
        },
        {
            out: "fa-wrench"
        },
        {
            out: "fa-cart-shopping"
        },
        {
            out: "fa-mobile-screen"
        }
    ],
    arrayWhyCourse: [
        {
            icon: "fa-briefcase",
            title: "Entrepreneurship"
        },
        {
            icon: "fa-rocket",
            title: "Accelerated learning"
        },
        {
            icon: "fa-thumbs-up",
            title: "Productivity"
        },
        {
            icon: "fa-gear",
            title: "Life Coaching"
        }
    ],
    arrayNet: [
        {
            icon: "fa-user",
            number: 3165,
            category: "Online Learner"
        },
        {
            icon: "fa-clapperboard",
            number: 23,
            category: "Video Curses"
        },
        {
            icon: "fa-image",
            number: 437,
            category: "Sliders & Images"
        },
        {
            icon: "fa-thumbs-up",
            number: 1140,
            category: "Excellent reviews"
        }
    ],
    slider: [
        {
            image: "avatar1.jpg",
            title: "Great experience for me",
            art: "I spent some intense months, where I met many beautiful people.Everything is organized very well, I could not have made a better choice. Recommended!",
            title: "Paints of the future",

        },
        {
            image: "avatar2.jpg",
            title: "Paints of the future",
            art: "The response to your MasterStudy has really overwhelming! Those who participated in the workshop are spreading the word here on campus and the 'buzz' is on. the VP of instruction wants you to come back! Her goals is to have more faculty trained. She also wants to attend a workshop herself. Our president told me Masterstudy needs to be the cornerstone of our success program."
        },
        {
            image: "avatar3.jpg",
            title: "Protagonist of your future",
            art: "The goal is to grow in a working group that focuses on the enhancement of individual people. Accompanying everyone in achieving common and group goals."
        }
    ],
    courseTop: [
        {
            image: "course1.jpeg",
            title: "How to be a DJ? Make Electronic Music",
            sub: "Electronic",
            lect: 8,
        },
        {
            image: "course2.png",
            title: "Nvidia and UE4 Technologies Practice",
            sub: "Nvidia",
            lect: 8,
        },
        {
            image: "course3.jpeg",
            title: "Fashion Photography from professional",
            sub: "fashion",
            lect: 6,
        },
        {
            image: "course4.jpeg",
            title: "Design instruments for Communication",
            sub: "Communication",
            lect: 6,
        },
        {
            image: "course5.jpg",
            title: "Make your Concept right and Beautiful",
            sub: "Art",
            lect: 6,
        },
        {
            image: "course6.jpeg",
            title: "Road Bike Manual or How to Be a Champion",
            sub: "Bicycling",
            lect: 6,
        }
    ],
});