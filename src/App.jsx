import Header from "./components/Header";

import SignupForm from "./components/SignupForm";
import PrimaryButton from "./components/PrimaryButton";
import MemberList from "./components/MemberList";

export default function App() {
  return (
    <div className="flex justify-center">
      <main>
        <Header />
        <SignupForm />
        <MemberList />
        <ul>
          {/* <User name="Marvin" framework="React" />
          <User name="Kevin" framework="Astro" />
          <User name="Kia" framework="TFT" /> */}
        </ul>
      </main>
    </div>
  );
}
