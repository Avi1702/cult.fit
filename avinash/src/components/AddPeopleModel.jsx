import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar, Typography } from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { PersonalDetailsModel } from "./PersonalDetailsModel";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "180px",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: 24,
  p: 3,
};

export const AddPeopleModel = ({ open, setOpen }) => {
  const colorArray = [
    "DodgerBlue",
    "Tomato",
    "orange",
    "MediumSeaGreen",
    "Gray",
  ];
  const [openPerModel, setOpenPerModel] = React.useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8058/personalDetails",
    })
      .then((res) => setPeople(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "rgb(51,51,51)",
            }}
          >
            <Typography variant="h6" component="h1" sx={{ fontWeight: "700" }}>
              Who is this for ?
            </Typography>
            <ClearRoundedIcon
              onClick={() => setOpen(!open)}
              sx={{ cursor: "pointer" }}
            />
          </Box>

          <Box
            variant="div"
            sx={{
              display: "flex",
              alignItems: "top",
              alignContent: "center",
              justifyContent: "top",
              padding: "20px",
              marginTop:"15px",
              gap: "20px",
            }}
          >
            <Box
              variant="div"
              sx={{ textAlign: "center", marginTop: "0px", cursor: "pointer" }}
              onClick={() => setOpenPerModel(!openPerModel)}
            >
              <ControlPointRoundedIcon
                sx={{ color: "rgb(51,51,51)", fontSize: "60px" }}
              />
              <Typography
                variant="h7"
                component="h3"
                sx={{ fontWeight: "700", color: "rgb(251,58,89)" }}
              >
                ADD
              </Typography>
            </Box>

            {people.length != 0 ? (
              people.map((ele) => (
                <Box
                  variant="div"
                  sx={{
                    textAlign: "center",
                    width: "60px",
                    cursor: "pointer",
                  }}
                  key={ele.name}
                >
                  <Avatar
                    sx={{
                      bgcolor: "Tomato",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50px",
                      height: "50px",
                      marginBottom: "-10px",
                    }}
                  >
                  {ele.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <br />
                  <Typography variant="h7" sx={{ fontWeight: "400" }}>
                    {ele.name}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
      </Modal>

      <PersonalDetailsModel open={openPerModel} setOpen={setOpenPerModel} />
    </div>
  );
};
