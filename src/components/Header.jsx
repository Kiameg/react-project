import PrimaryButton from "./PrimaryButton";
import SignupForm from "./SignupForm";
import { TeamOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="mt-20 grid justify-items-center">
      <TeamOutlined className="w-30 h-30" id="teamLogo" />
      <h2 className="font-bold">Add team members</h2>
      <p className="text-center">
        You havent added ny teammembers to youre project yet. As the owner of
        this project, you can manage team member permissions
      </p>
    </div>
  );
}
