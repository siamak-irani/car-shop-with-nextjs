"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import Link from "next/link";
import CustomAccordion from "./CustomAccordion";
import { IconButton, Typography } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

type MainDrawerProps = {
  className?: string;
  links: NavLink[];
};

export default function MainDrawer({ className, links }: MainDrawerProps) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List sx={{ fontSize: 1, color: "blue", padding: "0" }}>
        {links.map((link, index) => (
          <ListItem key={link.text} disablePadding>
            {"children" in link ? (
              <CustomAccordion
                text={link.text}
                childrenLinks={link.children!}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              />
            ) : (
              <ListItemButton
                disableRipple
                component={Link}
                href={`/${link.url}`}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{ justifyContent: "center" }}
              >
                <Typography>
                  <ListItemText
                    disableTypography
                    primary={link.text}
                    sx={{ fontSize: 14, color: "black", textAlign: "center" }}
                  />
                </Typography>
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={className}>
      <React.Fragment>
        <Button
          disableRipple
          onClick={toggleDrawer(true)}
          sx={{
            justifySelf: "end",
          }}
        >
          {<MenuIcon sx={{ fill: "green" }} />}
        </Button>
        <SwipeableDrawer
          anchor={"top"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <IconButton
            disableRipple
            onClick={toggleDrawer(false)}
            sx={{
              alignSelf: "end",
              margin: "5px",
            }}
          >
            <Close />
          </IconButton>
          {list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
