import { SignInProps } from "./types";

const URL: string = 'http://localhost:3002/user'

export const SignIn: React.FC<SignInProps> = ({ change }) => (
  <form method="get">
    <p>Войти</p> <br />
    <input placeholder="почта" /> <br />
    <input placeholder="пароль" /> <br />
    <button onClick={change}>Зарегистрироваться</button> <br />
    <button type="submit" formAction={URL}>Вход</button> <br />
  </form>
)