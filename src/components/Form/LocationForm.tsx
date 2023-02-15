import { useState, useContext } from "react";

import InputField from "components/Form/InputField";

import { LocationContext } from "~/context/location-context";

const LocationForm = () => {
  const [locationInput, setLocationInput] = useState("");
  const locCtx = useContext(LocationContext);

  const inputChangeHandler = (event: string) => {
    setLocationInput(event);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      locCtx.updateLocationData("", "", false, locationInput);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="locationForm" onSubmit={submitHandler}>
      <InputField
        onChange={inputChangeHandler}
        name="location"
        placeholder="Enter a city"
        value={locationInput}
      />
    </form>
  );
};

export default LocationForm;
