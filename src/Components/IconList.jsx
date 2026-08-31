import cssIcon from "../assets/Icons/css-3.svg";
import gitIcon from "../assets/Icons/git.svg";
import htmlIcon from "../assets/Icons/html-5.svg";
import jsIcon from "../assets/Icons/js.svg";
import laravelIcon from "../assets/Icons/laravel.svg";
import npmIcon from "../assets/Icons/npm.svg";
import phpIcon from "../assets/Icons/php.svg";
import pythonIcon from "../assets/Icons/python.svg";
import reactIcon from "../assets/Icons/react.svg";

function IconList() {
    const techs2 = [cssIcon, gitIcon, htmlIcon, jsIcon, laravelIcon, npmIcon, phpIcon, pythonIcon, reactIcon]
  return (
    <ul className="flex justify-center items-center gap-3 mt-1">
        {techs2.map((item, index) => (
            <li key={index} className="text-muted text-2xl">
                <img className="w-10" src={item} alt="techs"/>
            </li>
        ))}
    </ul>
  );
}

export default IconList;