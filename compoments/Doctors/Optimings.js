import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";


const Optimings = (props) => {
  return (
    <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            {props.timing.map((row, index) => (
              <TableCell key={index} sx={{ fontWeight: "bold", backgroundColor: "primary.main", color: "white", textAlign: "center", padding: "10px",
                border: "1px solid #000" }}>
                {row.day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {props.timing.map((row, index) => (
              <TableCell key={index} sx={{ textAlign: "center",padding: "10px",
                border: "1px solid #000" }}>{row.timing}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    
    </TableContainer>
  );
};

export default Optimings;