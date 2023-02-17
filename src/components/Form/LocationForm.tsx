import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

import InputField from "components/Form/InputField";

import { LocationContext } from "~/context/location-context";

import "./LocationForm.scss";

// Location form component for submitting users input
const LocationForm = () => {
  // Creating input state and retrieving the context hook
  const [locationInput, setLocationInput] = useState("");
  const locCtx = useContext(LocationContext);

  // On every key stroke, set the locationInput
  const inputChangeHandler = (event: string) => {
    setLocationInput(event);
  };

  // On submit, prevent a reload and call the updateLocationData function
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    locCtx.updateLocationData("", "", false, locationInput);
  };

  // Return the location form with the input field and button inside
  return (
    <div className="locationForm-wrapper">
      <form
        className="locationForm"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <InputField
          onChange={inputChangeHandler}
          name="location"
          placeholder="Enter a city"
          value={locationInput}
        />
        <button className="input-button" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
