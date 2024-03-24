import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

type CustomAccordionProps = {
  text: string;
  childrenLinks: NavLink[];
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
  onKeyDown: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const CustomAccordion = (props: CustomAccordionProps) => {
  return (
    <>
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          width: "100%",
          background: "transparent",
          borderRadius: "0",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ArrowDropDownIcon
              sx={{
                fill: "green",
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            justifyContent: "center",
            "& .MuiAccordionSummary-content": {
              fontSize: "12px",
              flexGrow: "0",
              gridColumn: "2",
              "& .MuiListItemText-root": {
                fontSize: "12px",
              },
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              width: "fit-content",
            },
          }}
        >
          <Typography>
            <ListItemText
              disableTypography
              primary={props.text}
              sx={{
                fontSize: "14px !important",
                color: "black",
                textAlign: "center",
              }}
            />
          </Typography>
        </AccordionSummary>
        {props.childrenLinks.map((i) => {
          return (
            <AccordionDetails
              onClick={props.onClick}
              onKeyDown={props.onKeyDown}
            >
              <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                <Link href={i.url}>{i.text}</Link>
              </Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </>
  );
};

export default CustomAccordion;
