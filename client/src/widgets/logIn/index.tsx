import { useState } from "react"
import { SignIn } from "../../features/signIn"
import { SignUp } from "../../features/signUp"

export const LogIn: React.FC = () => {
  const [registrate, setRegistrate] = useState(false)

  const changeRegistrate = (): void => setRegistrate(!registrate)

  return (
    <div>
      {
          !registrate ?
          <SignIn change={changeRegistrate} /> :
          <SignUp change={changeRegistrate} />
      }
    </div>
  )
}