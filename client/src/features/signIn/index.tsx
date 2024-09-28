import { SignInProps } from "./types";

const URL: string = 'http://localhost:3001/user/enter'

export const SignIn: React.FC<SignInProps> = ({ change }) => {
  const submit = async (e: any): Promise<void> => {
    e.preventDefault()
    const HTMLform = e.target
    const form = {
      email: HTMLform.email.value,
      password: HTMLform.password.value,
    }

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    const json = await response.json()

    console.log(json);
  }

  return (
  <form onSubmit={submit}>
    <p>Войти</p> <br />
    <input name="email" placeholder="почта" /> <br />
    <input name="password" placeholder="пароль" /> <br />
    <button onClick={change}>Зарегистрироваться</button> <br />
    <button type="submit">Вход</button> <br />
  </form>
)}