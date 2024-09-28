import { SignUpProps } from "./types";

export const SignUp: React.FC<SignUpProps> = ({ change }) => (
    <form>
      <p>Зарегистрироваться</p> <br />
      <input placeholder="имя" /> <br />
      <input placeholder="почта" /> <br />
      <input placeholder="пароль" /> <br />
      <input placeholder="дата рождения" /> <br />
      <input placeholder="категории" /> <br />
      <button>Зарегистрироваться</button> <br />
      <button onClick={change}>Уже есть акаунт</button> <br />
    </form>
  )