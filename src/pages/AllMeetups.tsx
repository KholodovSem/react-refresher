import { useEffect, useState } from "react";
import axios from "axios";
import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../components/models/Meetup";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meetups, setMeetups] = useState<Meetup[]>([]);

  const fetchMeetups = async () => {
    setIsLoading(true);
    const { data } = await axios.get<Meetup[]>(
      "https://react-refresher-8e25c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    );

    const meets = [];
    for (let meet in data) {
      meets.push({
        id: meet,
        ...data[meet],
      });
    }
    setMeetups(meets);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <div>Loadnig...</div> : <MeetupList meetups={meetups} />}
    </section>
  );
};

export default AllMeetups;
