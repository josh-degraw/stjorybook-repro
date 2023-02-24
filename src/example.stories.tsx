import * as React from "react";
import { StoryObj, Meta } from "@storybook/react";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import { List } from "./CustomList";

const meta = {
  title: "Material-UI/List",
  component: List,
  parameters: { layout: "centered" },
  subcomponents: {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
  },
} satisfies Meta<typeof List>;

export default meta;

const listItems = ["Chris Cornell", "Kim Thayil", "Hiro Yamamoto"];
type Story = StoryObj<typeof meta>;

export const PeopleWithActions = {
  render(args) {
    return (
      <Paper style={{ width: "360px" }}>
        <List {...args}>
          {listItems.map((name, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={name} />
              <ListItemSecondaryAction>
                <Button>Call</Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  },
} satisfies Story;
