import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "../styles/Features.module.css";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Hobby",
    description1: "5 GiB storage",
    description2: "1B transactions/month",
    price: "$5/month",
  },
  {
    icon: IconCookie,
    title: "Professional",
    description1: "50 GiB storage",
    description2: "10B transactions/month",
    price: "$50/month",
  },
  {
    icon: IconLock,
    title: "Enterprise",
    description1: "500 GiB storage",
    description2: "100B transactions/month",
    price: "$500/month",
  },
];

export function Feature({
  icon: Icon,
  title,
  description1,
  description2,
  price,
}) {
  return (
    <Link href="/dashboard">
      <div
        style={{
          border: "1px white solid",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.1)",
          padding: "3vh",
        }}
      >
        <ThemeIcon variant="light" size={40} radius={40}>
          <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ThemeIcon>
        <Text mt="sm" mb={7}>
          {title}
        </Text>
        <Text size="sm" c="dark" lh={1.6}>
          {description1}
        </Text>
        <Text size="sm" c="dark" lh={1.6}>
          {description2}
        </Text>
        <Text size="sm" c="dark" lh={1.6}>
          {price}
        </Text>
      </div>
    </Link>
  );
}

export default function Features() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper} id="bott">
      <Title className={classes.title}>PlanetScale pricing</Title>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
