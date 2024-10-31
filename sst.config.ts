/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mattkinnersleydotcom",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("MattKinnersleyDotCom", {
      domain: {
        name:
          $app.stage === "production"
            ? "mattkinnersley.com"
            : `${$app.stage}.mattkinnersley.com`,
        dns: sst.cloudflare.dns({ zone: "e5b0d626b701d1d3df10781d5b9dad70" }),
      },
    });
  },
});
