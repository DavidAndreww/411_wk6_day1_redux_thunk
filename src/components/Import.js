import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

function createData(id, make, actions) {
  return { id, make, actions };
}

const rows = [createData("1", "honda", "add")];

const Import = props => {
  // fill out this component

  return (
    <div className="table-container">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.make}</TableCell>
              <TableCell>{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button color="primary" variant="contained">
        Import
      </Button>
    </div>
  );
};

export default Import;
