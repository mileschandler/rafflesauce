import * as ethers from 'ethers';
const WEB3_ENDPOINT = 'https://cloudflare-eth.com';

const handleError = () => {
  return undefined;
};

export const getTokenMetadata = async (address: string) => {
  const abi = [
    'function name() view returns (string name)',
    'function symbol() view returns (string symbol)',
    'function decimals() view returns (uint8 decimals)',
  ];
  const { JsonRpcProvider } = ethers.providers;
  const provider = new JsonRpcProvider(WEB3_ENDPOINT);
  const contract = new ethers.Contract(address, abi, provider);
  const [name, symbol, decimals] = await Promise.all([
    contract.name().catch(handleError),
    contract.symbol().catch(handleError),
    contract.decimals().catch(handleError),
  ]);

  
  return { decimals, name, symbol };
};

export const getTokenHoldersList = async (contractID: string) => {
  const holders = await fetch(`https://api.bloxy.info/token/token_holders_list?token=0x9c38bc76f282eb881a387c04fb67e9fc60aecf78&key=ACCA2pvUNFeVh&format=table`);
  console.log('holders ', holders)
  return holders
}
