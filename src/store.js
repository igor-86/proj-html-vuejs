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
    ]
});