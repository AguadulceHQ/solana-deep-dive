import { Grid, Heading, Text } from "@chakra-ui/react";

interface HeadingProps {
  title: string;
  description: string;
}

const Headline = (props: HeadingProps) => {
  const { title, description } = props;
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        {title}
      </Heading>

      <Text fontSize="xs" color="gray.500">
        {description}
      </Text>
    </Grid>
  );
};

export default Headline;
