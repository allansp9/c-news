import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { LogoutButton } from "../components/buttons";
import { InterestsContext } from "../contexts/interestsContext";
import { Navbar } from "../components/navbar";
import Spinner from "../components/loading/Spinner";

function UserArea() {
  const { interests, setInterests } = useContext(InterestsContext);
  const [saved, setSaved] = useState(false);

  const { user } = useAuth0();

  function handleSubmit(event) {
    event.preventDefault();

    window.localStorage.setItem(user.email, JSON.stringify(interests));
    setSaved(true);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    var newArray = [...interests];
    var indexItem = newArray.indexOf(name);
    if (indexItem === -1) {
      newArray.push(name);
    } else {
      newArray.splice(indexItem, 1);
    }
    setInterests(newArray);
  };

  return (
    <>
      <Navbar />
      <div className="px-5 flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-lato mt-16 mb-4 uppercase text-center">
            hello, <span className="text-tech">{user.nickname}</span>
          </h1>
          <div className="mb-10 self-center">
            <LogoutButton />
          </div>
          <p className="uppercase text-sm mb-3">my interests</p>
          <div className="flex flex-col items-center">
            <div className="gap-5 flex flex-wrap justify-center mb-10">
              <button
                name="politics"
                className={
                  "interest-base " +
                  (interests.includes("politics")
                    ? "politics-checked"
                    : "politics-unchecked")
                }
                onClick={handleChange}
              >
                politics
              </button>

              <button
                name="business"
                className={
                  "interest-base " +
                  (interests.includes("business")
                    ? "business-checked"
                    : "business-unchecked")
                }
                onClick={handleChange}
              >
                business
              </button>

              <button
                name="tech"
                className={
                  "interest-base " +
                  (interests.includes("tech")
                    ? "tech-checked"
                    : "tech-unchecked")
                }
                onClick={handleChange}
              >
                tech
              </button>

              <button
                name="science"
                className={
                  "interest-base " +
                  (interests.includes("science")
                    ? "science-checked"
                    : "science-unchecked")
                }
                onClick={handleChange}
              >
                science
              </button>

              <button
                name="sports"
                className={
                  "interest-base " +
                  (interests.includes("sports")
                    ? "sports-checked"
                    : "sports-unchecked")
                }
                onClick={handleChange}
              >
                sports
              </button>
            </div>
            {saved && (
              <div className="text-green-800 w-full h-12 pl-5 pt-2.5 rounded bg-green-200 border border-green-500">
                Interests saved successfully!
              </div>
            )}
            <button
              type="submit"
              className="btn-base hover:bg-blue-600 transition duration-200 my-5"
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
          <button className="uppercase self-center text-tech">
            <Link to="/">back to home</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(UserArea, {
  onRedirecting: () => <Spinner />,
});
