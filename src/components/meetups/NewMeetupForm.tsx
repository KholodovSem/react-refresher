import { useState } from "react";
import { Meetup } from "../models/Meetup";
import Card from "../ui/Card";
import s from "./NewMeetupForm.module.css";

type MeetupFormInputNames = "title" | "image" | "address" | "description";

interface NewMeetupFormProps {
  onAddMeetup: (meet: Meetup) => void;
}

const NewMeetupForm = ({ onAddMeetup }: NewMeetupFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [imagePath, setImagePath] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    switch (name as MeetupFormInputNames) {
      case "title": {
        setTitle(value);
        break;
      }

      case "image": {
        setImagePath(value);
        break;
      }

      case "address": {
        setAddress(value);
        break;
      }

      case "description": {
        setDescription(value);
        break;
      }

      default: {
        return;
      }
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const meetupData = {
      title,
      image: imagePath,
      address,
      description,
    };
    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input
            type={"text"}
            required
            id='title'
            name='title'
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className={s.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input
            type={"url"}
            required
            id='image'
            name='image'
            value={imagePath}
            onChange={handleChange}
          />
        </div>
        <div className={s.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input
            type={"text"}
            required
            id='address'
            name='address'
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className={s.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            required
            rows={5}
            id='description'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className={s.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
