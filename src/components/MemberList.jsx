import MemberCard from "./MemberCard";
import { Divider } from 'antd';

export default function MemberList(){
    return(
        <div className="cardContainer">
            <p>Team members previously added to projects</p>
            <Divider/>
            <MemberCard name="Henrik Hansen" text="Front-end Dev"/>
            <Divider/>
            <MemberCard name="John Doe" text="Pro Maccen Spiser"/>
            <Divider/>
            <MemberCard name="Gill Bates" text="Just a guy"/>

        </div>
    )
}