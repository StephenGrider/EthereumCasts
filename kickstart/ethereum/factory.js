import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE950a05cC194a83A11533Bf18218355b21E315ba'
);

export default instance;
