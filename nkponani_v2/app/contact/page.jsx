"use client";

import { useState } from "react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function Contact() {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const type = 'Send'
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      email,
      subject,
      message,
    };
    setIsPending(true);

    fetch("/api/support", { 
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => {
          if (response.status !== 201) {
            throw new Error(response.statusText);
          }
          return response.json();
        }).then((response) => {
          setEmail("");
          setSubject("");
          setMessage("");
          console.log(response);
          setSuccess("Message sent");
          setError(false);
          setIsPending(false);
        }).catch((err) => {
          setEmail("");
          setSubject("");
          setMessage("");
          console.log(err);
          setSuccess(false);
          setError("Message not sent. Please try again later.");
          setIsPending(false)
          
        })
  };

  return (
    
   
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-0">
        <div
          className="hidden md:block md:text-left justify-center"
          style={{
            backgroundImage: "url('/contact.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
          }}
        >
        
        <div className="relative mt-5 pl-5">
          <Link href="/">
            <Image
              src="/nkpo-dark.png"
              alt="logo"
              width={150}
              height={100}
              objectFit="contain"
              
            />
            </Link>

        </div>
        
        </div>

        <div
          className="flex-col text-left justify-center md:hidden"
          style={{
            backgroundImage: "url('/contact.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "240px"
            
          }}
        >
        
        <div className="relative mt-5 pl-5">
          <Link href="/">
            <Image
              src="/nkpo-dark.png"
              alt="logo"
              width={150}
              height={100}
              objectFit="contain"
              
            />
            </Link>

        </div>
        
        </div>
        
        <div className="flex-col w-full px-10 sm:px-20  space-y-8 bg-white dark:bg-dark text-dark dark:text-light pb-20">
          <Link href='/'>
          <span className="flex font-semibold text-dark dark:text-light cursor-pointer py-5 md:py-10"><ChevronLeftIcon className="h-6" />{' '} back</span>
          </Link>
          <div className="pb-5">
            <h2 className="mt-6 text-lg lg:text-xl font-semibold tracking-wide">
            Please leave a message. Thank you
            </h2>
            <p className="mt-2 text-[12px] lg:text-sm font-medium">
            We will respond to you within 24 hours!
            </p>
          </div>

          <hr className="border" />

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-8"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              
              <div className="mb-3">
                <h1 className="text-sm pb-3">Email address*</h1>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="email"
                  required
                  className="relative block w-full text-sm appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 "
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-3">
                <h1 className="text-sm pb-3">Subject*</h1>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  autoComplete="subject"
                  required
                  className="relative block w-full text-sm appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  placeholder="Enter email subject"
                />
              </div>

              <div>
                <h1 className="text-sm pb-3 mt-3">Message*</h1>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  rows={5}
                  required
                  className="relative block w-full text-sm appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  placeholder="Enter your message"
                  defaultValue={""}
                />
              </div>
            </div>

            <div>
              
              
              <button
                type="submit"
                disabled={isPending}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isPending ? `${type}ing...` : type}
              </button>
            
            </div>
          </form>
        </div>
      
        <div
          style={{ display: visible ? "block" : "none" }}
          className="fixed inset-x-0 bottom-10 ml-10 mr-10 sm:mr-[300px] md:mr-[500px] lg:mr-[700px] xl:mr-[900px]"
        >
          {success && (
            <div className="flex flex-wrap bg-gray-800 shadow-lg w-50 px-3 py-2 tracking-wide text-md text-white justify-between rounded-md">
              <div className="flex w-0 flex-1 p-2">{success}</div>{" "}
              <div className="order-2 flex-shrink-0 sm:order-3 bg-gray-800">
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="-mr-1 p-2 bg-gray-800 hover:bg-gray-600 rounded-full focus:outline-none sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white hover:scale-95"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          )}
          {error && (
            <div className="flex flex-wrap bg-red-600 w-50 px-3 py-2 tracking-wide shadow-lg text-md text-white justify-between rounded-md">
              <div className="flex w-0 flex-1 p-2">{error}</div>{" "}
              <div className="order-2 flex-shrink-0 sm:order-3 bg-red-600">
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="-mr-1 p-2 bg-red-600 hover:bg-red-500 rounded-full focus:outline-none sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white hover:scale-95"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    
  );
}

export default Contact;
