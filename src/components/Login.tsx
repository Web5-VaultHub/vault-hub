import { Button, FlexContainer, Input } from "src/components/reusable";
import style from "./login.module.scss";

export default function LoginPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.left}></div>
      <div className={style.right}>
        <div className={style.container}>
          <h2>Login</h2>
          <form>
            <Input placeholder="Enter DID" />
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
