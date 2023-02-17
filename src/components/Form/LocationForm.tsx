import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

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
