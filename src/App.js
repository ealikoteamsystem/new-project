import "./App.css";
import Header from "./header/Header";
import { Card } from "./UI/Card";
import menIcon from "./image/men.png";
import girlIcon from "./image/girl.png";
import { students } from "./data/students";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          height: "calc(100vh - 60px)",
          overflowY: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {students.map((item) => {
          console.log("item", item);
          return (
            <Card
              key={item.name}
              image={item.gender === "f" ? girlIcon : menIcon}
              content={item.content}
              name={item.name}
              onClick={(e) => {
                console.log(e.target.alt);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
