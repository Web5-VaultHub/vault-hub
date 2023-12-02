import React, { useState } from "react";
import { Button, FlexContainer, Input } from "../reusable";
import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [did, setDid] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    window.localStorage.setItem("userDID", did);
    router.push("/");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.container}>
          <h2>Login</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              placeholder="Enter DID"
              value={did}
              name={"did"}
              onChange={(e) => setDid(e.target.value)}
            />
            <Button type="submit">{loading ? "Logging in" : "Login"} </Button>
            <p>
              Don't have a DID? <Link href={"/create-did"}>Create DID</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
