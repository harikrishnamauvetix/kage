import React, { useState,useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

const KimsAchievementsTable = ({ section }) => {
  console.log(section); // Debugging: Check if section is passed correctly

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="achievements table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">Year</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Details</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {section?.map((row) => (
            <TableRow key={row.year}>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell>
                <ul>
                  {row.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KimsAchievementsTable;
