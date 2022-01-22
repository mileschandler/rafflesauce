import React from "react";
import Moralis from "moralis";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// Home page content of the entire site
export const Home = () => {
  const [collectionID, setCollectionID] = React.useState("");
  const [walletConnected, setWalletConnected] = React.useState();
  let navigate = useNavigate();
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    navigate(`/contract/${collectionID}`);
  };

  const login = async () => {
    let user = Moralis.User.current();
    if (!user) {
      //@ts-ignore
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user: { get: (arg0: string) => any }) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error: any) {
          console.log(error);
        });
    }
    if (user) setWalletConnected(user.get("ethAddress"));
  };

  return (
    <>
      <h1>🧇Welcome to RaffleWaffle🧇</h1>
      <button onClick={login}>
        {walletConnected ? "Wallet Connected ✔️" : "Connect Wallet"}
      </button>
      <h2>{walletConnected}</h2>
      <h2>Enter a Contract ID</h2>
      {walletConnected && (
        <>
          <div className="container">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="finder">
                <div className="finder__outer">
                  <div className="finder__inner">
                    <div className="finder__icon"></div>
                    <input
                      className="finder__input"
                      type="text"
                      size={42}
                      name="contractID"
                      value={collectionID}
                      onChange={(e) => setCollectionID(e.target.value)}
                    />
                    <input type="submit" style={{ display: "none" }} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      <iframe
        src="https://my.spline.design/waffle-17df1585cb157156a6a691697e801d98/"
        title="waffle"
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </>
  );
};

export default Home;
