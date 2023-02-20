import { AiFillHome } from "react-icons/ai"

export const menuData = [
    {
        title: "Home",
        icon: <AiFillHome />,
        link: "/",
        id: 1
    },
    {
        title: "About",
        icon: <AiFillHome />,
        link: "/about",
        id: 2
    },
    {
        title: "Service",
        icon: <AiFillHome />,
        link: "/service",
        id: 3
    },
    {
        title: "Products",
        icon: <AiFillHome />,
        link: "/products",
        id: 4,
        obj: {
            wines: [
                {
                    name: "nebbiolo",
                    type: "red",
                    id: 1
                },
                {
                    name: "vespolina",
                    type: "red",
                    id: 2
                },
                {
                    name: "sauvignon blanc",
                    type: "white",
                    id: 3
                },
                {
                    name: "nerello",
                    type: "red",
                    id: 4
                },
            ]
        }
    }
]



