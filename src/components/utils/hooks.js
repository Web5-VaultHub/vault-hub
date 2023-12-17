"use client";

const { useEffect, useState } = require("react");

const useWeb5 = () => {
  const [web5, setWeb5] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [did, setDid] = useState("");
  
  useEffect(() => {
    const initWeb5 = async () => {
      setLoading(true)
      // @ts-ignore
      const { Web5 } = await import("@web5/api/browser");
      try {
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setDid(did);
        setLoading(false)
      } catch (error) {
        console.error("Error initializing Web5", error);
        setLoading(false)
      }
    };

    initWeb5();
  }, []);
  return { web5, did, loading, error };
};

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
        //  from: did,
        message: {
          filter: {
            schema: "http://vaulthub.xyz/profile",
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
  }, []);

  return profile;
};

export default useWeb5;
