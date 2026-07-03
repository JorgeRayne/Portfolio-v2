import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faPhp, faGitAlt } from "@fortawesome/free-brands-svg-icons";

function IconList() {
    const tech = [ faHtml5, faCss3Alt, faJs, faPhp, faGitAlt ]
  return (
    <ul>
        <li>
            <FontAwesomeIcon icon={faHtml5}/>
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faPhp} />
            <FontAwesomeIcon icon={faGitAlt} />
        </li>
    </ul>
  );
}

export default IconList;