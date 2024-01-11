import TabButton from '../Components/TabButton';
import { useState } from 'react';
import { TabDetail } from './data.js';

function Tab() {
  const [TabData, setTabData] = useState('components');

  function handleClick(tabTitle) {
    setTabData(tabTitle);
  }
  return (
    <>
      <TabButton handleClick={handleClick}>Components</TabButton>
      <TabButton handleClick={handleClick}>JSX</TabButton>
      <TabButton handleClick={handleClick}>Props</TabButton>
      <TabButton handleClick={handleClick}>State</TabButton>

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
