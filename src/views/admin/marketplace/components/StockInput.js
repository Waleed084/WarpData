import React, { useState } from "react";
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    useColorModeValue,
    Center,
} from "@chakra-ui/react";
import Card from "components/card/Card";

export default function StockInputCard() {
    const textColor = useColorModeValue("navy.700", "white");
    const cardBg = useColorModeValue("white", "navy.800");
    const [formData, setFormData] = useState({
        stockName: "",
        baseOrder: "",
        stockPrice: "",
        targetPercentage: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        // Validate and process the form data
        if (
            formData.stockName &&
            !isNaN(formData.baseOrder) &&
            !isNaN(formData.stockPrice) &&
            !isNaN(formData.targetPercentage)
        ) {
            console.log("Form submitted successfully:", formData);
        } else {
            alert("Please fill out all fields correctly!");
        }
    };

    return (
        <Card bg={cardBg} px="30px" py="5px">
            <Text fontSize="xl" fontWeight="600" color={textColor} mb="20px">
                Stock Information
            </Text>
            <Flex direction="column" gap="16px">
                {/* Name of Stock */}
                <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="500" color={textColor}>
                        Name of Stock
                    </FormLabel>
                    <Input
                        name="stockName"
                        placeholder="Enter stock name"
                        value={formData.stockName}
                        onChange={handleInputChange}
                        focusBorderColor="brand.500"
                    />
                </FormControl>

                {/* Base Order */}
                <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="500" color={textColor}>
                        Base Order (in USD)
                    </FormLabel>
                    <Input
                        name="baseOrder"
                        type="number"
                        step="0.01"
                        placeholder="Enter base order amount"
                        value={formData.baseOrder}
                        onChange={handleInputChange}
                        focusBorderColor="brand.500"
                    />
                </FormControl>

                {/* Stock Price */}
                <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="500" color={textColor}>
                        Stock Price at Base Order (in USD)
                    </FormLabel>
                    <Input
                        name="stockPrice"
                        type="number"
                        step="0.01"
                        placeholder="Enter stock price"
                        value={formData.stockPrice}
                        onChange={handleInputChange}
                        focusBorderColor="brand.500"
                    />
                </FormControl>

                {/* Target Percentage */}
                <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="500" color={textColor}>
                        Target Percentage (%)
                    </FormLabel>
                    <Input
                        name="targetPercentage"
                        type="number"
                        step="0.01"
                        placeholder="Enter target percentage"
                        value={formData.targetPercentage}
                        onChange={handleInputChange}
                        focusBorderColor="brand.500"
                    />
                </FormControl>

                <Center mt="8px">
                    <Button
                        width={40}
                        colorScheme="brand"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Center>
            </Flex>
        </Card>
    );
}
