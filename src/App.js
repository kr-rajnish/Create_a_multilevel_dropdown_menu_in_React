import Menu from "./Menu";
import "./styles.css";

export default function App() {
  const menudata = [
    {
      label: "Menu 1"
    },
    {
      label: "Menu 2",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }]
    },
    {
      label: "Menu 3",
      submenu: [
        { label: "Sub Menu 1" },
        { label: "Sub Menu 2" },
        { label: "Sub Menu 3" },
        { label: "Sub Menu 4" }
      ]
    },
    {
      label: "Menu 4",
      submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }]
    }
  ];
  return (
    <div className="App">
      <Menu data={menudata} />
    </div>
  );
}
