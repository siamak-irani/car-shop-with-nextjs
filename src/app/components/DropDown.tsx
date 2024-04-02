// "use client";

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Menu, { MenuProps } from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const StyledMenu = styled((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === "light"
//         ? "rgb(55, 65, 81)"
//         : theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));

// export default function DropDown() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const items = ["a", "b", "c", "d", "e"];

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="text"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<ArrowDropDownIcon sx={{ color: "green" }} />}
//         sx={{
//           color: open ? "green" : "black",
//           fontSize: "10px",
//           fontWeight: "bold",
//         }}
//       >
//         Options
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={!open}
//         onClose={handleClose}
//       >
//         {items.map((i) => (
//           <MenuItem
//             sx={{ fontSize: "12px", height:"0px", borderRadius:"0" }}
//             onClick={handleClose}
//             disableRipple
//           >
//             {i}
//           </MenuItem>
//         ))}
//       </StyledMenu>
//     </div>
//   );
// }

import React from "react";

const DropDown = () => {
  return (
    <div>
      <button>about</button>
      <div className="relative">
        <ul className="absolute top-0">
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
