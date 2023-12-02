import { useState } from "react";
import { Button, FlexContainer, Input } from "../reusable";
import style from "./style.module.scss";
import Link from "next/link";
import { useDID } from "src/components/utils/hooks";

//In progress
export default function LoginPage() {
  const userDID = useDID();

  console.log(userDID);
  return (
    <div className={style.wrapper}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.container}>
          <h2>Login</h2>
          <form>
            <Input
              placeholder="Enter DID"
              readOnly
              //  onChange={(e) => setUserDid(e.target.value)}
            />
            <Button>Login</Button>
            <p>
              Don't have a DID? <Link href={"/create-did"}>Create DID</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
