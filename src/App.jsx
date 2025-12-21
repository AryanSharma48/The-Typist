import Header from "./components/header"
import Main from "./components/main"
import ClickSpark from "./components/ClickSpark"

export default function App(){
    return(
        <>  <ClickSpark
                sparkColor="#fff"
                sparkSize={10}
                sparkRadius={25}
                sparkCount={8}
                duration={400}
            >
            <Header />
            <Main />
            </ClickSpark>
        </>
    )
}