import { HStack, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export function Header({ title, children }: Props) {
  return (
    <HStack>
      <Heading as="h1">{title}</Heading>
      {children}
    </HStack>
  );
}
