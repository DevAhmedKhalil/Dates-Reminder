import { Container } from "react-bootstrap";
import React, { useEffect } from "react";

import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesActions from "./components/DatesActions";

function App() {
  const [personData, setPersonData] = React.useState(person);

  const onDelete = () => {
    setPersonData([]);
  };

  const onViewData = () => {
    setPersonData(person);
  };

  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesActions onDelete={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
