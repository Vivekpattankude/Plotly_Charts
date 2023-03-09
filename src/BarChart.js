import Plot from "react-plotly.js";
import "./App.css";
import * as React from "react";
import Select  from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Chart = ({ data }) => {
  const [value, setValue] = useState("");
  const [stockdata, setStockdata] = useState(data);
  const [isTrue, setIsTrue] = React.useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFilterDate = () => {
    let _filteredData = stockdata
    if (value == 100) {
      let _filteredData = stockdata.filter((item) => item.price < value);
      console.log(_filteredData, "first")
      setStockdata(_filteredData);
    }
    else if (value == 999) {
      let _filteredData = stockdata.filter((item) => item.price > 100);
      console.log(value, "second")
      setStockdata(_filteredData);
    }
  };

  useEffect(() => {
    handleFilterDate();
  }, [value]);

  console.log(stockdata);

  var plot1 = {
    x: isTrue ? stockdata?.map((dt) => dt.brand) : [],
    y: isTrue ? stockdata?.map((dt) => dt.stock) : [],
    name: "chart",
    type: "bar",
  };
  var data1 = [plot1];

  return (
    <div>
      <div>
        <FormControl
          sx={{ m: 1, minWidth: 200, marginRight: "60%" }}
          size="small"
        >
          <InputLabel id="demo-select-small">Price Based Filter </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={value}
            label="Price Based Filter"
            onChange={handleChange}
          >
            <MenuItem value={100}>0-100</MenuItem>
            <MenuItem value={999}>100-2000 </MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          checked={isTrue}
          onChange={(e) => {
            setIsTrue(e.target.checked);
          }}
          control={<Checkbox defaultChecked />}
          label="Add Data"
        />
      </div>
      <Plot
        data={data1}
        layout={{
          width: 650,
          height: 350,
          title: " data",
        }}
      />
    </div>
  );
};

export default Chart;
