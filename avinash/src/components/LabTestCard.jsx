import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const LabTestCard = ({ labTest }) => {
  const handleClick=()=>{
    localStorage.setItem("labTest",JSON.stringify(labTest));
  }
  return (
    <Link to={`/care/diagnostic-tests/${(labTest.title).split(" ").join("-")}`} style={{textDecoration:"none"}}>
      <Card
        onClick={handleClick}
        sx={{
          maxWidth: 260,
          cursor: "pointer",
          transition: "transform .3s",
          boxShadow: "none",
          border: "none",
          "&:hover": {
          transform: "scale(0.97)",
          boxShadow: "0 3px 6px #d3d3d3",
          
          },
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image={labTest.image}
          alt={labTest.title}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "15px",
            }}
          >
            <Typography variant="div">Price</Typography>
            <Typography
              variant="div"
              sx={{ fontWeight: "500", textDecoration: "line-through" }}
            >
              {"\u20B9"} {labTest.price}
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "15px",
            }}
          >
            <Typography variant="div">Offer-Price</Typography>
            <Typography
              variant="div"
              sx={{ fontWeight: "600", color: "rgb(71,71,71)" }}
            >
              {"\u20B9"} {labTest.offerPrice}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );

// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getTest } from "../redux/LabTest/action";

// export const LabTestCard = ({ labTest }) => {
//   const handleClick=()=>{
//     localStorage.setItem("labTest",JSON.stringify(labTest));
//   }
//   //   console.log(labTest)
//   return (
//     <Link to={`/care/diagnostic-tests/${(labTest.title).split(" ").join("-")}`} style={{textDecoration:"none"}}>
//       <Card
//         onClick={handleClick}
//         sx={{
//           maxWidth: 260,
//           cursor: "pointer",
//           transition: "transform .3s",
//           boxShadow: "none",
//           border: "none",
//           "&:hover": {
//             transform: "scale(0.97)",
//             boxShadow: "0 3px 6px #d3d3d3",
//           },
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="280"
//           image={labTest.image}
//           alt={labTest.title}
//           sx={{ objectFit: "fill" }}
//         />
//         <CardContent>
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: "15px",
//             }}
//           >
//             <Typography variant="div">Price</Typography>
//             <Typography
//               variant="div"
//               sx={{ fontWeight: "500", textDecoration: "line-through" }}
//             >
//               {"\u20B9"} {labTest.price}
//             </Typography>
//           </Typography>
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: "15px",
//             }}
//           >
//             <Typography variant="div">Offer-Price</Typography>
//             <Typography
//               variant="div"
//               sx={{ fontWeight: "600", color: "rgb(71,71,71)" }}
//             >
//               {"\u20B9"} {labTest.offerPrice}
//             </Typography>
//           </Typography>
//         </Typography>
//       </CardContent>
//     </Card>
//         </CardContent>
//       </Card>
//     </Link>
//   );
};
