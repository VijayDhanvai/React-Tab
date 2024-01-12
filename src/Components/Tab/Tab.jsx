import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { TabDetail } from '../data.js';
function Tab() {
  let tabTitle = "components";
  const [TabData, setTabData] = useState(tabTitle);

  function handleClick(tabTitle) {
    setTabData(tabTitle);
  }
  return (
    <>


      {Object.entries(TabDetail).map(([key, val], i) => (


        <TabButton className={TabData == key ? "btn-primary" : "btn-outline-primary"}
          handleClick={handleClick}>{val.title}
        </TabButton>


      ))}

      {/* <TabButton className={TabData == 'components' ? "btn-primary" : "btn-outline-primary"}

        handleClick={handleClick}>Components</TabButton>
      <TabButton className={TabData == 'jsx' ? "btn-primary" : "btn-outline-primary"} handleClick={handleClick}>JSX</TabButton>
      <TabButton className={TabData == 'props' ? "btn-primary" : "btn-outline-primary"} handleClick={handleClick}>Props</TabButton>
      <TabButton className={TabData == 'state' ? "btn-primary" : "btn-outline-primary"} handleClick={handleClick}>State</TabButton> */}

      <div className=" mt-0  border  p-3">
        <h2 className="text-primary">{TabDetail[TabData].title}</h2>
        <p>{TabDetail[TabData].description}</p>
        <div>
          <pre>
            <code>{TabDetail[TabData].code}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
export default Tab;
