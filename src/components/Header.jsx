import PrimaryButton from "./PrimaryButton";
import SignupForm from "./SignupForm";
import { TeamOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="mt-20 grid justify-items-center">
      <TeamOutlined id="teamLogo" />
      <h2>Add team members</h2>
      <p>
        You havent added ny teammembers to youre project yet. As the owner of
        this project, you can manage team member permissions
      </p>
    </div>
  );
}
