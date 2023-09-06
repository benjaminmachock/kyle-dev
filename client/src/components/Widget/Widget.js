//Imports
import { useState, useEffect } from "react";
import axios from "axios";
import dayJs from "dayjs";

const Widget = () => {
  //Hooks
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    handleTourDates();
  }, []);

  //notify me button
  //https://www.bandsintown.com/e/1019985520?app_id=yOUrSuP3r3ven7aPp-id&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=notify_me

  const handleTourDates = async () => {
    let data = await axios.get(
      "https://rest.bandsintown.com/artists/kylejennings/events/?app_id=1bb36b4d0a0995781376ad16394a4fc7"
    );

    console.log(data.data);

    setTourDates(data.data);
  };

  //Functions

  return (
    <>
      {tourDates ? (
        tourDates.map((date) => {
          return (
            <tr>
              <td>
                {dayJs(date.datetime).format("MMM[.] D[,] YYYY")} @
                {dayJs(date.starts_at).format("h:mm A")}
                <br />
                {date.venue.location}
                <br />
                {date.venue.name}
              </td>

              <td style={{ width: "25%" }}>
                <a
                  href={`https://www.bandsintown.com/e/${date.id}?app_id=1bb36b4d0a0995781376ad16394a4fc7-id&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&trigger=notify_me`}
                  target="no_blank"
                >
                  <button
                    style={{
                      backgroundColor: "#4A4A4A",
                      color: "white",
                      padding: "1rem",
                    }}
                    type="submit"
                  >
                    Notify Me
                  </button>
                </a>
              </td>
            </tr>
          );
        })
      ) : (
        <h1>No Tour Dates At This TIme</h1>
      )}
    </>
  );
};

export default Widget;
