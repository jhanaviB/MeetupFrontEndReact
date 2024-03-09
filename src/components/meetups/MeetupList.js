import MeetupItem from "./MeetupsItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
      ;
    </ul>
  );
}

export default MeetupList;
