import React from "react";
import {
  MantineProvider,
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
} from "@mantine/core";
import { ReceiptOff, Flame, CircleDotted, FileCode } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ReceiptOff,
    title: "LinkedIn profile",
    description:
      "You can view in brief my projects in this profile, to have an overview of my work.",
  },
  {
    icon: FileCode,
    title: "My CV(TODO)",
    description:
      "My experience in detail, and my skills in detail, in a single document.",
  },
  {
    icon: CircleDotted,
    title: "Languages",
    description: "I speak English, French.",
  },
  {
    icon: Flame,
    title: "Hobbies",
    description: "TODO",
  },
];

function App() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Project to present my experiences
            </Title>
            <Text color="dimmed">
              Check options in right side to see my profiles throw the net
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "blue", to: "cyan" }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </MantineProvider>
  );
}

export default App;
