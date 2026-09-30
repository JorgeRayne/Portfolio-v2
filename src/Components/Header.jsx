import NavLinks from "./Navlinks"

export default function Header() {

    const links = [
        'Home', 'About', 'Experience', 'Project', 'Projects'
    ]

    return (
        <div className="flex gap-20 w-full justify-center items-center">
            {links.map(((link, index) => (
                <NavLinks key={index} linkTitle={link}/>
            )))}
        </div>
    )
}