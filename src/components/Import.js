import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const Import = props => {
  return (
    <div className="table-container">
    <Button onClick={props.fetchMakes} color="primary" variant="contained">
        Import
      </Button>
    <h2>COUNT: {props.makes.length}</h2>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map(row => (
            <TableRow key={row.MakeId}>
              <TableCell>{row.MakeId}</TableCell>
              <TableCell>{row.MakeName}</TableCell>
              <TableCell><Button onClick={() => props.deleteMakes(row.MakeId)} color="secondary">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default Import;
