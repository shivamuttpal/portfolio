import React, { useState } from "react";
import { TextInput, Button, Group, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Socialicons from "../common/Socialicons";
import Lottie from "lottie-react";
import loadingCircleAnimation from "../lottieFiles/loadingCircleAnim.json";
import submitAnimation from "../lottieFiles/submitAnim.json";
import { Helmet } from "react-helmet";
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";


const env = import.meta.env;
// const dotenv = require('dotenv');

function Contact() {
  const [isLoading, setLoading] = useState(true);
  const [formLoad, setfromLoad] = useState(false);
  const [showSubmitAnimation, setShowSubmitAnimation] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 3 ? "Please enter a valid name" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter valid email",
      mobile: (value) =>
        value.length < 10 ? "Please enter valid number" : null,
    },
  });

  //db collection
  const userCollectionRef = collection(db, "contacted-user");

  //  Send email using EmailJS in the browser
  // Inside your handleEmailjs function

const handleEmailjs = async (values) => {
  try {
    const emailParams = {
      from_name: values.name,
      from_email: values.email,
      from_mobile: values.mobile,
      message: values.message,
    };

    // console.log(env.VITE_emailjs_publicKey);

    await emailjs.send(
      env.VITE_emailjs_serviceId,
      env.VITE_emailjs_template_Id,
      emailParams,
      env.VITE_emailjs_publicKey
    );
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    // Handle the error, you can show an error message to the user or log it
  }
};


const handleSubmit = async (values) => {
  try {
    setfromLoad(true);

    // Save data to Firestore
    // await addDoc(userCollectionRef, values);
    
    // Send email using EmailJS
    await handleEmailjs(values);
    console.log(values);

    // Reset form and show/hide animation
    form.reset();
    setShowSubmitAnimation(true);
    setTimeout(() => {
      setShowSubmitAnimation(false);
    }, 3000);
    setfromLoad(false);
    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle the error, you can show an error message to the user or log it
  }
};


  return (
    <>
      <div className="lg:h-[calc(100vh-7rem)] h-full   bg-gradient-to-b from-bgDark to-bgDarkMute  text-content flex items-center  md:pr-8   md:pl-8 w-full ">
        <div className="w-full space-y-2">
          <h1 className="font-medium md:text-6xl text-4xl text-center">
            <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
              Contact
            </span>{" "}
            ME
          </h1>
          <p className="md:text-2xl text-lg text-center">
            Feel free to{" "}
            <span className="text-amber-400 font-carattere tracking-widest font-semibold md:text-3xl text-xl ">
              connect
            </span>{" "}
            with me
          </p>
          <div className="flex flex-col w-full lg:justify-between items-center lg:items-stretch   lg:flex-row  gap-4 p-4">
            <div className=" sm:w-3/4 w-11/12 flex flex-col  justify-center  rounded-lg bg-skillBgHover  contact-info p-4  text-lg space-y-4">
              <h1 className="text-2xl">Let&apos;s talk about everything!</h1>
              <div className="flex gap-2 items-center ">
                Don&apos;t like forms? Send me an{" "}
                <a
                  href="mailto:shivamuttpal@gmail.com"
                  className="text-amber-400 flex items-center gap-1 font-semibold text-2xl font-carattere tracking-widest hover:scale-105"
                >
                  <MdEmail /> email
                </a>
              </div>
              <div className="space-y-2 pt-8">
                <h3 className="text-2xl">Or FIND ME ON:</h3>
                <Socialicons />
              </div>
              <div className="pt-4">
                <div className="flex items-center  gap-1">
                  <MdEmail />
                  shivamuttpal@gmail.com
                </div>
                <div className="flex items-center  gap-1">
                  <IoLocation />
                  Nainital , Uttarakhand , India
                </div>
              </div>
            </div>
            <div className="sm:w-3/4 w-11/12 p-4 lg:p-0 lg:h-auto h-[450px] bg-skillBgHover rounded-lg ">
              {isLoading && (
                <div className=" flex  items-center h-full">
                  <Lottie animationData={loadingCircleAnimation} />
                </div>
              )}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27812.67714718859!2d79.43467114301572!3d29.3824486168389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1707678197824!5m2!1sen!2sin" 
              loading="lazy"
              onLoad={() => setLoading(false)}
              className="h-full w-full rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
          <div className=" sm:w-3/4 relative w-11/12 rounded-lg p-4 bg-skillBgHover   m-auto ">
            <form
              onSubmit={form.onSubmit((values) => handleSubmit(values))}
              className="space-y-4"
            >
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Write Your Full name"
                // styles={{
                //   input: { background: "rgb(209 213 219)" },
                // }}
                {...form.getInputProps("name")}
              />
              <TextInput
                variant="filled"
                withAsterisk
                label="Email"
                placeholder="Write your Email"
                {...form.getInputProps("email")}
              />

              <div>
                <label className="text-sm font-medium">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={"in"} // Set the default country
                  inputProps={{
                    name: "mobile",
                    autoFocus: true,
                    autoComplete: "tel",
                    placeholder: "Enter mobile number",
                  }}
                  className="w-full  text-gray-800 rounded-lg"
                  inputStyle={{ width: "100%" }}
                  value={form.values.mobile}
                  onChange={(value) => form.setFieldValue("mobile", value)}
                />
                {form.errors.mobile && (
                  <div className="text-red-500">{form.errors.mobile}</div>
                )}
              </div>

              <Textarea
                label="Message"
                placeholder="Write message"
                {...form.getInputProps("message")}
              />

              <Button type="submit" fullWidth>
                Submit
              </Button>
            </form>
            {/* {showSubmitAnimation && (
              <div className="absolute top-0 flex items-center w-full justify-center  h-full ">
                <Lottie animationData={submitAnimation} id="submit" />
              </div>
            )}
            {formLoad && (
              <div className="absolute top-0 flex items-center w-full justify-center bg-skillBgHover  h-full ">
                <Lottie animationData={loadingCircleAnimation} id="submit" />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div >
      <Helmet>
        <title>Shivam | Contact</title>
      </Helmet>
    </>
  );
}

export default Contact;
