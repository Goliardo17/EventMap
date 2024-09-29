import { useState, useEffect } from "react";
import { SignUpProps } from "./types";

type Category = {
  id: number,
  title: string
}

type Categories = Category[]

const URL = "http://localhost:3001/user/create"

const CATEGORIES: Categories = [
  { id: 1, title: "bite" },
  { id: 2, title: "colon" },
  { id: 3, title: "red" },
  { id: 4, title: "test" },
  { id: 5, title: "performance" },
]

export const SignUp: React.FC<SignUpProps> = ({ change }) => {
  const [categories, setCategories] = useState<Categories>([])
  const [name, setName] = useState<string>('')
  const [sureName, setSureName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [birthday, setBirtday] = useState<string>('')
  const [userCategory, setUserCategory] = useState<Categories>([])

  const setCategory = (value: Category): void => {
    const search = userCategory.filter((item) => item.id === value.id)

    if (search.length) {
      const newUserCategories = userCategory.filter((item) => item.id !== value.id)
      setUserCategory(newUserCategories)
      return
    }

    const newUserCategories: Categories = [...userCategory]
    newUserCategories.push(value)
    setUserCategory(newUserCategories)
  }

  const submit = async (e: any) => {
    e.preventDefault()
    const form = {
      name,
      email,
      password,
      birthday,
      categories: userCategory,
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
    change()
  }

  useEffect(() => {
    setCategories(CATEGORIES)
  }, [])

  return (
    <form onSubmit={submit}>
      <p>Зарегистрироваться</p> <br />
      <input type="text" value={name} placeholder="имя" onChange={e => setName(e.target.value)}/> <br />
      <input type="text" value={sureName} placeholder="фамилия" onChange={e => setSureName(e.target.value)}/> <br />
      <input type="text" value={email} placeholder="почты" onChange={e => setEmail(e.target.value)}/> <br />
      <input type="text" value={password} placeholder="пароль" onChange={e => setPassword(e.target.value)}/> <br />
      <input type="date" value={birthday} placeholder="дата рождения" onChange={e => setBirtday(e.target.value)}/> <br />
      {
        categories.map((item) => (
          <div key={item.id}>
            <input type="checkbox" onChange={() => setCategory(item)} />
            <span>{item.title}</span>
          </div>
        ))
      }
      <button>Зарегистрироваться</button> <br />
      <button onClick={change}>Уже есть акаунт</button> <br />
    </form>
  )
}