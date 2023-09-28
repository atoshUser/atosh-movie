import Head from "next/head";
import React from "react";

const Auth = () => {
  return (
    <>
      <Head>
        <title>Form | Registration</title>
        <meta
          name="description"
          content="For using our app you should sing In"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div>
        <h2 className="text-lg text-white">Auth Page</h2>
      </div>
    </>
  );
};

export default Auth;
