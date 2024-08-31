import hre from "hardhat";

import { type FundMe } from "../typechain-types/FundMe";
import { type FundMe__factory } from "../typechain-types/factories/FundMe__factory";

async function main() {
  try {
    const fundMeContract: FundMe__factory = await hre.ethers.getContractFactory(
      "FundMe"
    );

    const fundMeContractAddr = "0xc2409759a50775DcC6d14fF0b7ccc6FdEACB2e67";
    const contract = fundMeContract.attach(fundMeContractAddr) as FundMe;

    console.log(`querying the contract balance...`);
    let raisedAmt = await contract.getRaisedAmount();
    console.log(raisedAmt);

    console.log(`fuding account by 0.001eth...`);

    const contractResponse = await contract.fund({ value: "1000000000000000" });

    console.log(`waiting for atleast one confirmation`);

    await contractResponse.wait(1);

    console.log("querying available balance again");

    raisedAmt = await contract.getRaisedAmount();
    console.log(raisedAmt);
  } catch (error) {
    console.log(error);
  }
}

main();
