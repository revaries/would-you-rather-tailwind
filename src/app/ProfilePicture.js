import defaultPicture from '../assets/images/defaultpicture.png';

function ProfilePicture({avatarURL, isSmall}) {
    return ( 
        <div className="my-5">
            <img className={`${isSmall ? "h-5 w-5" : "sm:h-36 sm:w-36 h-18 w-18 my-2"} border border-indigo-200 mx-auto rounded-full`} src={ avatarURL ? avatarURL :  defaultPicture} alt="Default profile" />
        </div>
    )
}

export default ProfilePicture;