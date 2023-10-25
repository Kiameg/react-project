import PrimaryButton from "./PrimaryButton";

export default function SignupForm(){
    return(
        <div className="formWrapper">
        <form action="">
            <input type="text" placeholder="Enter an email" />
        </form>
        <PrimaryButton/>
        
        </div>
    )
}