import React from "react";

function Banner({ className, children }) {
  return <div className={`${className} banner`}>{children}</div>;
}

export function HappyBanner({ guesses }) {
  return (
    <Banner className={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    </Banner>
  );
}
export function SadBanner({ answer }) {
  return (
    <Banner className={"sad"}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default Banner;
