import defaultPicture from '../assets/images/defaultpicture.png';

function ProfilePicture() {
    return ( 
        <div className="my-5">
            <img className="sm:h-36 sm:w-36 h-18 w-18 border border-indigo-200 mx-auto rounded-full my-2" src={defaultPicture} alt="Default profile" />
        </div>
    )
}

export default ProfilePicture;