const { useEffect, useState } = require("react");
import { Web5 } from "@web5/api";

const useWeb5 = () => {
  const [web5, setWeb5] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWeb5 = async () => {
      // @ts-ignore
   //   const { Web5 } = await import("@web5/api/browser");

      try {
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setMyDid(did);
        console.log(web5);
        if (web5 && did) {
          console.log("Web5 initialized");
          // await configureProtocol(web5, did);
        }
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };

    initWeb5();
  }, []);

  return { web5, isLoading, error };
};

export default useWeb5;

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
  const { web5 } = useWeb5();

  const retrieveDWN = async () => {
    try {
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
        setProfile(list);
      }
    } catch (error) {
      console.error("Error retrieving data from DWN:", error);
    }
  };

  useEffect(() => {
    retrieveDWN();
  }, [retrieveDWN]);

  return profile;
};
