import React from 'react';

import TableSection from './containers/TableSection';
import FormSection from './containers/FormSection';
// import Hello from './Hello.jsx';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          <TableSection />
          {/* <Hello /> */}
        </main>
        <aside className="right-sidebar">
          <FormSection />
        </aside>
      </div>
    );
  }
}
