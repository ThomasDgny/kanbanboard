import { Dropdown } from "flowbite-react";

function App() {
  return (
    <div className="App">
      <Dropdown
        label="Dropdown button"
        dismissOnClick={false}
      >
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;