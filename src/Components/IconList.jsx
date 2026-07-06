import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faPhp, faGitAlt } from "@fortawesome/free-brands-svg-icons";

function IconList() {
    const techs = [ faHtml5, faCss3Alt, faJs, faPhp, faGitAlt ]
  return (
    <ul className="flex justify-center items-center gap-3 mt-1 bg-red-800">
        {techs.map((item, index) => (
            <li key={index}>
                <FontAwesomeIcon icon={item}/>
            </li>
        ))}
    </ul>
  );
}

export default IconList;