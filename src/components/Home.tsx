import React from "react";
import Moralis from "moralis";
import {
  getTokenMetadata,
  getTokenHoldersList,
  Holder,
} from "../lambda/contract-token-api-helper";
// Home page content of the entire site
interface collection {
  name: string;
  symbol: string;
  decimals: string;
}

export const Home = () => {
  const [collectionID, setCollectionID] = React.useState("");
  const [collection, setCollection] = React.useState<collection>();
  const [loading, setLoading] = React.useState(false);
  const [holders, setHolders] = React.useState<Holder[]>();
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    setLoading(true);
    console.log("submit!", collectionID);
    await getTokenMetadata(collectionID).then((res) =>
      setCollection({
        name: res.name,
        symbol: res.symbol,
        decimals: res.decimals,
      })
    );
    const holdersAdresses = await getTokenHoldersList(collectionID);
    console.log("holders", holdersAdresses);
    setHolders(holdersAdresses);
    setLoading(false);
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
  };

  return (
    <>
      <h1>Welcome to RaffleWaffle</h1>
      <button onClick={login}>Connect Wallet</button>
      <iframe
        src="https://my.spline.design/waffle-17df1585cb157156a6a691697e801d98/"
        title="waffle"
        width="100%"
        height="500px"
      ></iframe>
      <h2>Enter a Contract ID</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={collectionID}
            onChange={(e) => setCollectionID(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {loading && <h2>LOADING...</h2>}
      {collection && !loading && (
        <>
          <h2>{collection.symbol}</h2>
          <h3>{collection.name}</h3>
        </>
      )}
    </>
  );
};

export default Home;
