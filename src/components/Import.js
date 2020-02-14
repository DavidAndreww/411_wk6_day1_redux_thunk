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
console.log(JSON.stringify(props.makes))
  return (
    <div className="table-container">
    <Button onClick={props.fetchMakes} color="primary" variant="contained">
        Import
      </Button>
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
              <TableCell>Actions Here</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  );
};

export default Import;
