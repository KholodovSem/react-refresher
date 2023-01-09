import { Meetup } from "../models/Meetup";
import MeetupItem from "./MeetupItem";
import s from "./MeetupList.module.css";

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList = ({ meetups }: MeetupListProps) => {
  return (
    <ul className={s.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
