import Card from "../ui/Card.js";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const titleInput = titleInputRef.current.value;
    const imageInput = imageInputRef.current.value;
    const descriptionInput = descriptionInputRef.current.value;
    const addressInput = addressInputRef.current.value;
    const meetupData = {
      title: titleInput,
      image: imageInput,
      description: descriptionInput,
      address: addressInput,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            required
            id="description"
            res={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
