import PrimaryButton from "./PrimaryButton";

export default function SignupForm() {
  return (
    <div className="mt-5 flex justify-center">
      <form action="">
        <label className=" mr-5 rounded-md border-2 border-gray-400 p-2 text-sm">
          <input
            className="w-[26rem]"
            type="text"
            placeholder="Enter an email"
          />
        </label>
      </form>
      <PrimaryButton />
    </div>
  );
}
