
export type GreeterType = {
  getNamedAccounts: any;
  deployments: any;
  getChainId: any;
  getUnnamedAccounts: any;
}

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}: GreeterType) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("Greeter", {
    from: deployer,
    // gas: 4000000,
    args: ["Greeting set from ./deploy/Greeter.ts"],
  });
};
