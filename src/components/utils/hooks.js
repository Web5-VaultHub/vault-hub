const { useEffect, useState } = require("react");
import { Web5 } from "@web5/api";

export const useDID = () => {
  const [userDID, setUserDID] = useState("");
  useEffect(() => {
    const did = window.localStorage.getItem("userDID");
    setUserDID(did);
  }, []);
  return userDID;
};

export const useProfile = (did) => {
  const [profile, setProfile] = useState({});

  const retrieveDWN = async () => {
    try {
      const { web5 } = await Web5.connect();

      const { records } = await web5.dwn.records.query({
        from: did,
        message: {
          filter: {
            schema: "http://example.com/user-profile-object",
            dataFormat: "application/json",
          },
        },
      });
      for (let record of records) {
        const data = await record.data.json();
        const list = { record, data, id: record.id };
        setProfile(list.data);
      }
    } catch (error) {
      console.error("Error retrieving data from DWN:", error);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    retrieveDWN();
  }, [retrieveDWN]);

  return profile;
};
