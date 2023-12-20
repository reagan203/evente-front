import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Checkbox,
  Stack,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  Flex,
} from '@chakra-ui/react';

import { BASE_URL } from '../utils';

// EventRegistrationForm component
 export const Registration = () => {
  // State to manage form data
  const initialData = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    selectedEvent: '',
    numberoftickets: 0,
    additionalinfo: '',
    gender: '',
  };
  const [formData, setFormData] = useState(initialData);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle number of tickets change
  const handleNumberOfTicketsChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      numberoftickets: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? 'Male' : 'Female',
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch(`${BASE_URL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data

      // Handle the response data as needed
    } catch (error) {
      console.error(error);
      // Handle fetch errors or other issues
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        {/* First Name field */}
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstname"
            required
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </FormControl>

        {/* Last Name field */}
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </FormControl>

        {/* Email field */}
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </FormControl>

        {/* Phone Number field */}
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            name="phonenumber"
            required
            value={formData.phonenumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </FormControl>

        {/* Event field */}
        <FormControl isRequired>
          <FormLabel>Event</FormLabel>
          <Input
            type="text"
            name="selectedEvent"
            required
            value={formData.selectedEvent}
            onChange={handleChange}
            placeholder="Enter the event name"
          />
        </FormControl>

        {/* Number of Tickets field */}
        <FormControl isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <NumberInput
            value={formData.numberoftickets}
            required
            onChange={handleNumberOfTicketsChange}
            min={0}
          >
            <NumberInputField placeholder="Enter the number of tickets" />
          </NumberInput>
        </FormControl>

        {/* Additional Information field */}
        <FormControl>
          <FormLabel>Additional Information</FormLabel>
          <Textarea
            name="additionalinfo"
            value={formData.additionalinfo}
            onChange={handleChange}
            placeholder="Enter any additional information"
            size="sm"
          />
        </FormControl>

        {/* Gender checkbox */}
        <Flex direction="row" alignItems="center" mt={2}>
          <FormLabel>Gender</FormLabel>
          <Checkbox
            colorScheme="teal"
            defaultChecked={formData.gender === 'Male'}
            onChange={handleCheckboxChange}
            name="gender"
          >
            Male
          </Checkbox>
          <Checkbox
            colorScheme="teal"
            defaultChecked={formData.gender === 'Female'}
            onChange={handleCheckboxChange}
            name="gender"
          >
            Female
          </Checkbox>
        </Flex>

        {/* Submit button */}
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Registration;
