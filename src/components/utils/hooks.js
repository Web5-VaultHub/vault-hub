const { useEffect, useState } = require("react");

export const useDID = () => {
  const [userDID, setUserDID] = useState("");
  useEffect(() => {
    setUserDID(window.localStorage.getItem("userDID"));
  }, []);
  return userDID;
};
