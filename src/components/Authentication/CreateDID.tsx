"use client";

import { Button, Input } from "../reusable";
import style from "./style.module.scss";
import Link from "next/link";
import { Web5 } from "@web5/api";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateDID() {
  const [userDID, setUserDID] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const newDID = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { web5, did: newDID } = await Web5.connect();
      window.localStorage.setItem("userDID", newDID);
      const { record } = await web5.dwn.records.create({
        data: profile,
        message: {
          schema: "http://example.com/user-profile-object",
          dataFormat: "application/json",
        },
      });
      console.log(await record?.data.json());
      setUserDID(newDID);
      setLoading(false);
    } catch (error) {
      console.error("Error creating DID:", error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.container}>
          <h2>Create DID</h2>
          <form onSubmit={(e) => newDID(e)}>
            {error && (
              <p>
                An error occured while generating your DID. <br /> Please try
                again
              </p>
            )}
            {userDID ? (
              <div className={style.snippet}>
                <code>{userDID}</code>
                <button
                  className={style.copyBtn}
                  type="button"
                  onClick={() => navigator.clipboard.writeText(userDID)}
                >
                  Copy
                </button>
              </div>
            ) : (
              <>
                <Input
                  type="text"
                  value={profile.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                  placeholder="First name"
                />
                <Input
                  type="text"
                  value={profile.lastName}
                  name="lastName"
                  onChange={handleInputChange}
                  placeholder="Last name"
                />
                <Button type="submit">{loading ? "Creating" : "Create"}</Button>
              </>
            )}
            <p>
              Already have one? <Link href={"/login"}>Log in</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
//did:ion:EiBSCI8OdDhKzXkCTAjn0zMp53A0J7yOmR8hI2LnJ90W5g:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiemlDNjJiVFpYX2MyaTRUNmh1aEZZMkxEVFhGdmlidHJUN2RweThfWUVKVSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJfVVJCaHpsSGw4TGY4aDU4RVJSNXYxcEF5bGJ1WTZlWkUybFBDdHQ3MHJNIiwieSI6InVHdE9xSzlKUmJZY200Y3RnRG5ZM1hxbnpPVTFIajJudGhFY1hOSVRYeFUifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBLWw5QTZpRVM4dGNHVm9fa0lWdll5bllUVVoyTnlKLWlCcjRPSnRVTUZGdyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQk9vQWtsWERNaW9oSndLUGNRMkkwdHNzelpVQ3ZWUkMzaHU4MXlTT0x1RVEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJCaC1CZmFqN3pnZ3ZRbEttVWZ3eXN2amR3T2k0VkJtTFl4RVJ3dzRyWnRBIn19
