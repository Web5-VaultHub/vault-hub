"use client"
import React, { createContext, useEffect, useState } from "react";

export const Web5Context = createContext();

export const Web5ContextManager = (props) => {
  const [web5, setWeb5] = useState(null);
  const [userDid, setUserDid] = useState(null);

  const connectAccount = async () => {
    const { Web5 } = await import("@web5/api/browser");
    const { web5, did } = await Web5.connect();
    setWeb5(web5);
    setUserDid(did);
  };

  const disconnect = async () => {
    console.log("Disconnect");
    setWeb5(null);
    setUserDid(null);
  };
  useEffect(() => {
    connectAccount();
  }, []);

  const value = { web5, setWeb5, userDid, setUserDid,  disconnect };

  return <Web5Context.Provider value={value}>{props.children}</Web5Context.Provider>;
};
