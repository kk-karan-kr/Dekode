import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const COOKIE_NAME = "dekode_cookie_preference";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const getCookieValue = (name) => {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie
    ? decodeURIComponent(cookie.split("=").slice(1).join("="))
    : null;
};

const setCookieValue = (name, value, maxAge) => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existingPreference = getCookieValue(COOKIE_NAME);
    setIsVisible(!existingPreference);
  }, []);

  const handlePreference = (value) => {
    setCookieValue(COOKIE_NAME, value, ONE_YEAR_IN_SECONDS);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preference"
    >
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          We use cookies to give you the best possible experience on our
          website. See our{" "}
          <Link to="/privacy" className="cookie-banner__link">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--ghost"
            onClick={() => handlePreference("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={() => handlePreference("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
