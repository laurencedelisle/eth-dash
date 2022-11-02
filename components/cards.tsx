import {
  Wrap,
  Text,
  chakra,
  useColorModeValue,
  Center,
  Image,
  VStack,
} from "@chakra-ui/react";
import { IDashboard } from "../constants";
import { DashboardTag } from "./tags";
import Link from "next/link"

export const DashboardCard = ({ name, description, url, tags }: IDashboard) => (
  <Link href={url} target="_blank" >
    <Card bg={useColorModeValue("white", "gray.800")}>
      <VStack>
        <DashboardImage />
        <Title>{name}</Title>
        <TagsContainer>
          {tags?.map((_tag) => (
            <DashboardTag tag={_tag} />
          ))}
        </TagsContainer>
      </VStack>
    </Card>
  </Link>
);

const DashboardImage = chakra(Image, {
  baseStyle: {
    w: "250px",
    h: "120px",
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: "1rem",
    fontWeight: 600

  },
});

const TagsContainer = chakra(Wrap, {
  baseStyle: {
    // ...
  },
});

const Card = chakra(Center, {
  baseStyle: {
    w: "350px",
    h: "250px",
    borderWidth: "1px",
    rounded: "lg",
    shadow: "lg",
    position: "relative",
  },
});