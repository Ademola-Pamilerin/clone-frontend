import Header from "@/components/header/header"
import StartPageBody from "@/components/startpage/body"
import StartPage from "@/components/startpage/start"


const Home = () => {
  return (
    <div className="auto">
      <div className="bg-gray-100 h-auto">
        <StartPage>
          <Header active={"home"} />
        </StartPage>
        <StartPageBody />
      </div>
    </div>
  )
}

export default Home