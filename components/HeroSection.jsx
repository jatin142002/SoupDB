"use client";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <Container miw="80vw">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>Database</span> for your
            <br /> new product.
          </Title>
          <Text color="dark" mt="md">
            Revolutionize data management with our cutting-edge database for
            your new product. Streamline information storage, retrieval, and
            analysis for enhanced efficiency and innovation.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>PostgreSQL-compatible</b> – serverless database that brings you
              scale, performance, and reliability — without sacrificing
              developer experience
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Database in any project
            </List.Item>
            <List.Item>
              <b>No annoying distraction</b> – focus only things that matters
            </List.Item>
          </List>

          <Group mt={30}>
            <a href="#bott">
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </a>
            <a href="https://github.com/jatin142002/SoupDB">
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </a>
          </Group>
        </div>
        <Image src="/image.svg" className={classes.image} />
      </div>
    </Container>
  );
}
