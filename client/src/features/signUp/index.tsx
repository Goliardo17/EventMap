import { SignUpProps } from "./types";

const URL = "http://localhost:3001/user/create"

export const SignUp: React.FC<SignUpProps> = ({ change }) => {
  const submit = async (e: any) => {
    e.preventDefault()
    const HTMLform = e.target
    const form = {
      name: HTMLform.name.value,
      email: HTMLform.email.value,
      password: HTMLform.password.value,
      birthday: HTMLform.birthday.value,
      categories: HTMLform.categories.value,
    }

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    const json = await response.json()

    console.log(json)
  }

  return (
    <form onSubmit={submit}>
      <p>Зарегистрироваться</p> <br />
      <input name="name" placeholder="имя" /> <br />
      <input name="email" placeholder="почта" /> <br />
      <input name="password" placeholder="пароль" /> <br />
      <input name="birthday" placeholder="дата рождения" /> <br />
      <input name="categories" placeholder="категории" /> <br />
      <button>Зарегистрироваться</button> <br />
      <button onClick={change}>Уже есть акаунт</button> <br />
    </form>
  )}