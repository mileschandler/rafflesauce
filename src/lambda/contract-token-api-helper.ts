// import * as ethers from 'ethers';
// const WEB3_ENDPOINT = 'https://cloudflare-eth.com';
// const MORALIS_ENDPOINT = 'https://deep-index.moralis.io/api/v2/nft';

// const handleError = () => {
//   return undefined;
// };

// interface Holder {
//   address: string,
//   tokenID: string
// }

// export const getTokenMetadata = async (address: string) => {
//   const abi = [
//     'function name() view returns (string name)',
//     'function symbol() view returns (string symbol)',
//     'function decimals() view returns (uint8 decimals)',
//   ];
//   const { JsonRpcProvider } = ethers.providers;
//   const provider = new JsonRpcProvider(WEB3_ENDPOINT);
//   const contract = new ethers.Contract(address, abi, provider);
//   const [name, symbol, decimals] = await Promise.all([
//     contract.name().catch(handleError),
//     contract.symbol().catch(handleError),
//     contract.decimals().catch(handleError),
//   ]);

  
//   return { decimals, name, symbol };
// };

// export const getTokenHoldersList = async (contractID: string) => {
//   let page = 0;
//   const PAGESIZE = 500;
//   let holdersAdresses : Holder[] = [];
//   const holders = await fetch(`${MORALIS_ENDPOINT}/${contractID}/owners?chain=eth&format=decimal`, {
//     'headers': {'X-API-Key': 'enzyX0gCm34FlHx37OWtSzdRquIDBQkxa4nvAEmkaf505R9t36GoOju9s62WBSE1',
//   'accept': 'application/json'}})
//   .then(res => res.json());
//   console.log(holders)
//   const total = holders['total'];
//   while(holdersAdresses.length < total) {
//     await fetch(`${MORALIS_ENDPOINT}/${contractID}/owners?chain=eth&format=decimal&offset=${page * PAGESIZE}`, {
//       'headers': {'X-API-Key': 'enzyX0gCm34FlHx37OWtSzdRquIDBQkxa4nvAEmkaf505R9t36GoOju9s62WBSE1',
//     'accept': 'application/json'}})
//     .then(res => res.json())
//     .then(holders => holders['result'].forEach((holder: { [x: string]: any; }) => {
//     holdersAdresses.push({
//       address: holder['owner_of'],
//       tokenID: holder['token_id']
//     })
//   }));
//   console.log('PAGE ', page);
//   console.log(holdersAdresses.length, ' / ', total)
//   page++;
      
//   }
//   return holdersAdresses
// }
