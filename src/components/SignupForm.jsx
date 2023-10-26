import PrimaryButton from "./PrimaryButton";

export default function SignupForm() {
  return (
    <div>
      <form action="">
        <label className="rounded-md border-2 border-gray-400 p-2 text-sm">
          <input type="text" placeholder="Enter an email" />
        </label>
      </form>
      <PrimaryButton />
    </div>
  );
}
