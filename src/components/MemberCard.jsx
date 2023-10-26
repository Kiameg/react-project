import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";

export default function MemberCard(props) {
  return (
    <div className="MemberCardContainer">
      <Avatar />
      <div className="cardText">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
      <SecondaryButton />
    </div>
  );
}
