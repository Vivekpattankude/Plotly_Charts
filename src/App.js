import Plot from "react-plotly.js";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ScatterChart from "./ScatterChart";
 

import { React, useEffect, useState } from "react";

const App = () => {
  const [empData, setEmpData] = useState();


  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setEmpData(json?.products));
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
   
  return (
    <div>
    <div className="App">
    <Grid item xs={12}>
          <Item>
          <h1>Data Visualization Dashboard</h1>
          </Item>
        </Grid>
    
    </div>
   
    <Box sx={{margin:"1px"}}>
      <Grid container spacing={0.1}>
        <Grid item xs={6}>
          <Item>
            <BarChart data={empData} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <PieChart data={empData} />
          </Item>
        </Grid>
         
      </Grid>
    </Box>
    <Box sx={{margin:"1px"}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item>
            <ScatterChart data={empData} />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default App;
