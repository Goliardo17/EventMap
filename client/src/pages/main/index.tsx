import { Header } from "../../widgets/header"
import { Map } from "../../widgets/map"
import { Events } from "../../widgets/events"
import { Footer } from "../../widgets/footer"

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Map />
      <Events />
      <Footer />
    </>
  )
}