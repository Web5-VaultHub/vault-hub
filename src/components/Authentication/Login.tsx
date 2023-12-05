import React, { useState } from "react";
import { Button, Input } from "../reusable";
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
    router.push("/files");
  };

  return (
    <div className={style.login}>
      <div className={style.left}>
        <img src="/images/login.png" />
        {/* <div className={style.text}>
          <h1>VaultHub</h1>
          <p>A decentralized personal data storage.</p>
  </div> */}
      </div>
      <div className={style.right}>
        <form onSubmit={(e) => handleSubmit(e)} className={style.container}>
          <div className={style.title}>
            <h1>Input DID</h1>
            <img src="/icons/lock.png" />
          </div>
          <Input
            placeholder="Enter DID"
            value={did}
            name={"did"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDid(e.target.value)
            }
          />
          <Button type="submit">{loading ? "Logging in" : "Login"} </Button>
          <p className={style.info}>
            Don't have a DID?{" "}
            <Link href={"/login"} className={style.link}>
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
