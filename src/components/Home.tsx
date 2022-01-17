import React from "react";
import { getTokenMetadata } from "../lambda/contract-token-api-helper";

// Home page content of the entire site
interface collection {
  name: string;
  symbol: string;
  decimals: string;
}

export const Home = () => {
  const [collectionID, setCollectionID] = React.useState("");
  const [collection, setCollection] = React.useState<collection>();
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    console.log("submit!", collectionID);
    await getTokenMetadata(collectionID).then((res) =>
      setCollection({
        name: res.name,
        symbol: res.symbol,
        decimals: res.decimals,
      })
    );
    // getTokenHoldersList(collectionID);
  };

  return (
    <>
      <h1>Welcome to RaffleWaffle</h1>
      <h2>Enter a Contract ID</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contract ID
          <input
            type="text"
            value={collectionID}
            onChange={(e) => setCollectionID(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {collection && (
        <>
          <h2>{collection.symbol}</h2>
          <h3>{collection.name}</h3>
        </>
      )}
    </>
  );
};

export default Home;
