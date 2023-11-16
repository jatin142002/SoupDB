"use client";
import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
} from "@tabler/icons-react";
import { auth } from "@/utils/firebase";
// import { UserButton } from "../UserButton/UserButton";
import classes from "../styles/Sidebar.module.css";

const links = [
  { icon: IconBulb, label: "Databases", notifications: 1 },
  { icon: IconCheckbox, label: "Clusters" },
  { icon: IconUser, label: "Logout" },
];

const collections = [
  { emoji: "👍", label: "Sales" },
  { emoji: "🚚", label: "Deliveries" },
  { emoji: "💸", label: "Discounts" },
  { emoji: "💰", label: "Profits" },
  { emoji: "✨", label: "Reports" },
  { emoji: "🛒", label: "Orders" },
  { emoji: "📅", label: "Events" },
  { emoji: "🙈", label: "Debts" },
  { emoji: "💁‍♀️", label: "Customers" },
];

export default function Sidebar() {
  const signout = (hoo) => {
    if (hoo === "Logout") {
      auth.signOut();
      window.location.reload();
    }
  };
  const mainLinks = links.map((link) => (
    <UnstyledButton
      key={link.label}
      onClick={() => signout(link.label)}
      className={classes.mainLink}
    >
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>{/* <UserButton /> */}</div>
      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>
    </nav>
  );
}
