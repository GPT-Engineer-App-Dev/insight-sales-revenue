import React from "react";
import { Box, Heading, Text, Flex, Image, VStack, Grid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" px={8} py={4} bg="gray.100">
        <Heading as="h1" size="xl">
          Company Name
        </Heading>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3MTMwNTYzMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company Logo" boxSize="50px" />
      </Flex>

      {/* Main Content */}
      <Grid templateColumns="repeat(2, 1fr)" gap={8} p={8} maxW="1200px" mx="auto">
        {/* Sales Metrics */}
        <GridItem bg="blue.50" p={6} rounded="md">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Sales Metrics
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit eu blandit bibendum, velit velit congue sapien, vel congue sapien velit id velit.</Text>
          </VStack>
        </GridItem>

        {/* Revenue Metrics */}
        <GridItem bg="green.50" p={6} rounded="md">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Revenue Metrics
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit eu blandit bibendum, velit velit congue sapien, vel congue sapien velit id velit.</Text>
          </VStack>
        </GridItem>

        {/* Other Key Metrics */}
        <GridItem bg="orange.50" p={6} rounded="md">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Other Key Metrics
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit eu blandit bibendum, velit velit congue sapien, vel congue sapien velit id velit.</Text>
          </VStack>
        </GridItem>

        {/* Summary and Highlights */}
        <GridItem bg="purple.50" p={6} rounded="md">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Summary and Highlights
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit eu blandit bibendum, velit velit congue sapien, vel congue sapien velit id velit.</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
