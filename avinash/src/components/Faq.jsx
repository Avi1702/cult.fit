import { Box, Collapse, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const Faq = ({ faqs }) => {
  const [flag, setFlag] = useState(false);

  return (
    <Box variant="div" sx={{ textAlign: "left" }}>
      <Collapse in={flag} collapsedSize={"80px"}>
        <Box
          variant="div"
          onClick={() => setFlag(!flag)}
          sx={{
            display: "flex",
            color: "rgb(209,209,201)",
            justifyContent: "space-between",
            cursor:"pointer"
          }}
        >
          <Box
            variant="div"
            sx={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FiberManualRecordIcon
              sx={{ fontSize: "8px", alignSelf: "center", marginTop: "30px" }}
            />
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "600", marginTop: "30px", alignSelf: "center" }}
            >
              {faqs.question}
            </Typography>
          </Box>

          {flag ? (
            <KeyboardArrowUpIcon
              sx={{ fontSize: "40px", alignSelf: "center", marginTop: "15px" }}
            />
          ) : (
            <KeyboardArrowDownIcon
              sx={{ fontSize: "40px", alignSelf: "center", marginTop: "15px" }}
            />
          )}
        </Box>

        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "600",
            marginTop: "30px",
            color: "rgb(209,209,201)",
            width: "60%",
            marginBottom:"20px",
            marginLeft:"20px"
          }}
        >
          {faqs.description}
        </Typography>
      </Collapse>
      <Divider sx={{borderColor:"rgb(209,209,201)"}} />
    </Box>
  );
};
