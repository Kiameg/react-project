import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";

export default function MemberCard(props) {
  return (
    <div className="MemberCardContainer grid grid-cols-2 items-center ">
      <div className="flex gap-3">
        <Avatar />
        <div className="cardText">
          <h3 className="font-bold">{props.name}</h3>
          <p>{props.text}</p>
        </div>
      </div>
      <div className="justify-self-end">
        <SecondaryButton />
      </div>
    </div>
  );
}
