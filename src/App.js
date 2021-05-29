import React, { useState } from "react";
import "./App.css";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import Data from "./data.json";
import Uischema from "./uischema.json";
import schema from "./schema.json";
import { Button } from "@material-ui/core";

function App() {
  // const schema = person.schema;
  // const uischema = person.uischema;
  // const initialData = person.data;

  const [data, setData] = useState();

  const  handlebtn = ()=>{
    console.log(data);
  }

  return (
    <div>
      <JsonForms
        schema={schema}
        uischema={Uischema}
        data={Data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
      />
      <Button onClick={handlebtn} variant="contained" color="primary">
        submit
      </Button>
    </div>
  );
}

export default App;
