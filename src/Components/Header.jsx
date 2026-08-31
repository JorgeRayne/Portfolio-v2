import NavLinks from "./Navlinks"

export default function Header() {

    const links = [
        'Home', 'About', 'Project', 'Education', 'Background'
    ]

    return (
        <div className="flex gap-5 w-full justify-evenly items-center mr-10">
            {links.map(((link, index) => (
                <NavLinks key={index} linkTitle={link}/>
            )))}
        </div>
    )
}