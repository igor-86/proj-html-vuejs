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
            ]


        },

    ]
});