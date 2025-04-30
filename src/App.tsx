import React, { useState } from "react";
import success from "./assets/images/icon-success-check.svg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setmessageError] = useState("");
  const [queryType, setQueryType] = useState("");
  const [queryError, setQueryError] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  // Handle input change for first name
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (nameError) {
      setNameError(""); // Clear error when user starts typing
    }
  };

  // Handle input change for last name
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameValue(e.target.value);
    if (lastNameError) {
      setLastNameError(""); // Clear error when user starts typing
    }
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    if (emailError) {
      setEmailError(""); // Clear error when user starts typing
    }
  };

  // Handle message input change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (messageError) {
      setmessageError("");
    }
  };

  //Handle Query input change
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryType(e.target.value);
    if (queryError) {
      setQueryError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue("");
    setLastNameValue("");
    setEmailValue("");
    setMessage("");
    setQueryType("");
    setConsent(false);

    let hasError = false;

    // First Name Validation
    if (inputValue.trim() === "") {
      setNameError("This field is required");
      hasError = true;
    } else {
      setNameError(""); // Clear error if input is valid
    }

    // Last Name Validation
    if (lastNameValue.trim() === "") {
      setLastNameError("This field is required");
      hasError = true;
    } else {
      setLastNameError(""); // Clear error if input is valid
    }

    // Email Validation
    if (emailValue.trim() === "") {
      setEmailError("This field is required");
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError(""); // Clear error if email format is correct
    }

    if (!hasError) {
      console.log("Form submitted successfully");
    }

    //Message Validation
    if (message.trim() === "") {
      setmessageError("This field is required");
      hasError = true;
    } else {
      setmessageError("");
    }

    //Query Validator
    if (queryType === "") {
      setQueryError("Please select a query type");
      hasError = true;
    } else {
      setQueryError("");
    }

    if (!consent) {
      setConsentError("To submit this form, please consent to being contacted");
      hasError = true;
    } else {
      setConsentError("");
    }

    if (!hasError) {
      setSuccessMessage(true);
    } else {
      setSuccessMessage(false);
    }
  };

  return (
    <>
      <div className="bg-l_green w-full py-[100px] flex flex-col items-center justify-center">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          {successMessage && (
            <div
              className={` flex flex-col bg-[#2A4244] sm:w-[470px] text-white p-6 rounded-xl shadow-md gap-4`}
            >
              <div className="flex items-center gap-3">
                <img src={success} alt="success" />
                <h3 className="text-lg">Message Sent!</h3>
              </div>
              <p className="text-[#bdbdbd]">
                Thanks for completing the form. We'll be in touch soon
              </p>
            </div>
          )}
          <div className="flex flex-col bg-white p-8 rounded-xl shadow-md gap-4">
            <h1 className="text-d_gray font-[700] text-3xl">Contact Us</h1>

            {/* First Name */}
            <div className="flex-col  flex gap-3 sm:flex-row">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-d_gray font-[400] mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className={`border rounded-md p-2 max-w-[250px] sm:min-w-[300px] cursor-pointer focus:border-d_green outline-none ${
                    nameError ? "border-red" : "border-l_gray"
                  }`}
                />
                {nameError && <p className="text-red mt-1">{nameError}</p>}
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-d_gray font-[400] mb-1"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  value={lastNameValue}
                  onChange={handleLastNameChange}
                  className={`border rounded-md p-2 max-w-[250px] sm:min-w-[300px] cursor-pointer focus:border-d_green outline-none ${
                    lastNameError ? "border-red" : "border-l_gray"
                  }`}
                />
                {lastNameError && (
                  <p className="text-red mt-1">{lastNameError}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-d_gray font-[400] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                className={`border rounded-md p-2 max-w-[250px] focus:border-d_green cursor-pointer sm:min-w-[100%] outline-none ${
                  emailError ? "border-red" : "border-l_gray"
                }`}
              />
              {emailError && <p className="text-red mt-1">{emailError}</p>}
            </div>

            {/* Query Type */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-d_gray font-[400] mb-2">
                Query Type *
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div
                  className={`flex items-center hover:border-d_green cursor-pointer  bg-white p-3 max-w-[250px] sm:min-w-[300px] rounded-md border border-l_gray ${
                    queryType === "general" ? "bg-[#E0F1E7]" : "bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    value="general"
                    checked={queryType === "general"}
                    onChange={handleQueryChange}
                    className=" accent-green-600 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="general-enquiry"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    General Enquiry
                  </label>
                </div>
                <div>
                  <div
                    className={`flex items-center hover:border-d_green bg-white p-3 max-w-[250px] sm:min-w-[300px] ${
                      queryType === "support" ? "bg-[#E0F1E7]" : "bg-white"
                    } cursor-pointer rounded-md border border-l_gray`}
                  >
                    <input
                      id="support-request"
                      name="query-type"
                      type="radio"
                      value="support"
                      checked={queryType === "support"}
                      onChange={handleQueryChange}
                      className=" accent-green-600 cursor-pointer"
                    />
                    <label
                      htmlFor="support-request"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Support Request
                    </label>
                  </div>
                </div>
              </div>
              {queryError && <p className="text-red mt-1">{queryError}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-d_gray font-[400] mb-1">
                Message *
              </label>
              <textarea
                className={`border rounded-md p-2 max-w-[250px] h-[180px] sm:h-[100px] sm:min-w-[100%]  hover:border-d_green cursor-pointer outline-none ${
                  messageError ? "border-red" : "border-l_gray"
                }`}
                value={message}
                onChange={handleMessageChange}
                rows={3}
              ></textarea>
              {messageError && <p className="text-red mt-1">{messageError}</p>}
            </div>

            {/* Consent */}
            <div>
              <div className="flex items-center gap-3 max-w-[250px] sm:min-w-[100%]">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-green-700"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (consentError) setConsentError("");
                  }}
                />{" "}
                <p className="cursor-pointer ">
                  I consent to being contacted by the team *
                </p>
              </div>
              {consentError && (
                <p className="text-red mt-1 max-w-[250px] sm:min-w-[100%]">
                  {consentError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-d_green p-2.5 max-w-[250px] hover:bg-[#063F36] sm:min-w-[100%] rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
