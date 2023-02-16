import { useState, useContext, useEffect } from "react";

import InputField from "components/Form/InputField";

import { LocationContext } from "~/context/location-context";

import "./LocationForm.scss";

const LocationForm = () => {
  const [locationInput, setLocationInput] = useState("");
  const locCtx = useContext(LocationContext);

  const inputChangeHandler = (event: string) => {
    setLocationInput(event);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    locCtx.updateLocationData("", "", false, locationInput);
  };

  return (
    <div className="locationForm-wrapper">
      <form id="locationForm" onSubmit={submitHandler}>
        <InputField
          onChange={inputChangeHandler}
          name="location"
          placeholder="Enter a city"
          value={locationInput}
        />
      </form>
    </div>
  );
};

export default LocationForm;
