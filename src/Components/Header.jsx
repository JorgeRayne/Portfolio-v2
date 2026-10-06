import NavLinks from "./Navlinks"

export default function Header() {

    const links = [
        'Home', 'About', 'Experience', 'Project', 'Projects'
    ]

    return (
        <div className="w-full flex justify-evenly items-center py-4
            bg-background/20
            backdrop-blur-[8px]
            border border-white/10
            rounded-full
            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        ">
            {links.map(((link, index) => (
                <NavLinks key={index} linkTitle={link}/>
            )))}
        </div>
    )
}