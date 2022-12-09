import "./App.css";
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import { useState } from "react";
function App() {
  const APP_ID = "6EFB5B28-6284-49CF-95F4-EC39B2E98412";
  const USER_ID = "6370d7cda004eaa68b91647e";
//   admin: 6370d7cda004eaa68b91647e
// test: 6378905c8b6200719567cc0a
  const [theme, setTheme] = useState("light");
  const [themeColor, setThemeColor] = useState("#161616");
  const [toggleButton, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggleButton);
    console.log(toggleButton);
    setTheme(theme === "dark" ? "light" : "dark");
    setThemeColor(theme === "dark" ? "#fff" : "#161616");
  };
  const checkbox = {
    textAlign: "right",
    width: "100%",
    backgroundColor: themeColor,
    position: "relative",
    paddingTop: "5px",
    paddingBottom: "5px",
  };
  const toggle = {
    backgroundColor: themeColor === "#fff" ? "#161616" : "#fff",
    height: "30px",
    width: "60px",
    borderRadius: "30px",
    display: "inline-block",
    marginRight: "10px",
  };
  return (
    <div className="App">
      {/* <div className="CheckBok" style={checkbox}>
        <div onClick={handleClick} className="toggle" style={toggle}>
          {toggleButton ? (
            <div className="toggle_left"></div>
          ) : (
            <div className="toggle_right"></div>
          )}
        </div>
      </div> */}
      <SendbirdApp appId={APP_ID} userId={USER_ID} theme={theme} />
    </div>
  );
}

export default App;
