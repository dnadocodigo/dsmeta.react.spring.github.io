import Header from "./components/header/Indesx";
import SalesCard from "./components/salesCard";

function App() {
    return(
      <>
      <Header />
      <main>
        <section id="sales">
          <div className="sales-card-content container">
          <SalesCard />
          </div>
        </section>
      </main>
      </>
    )
  }
 

export default App
