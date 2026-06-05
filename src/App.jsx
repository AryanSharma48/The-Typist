import Header from "./components/header"
import Main from "./components/main"
import AudioToggle from "./components/AudioToggle"
import PikachuGreeting from "./components/PikachuGreeting"
import ClickSpark from "./components/ClickSpark"

export default function App(){
    return(
        <ClickSpark
            sparkColor="#FFDE00"
            sparkSize={10}
            sparkRadius={30}
            sparkCount={10}
            duration={500}
            style={{ minHeight: "100vh", width: "100%" }}
        >
            <AudioToggle />
            <Header />
            <Main />
            <PikachuGreeting />
        </ClickSpark>
    )
}