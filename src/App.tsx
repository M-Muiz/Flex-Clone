import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

const App = () => {

  return (
    <>
      <div className="relative">
        <div className="absolute top-2 right-0 left-0">
          <Header />
        </div>
        <Hero />
      </div>
    </>
  )
}

export default App
