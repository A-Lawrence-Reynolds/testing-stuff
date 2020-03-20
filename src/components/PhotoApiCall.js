import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoDisplay from "./PhotoDisplay";
export default function PhotoApiCall() {
  const [photo, setPhoto] = useState();
  const [info, setInfo] = useState();
  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization:
            "Client-ID 99121b6c7dd9dd41414868e79fabeb21ce39d9d64a490419be93aa9e6298981e"
        }
      })
      .then(response => {
        console.log(response);
        setPhoto(response.data.urls.full);
        setInfo(response.data)
      })
      .catch(error => {
        console.log(error, "response not found");
      });
  }, []);
  return <PhotoDisplay photo={photo} info={info} />;
}
