import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useState } from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: 24,
  p: 3,
};

export const PersonalDetailsModel = ({ open, setOpen, price, test_name, test_image}) => {
  const token=window.localStorage.getItem("culttoken");
  const [save, setSave] = useState(false);
  const [checked, setChecked] = useState(false);
  const [gValue, setGValue] = useState("");
  const [name, setName] = useState("");
  const [bDate, setBDate] = useState("");
  const [sDate, setSDate] = useState("");
  
  React.useEffect(() => {
    if (checked && gValue && name && bDate) {

      setSave(s=>true);
    }
  }, [checked, gValue, name, bDate]);

  const handleSave=()=>{
    axios({
      method:'POST',
      url:'https://cult-fit-two.vercel.app/addtest',
      data:{
        patient_name:name,
        date_of_birth:bDate,
        schedule_date:sDate,
        gender:gValue,
        price,
        test_name,
        test_image
      },
      headers: {
        authtoken:token,
      },
     }).then((res) => {
        alert(res.data.message);
        window.location.reload(false);
        setOpen(!open);
       
        //localStorage.setItem("cultuser", JSON.stringify(res.data));
      })
      .catch((err) => {
        // console.log(err.response.data)
        alert(err.response.data);

        // dispatch(getloginToDoError());
      });

  }

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
              Personal Details
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
              alignItems: "center",
              alignContent: "center",
              justifyContent: "top",
              padding: "20px",
              gap: "20px",
            }}
          >
            <TextField
              required
              id="standard-required"
              label="Name"
              placeholder="Enter Name"
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              variant="standard"
              sx={{ fontSize: "10px", width: "45%" }}
            />

            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              
              value={bDate}
              onChange={(event) => setBDate(event.target.value)}
            />
              <TextField
              id="schedule date"
              label="Schedule date"
              type="date"
              sx={{ width: "45%" }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              
              value={sDate}
              onChange={(event) => setSDate(event.target.value)}
            />
          </Box>
          <Box variant="div">
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  fontSize: "16px",
                  marginTop: "10px",
                  paddingLeft: "10px",
                }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ paddingLeft: "10px" }}
                value={gValue}
                onChange={(event) => setGValue(event.target.value)}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Typography
              color="text.secondary"
              sx={{ fontSize: "16px", marginTop: "10px", paddingLeft: "10px" }}
            >
              Terms and Conditions
            </Typography>
            <Box variant="div" sx={{ display: "flex", alignItems: "top" }}>
              <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                icon={<RadioButtonUncheckedRoundedIcon />}
                checkedIcon={<CheckCircleOutlineRoundedIcon />}
                sx={{ borderRadius: "40px" }}
              />
              <Typography
                color="text.secondary"
                sx={{ fontSize: "14px", marginTop: "10px" }}
              >
                I am lawfully authorised to add the above information on behalf
                of the owner of profile.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ float: "right", marginTop: "20px" }}>
            <Button
              sx={{ fontWeight: "700", fontSize: "16px", color: "black" }}
              onClick={() => setOpen(!open)}
            >
              CANCEL
            </Button>

            {!save ? (
              <Button
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "black",
                  marginLeft: "15px",
                }}
                disabled
              >
                SAVE
              </Button>
            ) : (
              <Button
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "tomato",
                  marginLeft: "15px",
                }}
                onClick={handleSave}
              >
                SAVE
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
