import React from "react";
import ReactDOM from "react-dom/client";

// const Application = ()=>{
//   return <div>
//     <h1>Prince Dev</h1>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing
//       elit. Sed do eiusmod tempor incididunt ut labore et
//       dolore magna aliqua. Ut enim ad minim veniam, quis
//       nostrud exercitation ullamco laboris nisi ut aliquip
//        ex ea commodo consequat. Duis aute irure dolor in
//        reprehenderit in voluptate velit esse cillum dolore
//        eu fugiat nulla pariatur. Excepteur sint occaecat
//        cupidatat non proident, sunt in culpa qui officia
//        deserunt mollit anim id est laborum.
//     </p>
//   </div>

// }

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Prince Dev</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Application />);
