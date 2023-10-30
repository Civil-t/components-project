import "./App.css";
import ListGroup from "./ListGroup";

function App() {
  let items = [
    "Personal Details and Photo",
    "Education Background",
    "Special Skills",
    "Extra Curriculum Activities",
    "Hobbies and Interests",
  ];

  const handleSelectItem = (item) => {
    console.log(item);
    window.open(item, "_blank");
  };

  return (
    <div>
      <ListGroup
        items={items.map((item, index) => (
          <a
            key={index}
            href={`https://example.com/${item}`} // Replace with actual URLs
            target="_blank"
            rel="noopener noreferrer"
          >
            {item}
          </a>
        ))}
        heading="My CV"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
