import { useState, useEffect } from "react";
import AddAsset from "./AddAssets";
import AddUser from "./AddUser";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from "axios";
import { TableContainer } from "@mui/material";

function AssetTable() {
  const [users, setUsers] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:8000/user").then((res) => setUsers(res.data));
    axios.get("http://localhost:8000/asset").then((res) => setAssets(res.data));
  };

  const handleUserAdded = (user) => {
    setUsers([...users, user]);
  };

  const handleAssetAdded = (asset) => {
    setAssets([...assets, asset]);
  };

  return (
    <div
      style={{
        height: "calc(100vh - 16px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TableContainer
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Make
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Model
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Grade
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                IMEI
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Number
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Issue Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                User
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset._id}>
                <TableCell align="center">{asset.type}</TableCell>
                <TableCell align="center">{asset.name}</TableCell>
                <TableCell align="center">{asset.make}</TableCell>
                <TableCell align="center">{asset.model}</TableCell>
                <TableCell align="center">{asset.grade}</TableCell>
                <TableCell align="center">{asset.imei}</TableCell>
                <TableCell align="center">{asset.number}</TableCell>
                <TableCell align="center">{asset.issueDate}</TableCell>
                <TableCell align="center">{asset.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <AddUser onUserAdded={handleUserAdded} /> */}
      <AddAsset onAssetAdded={handleAssetAdded} />
    </div>
  );
}

export default AssetTable;
