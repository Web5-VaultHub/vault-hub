"use client";

import { Button, Input } from "../reusable";
import style from "./style.module.scss";
import Link from "next/link";
import { Web5 } from "@web5/api";
import React, { useState } from "react";
import CheckPill from "../reusable/CheckPill";

export default function CreateDID() {
  const [didType, setDidType] = useState("personal");
  const [userDID, setUserDID] = useState<string>("");
  const [personal, setPersonal] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [profile, setProfile] = useState(
    didType == "personal"
      ? { firstName: "", lastName: "" }
      : { organizationName: "", adminName: "" }
  );

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
    <div className={style.createDID}>
      <div className={style.left}>
        <form className={style.container} onSubmit={(e) => newDID(e)}>
          <div className={style.title}>
            <h1>Create DID</h1>
            <img src="/icons/vault.png" />
          </div>
          <div className={style.selectWrapper}>
            <div>
              <CheckPill
                name="didType"
                label="Personal"
                value="personal"
                type="radio"
                checked={didType == "personal"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDidType(e.target.value)
                }
              />
            </div>
            <div>
              <CheckPill
                name="didType"
                label="Organization"
                value="organization"
                type="radio"
                checked={didType == "organization"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDidType(e.target.value)
                }
              />
            </div>
          </div>

          {error && (
            <p>
              An error occured while generating your DID. <br /> Please try
              again
            </p>
          )}
          {didType == "personal" ? (
            <>
              <Input
                label="First name"
                type="text"
                value={profile.firstName}
                name="firstName"
                onChange={handleInputChange}
                placeholder="First name"
              />
              <Input
                label="Last name"
                type="text"
                value={profile.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder="Last name"
              />
              <Button type="submit">{loading ? "Creating" : "Create"}</Button>
            </>
          ) : (
            <>
              <Input
                label="Organization name"
                type="text"
                value={profile.organizationName}
                name="organizationName"
                onChange={handleInputChange}
                placeholder="Organization name"
              />
              <Input
                label="Admin name"
                type="text"
                value={profile.adminName}
                name="adminnName"
                onChange={handleInputChange}
                placeholder="Full name"
              />
              <Button type="submit">{loading ? "Creating" : "Create"}</Button>
            </>
          )}
          <p className={style.info}>
            Already have a DID?{" "}
            <Link href={"/login"} className={style.link}>
              Log in
            </Link>
          </p>
        </form>
      </div>
      <div className={style.right}>
        <img src="/images/frame-303.png" />
      </div>
    </div>
  );
}
//did:ion:EiBSCI8OdDhKzXkCTAjn0zMp53A0J7yOmR8hI2LnJ90W5g:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiemlDNjJiVFpYX2MyaTRUNmh1aEZZMkxEVFhGdmlidHJUN2RweThfWUVKVSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJfVVJCaHpsSGw4TGY4aDU4RVJSNXYxcEF5bGJ1WTZlWkUybFBDdHQ3MHJNIiwieSI6InVHdE9xSzlKUmJZY200Y3RnRG5ZM1hxbnpPVTFIajJudGhFY1hOSVRYeFUifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBLWw5QTZpRVM4dGNHVm9fa0lWdll5bllUVVoyTnlKLWlCcjRPSnRVTUZGdyJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQk9vQWtsWERNaW9oSndLUGNRMkkwdHNzelpVQ3ZWUkMzaHU4MXlTT0x1RVEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJCaC1CZmFqN3pnZ3ZRbEttVWZ3eXN2amR3T2k0VkJtTFl4RVJ3dzRyWnRBIn19
