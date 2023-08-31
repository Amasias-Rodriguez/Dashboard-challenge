import facebookLogo from '../assets/icon-facebook.svg'
export const OverviewCard = ({ user, audienceType, audience }) => {
    return (
        <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto">
            <img src={facebookLogo} alt="logo" />
            <p>{user}</p>
            <p>{audience}</p>
            <p>{audienceType}</p>
        </article>
    )
}
