import {
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCity } from "react-icons/fa";
import getWeatherData from "../services/WeatherService";

export default function Search() {
  const [cityName, setCityName] = useState("");

  function handleClick() {
    getWeatherData(cityName);
  }

  function updateCityName(e) {
    setCityName(e.target.value);
  }

  return (
    <Stack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaCity />
        </InputLeftElement>

        <Input
          type="text"
          placeholder="Search City"
          value={cityName}
          onInput={updateCityName}
        />

        <InputRightElement width="4.5rem" mr="1">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}
