import ComeTo from "./components/ComeTO/ComeTo"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Plan from "./components/Plan/Plan"
import Pormotions from "./components/Pormotions/Pormotions"

const App = () => {

  return (
    <>
      <div className="relative">
        <div className="absolute top-2 right-0 left-0">
          <Header />
        </div>
        <Hero />
      </div>
      <Plan />
      <ComeTo />
      <Pormotions />
    </>
  )
}

export default App
