import MemberCard from "./MemberCard";
import { Divider } from "antd";

export default function MemberList() {
  return (
    <div className="cardContainer mt-10">
      <p>Team members previously added to projects</p>
      <Divider />
      <MemberCard name="Henrik Hansen" text="Front-end Developer" />
      <Divider />
      <MemberCard name="John Doe" text="Mothertrucker" />
      <Divider />
      <MemberCard name="Gill Bates" text="Some guy who likes windows" />
    </div>
  );
}
