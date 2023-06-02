import backIMG from '../img/back-button-icon-8.jpg'
import { useNavigate } from 'react-router-dom';
function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <div id='backButton'>
            <div onClick={handleBack}>
                <img src={backIMG} alt="" />
            </div>
        </div>
    )
}

export default BackButton;