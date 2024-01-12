import { FC } from 'react';
import TabPage from './View/TabPage';
import Layout from './View/Layout';
import NoMatch from './View/NoMatch';
import Home from './View/Home';
import AccordionPage from './View/AccordionPage';
import { Routes, Route } from "react-router-dom";
import './style.css';
 

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tab" element={<TabPage />} />
          <Route path="accordiaon" element={<AccordionPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> 
    </div>
  );
};
