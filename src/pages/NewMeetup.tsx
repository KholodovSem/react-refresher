import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { Meetup } from "../components/models/Meetup";

const NewMeetup = () => {
  const navigate = useNavigate();

  const onAddMeetup = async (meetup: Meetup) => {
    await axios.post<Meetup>(
      "https://react-refresher-8e25c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      meetup
    );
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
};

export default NewMeetup;
