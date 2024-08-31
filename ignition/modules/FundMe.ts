import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FundMeModule = buildModule("LockModule", (m) => {
  const fundmecontract = m.contract("FundMe");

  return { fundmecontract };
});

export default FundMeModule;
