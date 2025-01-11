/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import StockInputCard from "./components/StockInput";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{
          base: "1fr", // Single column for small screens
          md: "1fr 1fr", // Two columns of equal width for medium and larger screens
        }}
        gap="20px"
      >
        {/* Main Card 1 */}
        <Flex flexDirection="column">
          <Card px="0px" mb="20px">
            <StockInputCard
            />
          </Card>
        </Flex>

        {/* Main Card 2 */}
        <Flex flexDirection="column">
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>

            <HistoryItem
              name="Colorful Heaven"
              author="By Mark Benjamin"
              date="30s ago"
              image={Nft5}
              price="0.91 ETH"
            />
            <HistoryItem
              name="Abstract Colors"
              author="By Esthera Jackson"
              date="58s ago"
              image={Nft1}
              price="0.91 ETH"
            />
            <HistoryItem
              name="ETH AI Brain"
              author="By Nick Wilson"
              date="1m ago"
              image={Nft2}
              price="0.91 ETH"
            />

          </Card>
        </Flex>
      </Grid>

      {/* Delete Product */}
    </Box>
  );
}
