import MeetupItem from "../components/meetups/MeetupsItem";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPage() {
  const [loading, setIsLoading] = useState(true);
  const [dataState, setData] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-api-2cdcf-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setData(meetups);
        console.log(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={dataState} />
      </section>
    );
  }
}

export default AllMeetupPage;
