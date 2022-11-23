import type { Config } from "jest";
const SSXSDK = require("./packages/ssx-sdk/package.json");
const SSXReact = require("./packages/ssx-react/package.json");
const SSXServer = require("./packages/ssx-server/package.json");
const SSXServerless = require("./packages/ssx-serverless/package.json");
const SSXGnosisExtension = require("./packages/ssx-gnosis-extension/package.json");

export default async (): Promise<Config> => ({
  verbose: true,
  collectCoverage: true,
  bail: 0,
  preset: "ts-jest",
  clearMocks: true,
  slowTestThreshold: 3,
  coverageProvider: "v8",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov"],
  projects: [
    {
      displayName: SSXSDK.name,
      testEnvironment: "jsdom",
      transform: {
        "^.+\\.(ts|tsx)?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/packages/ssx-sdk/tsconfig.json" },
        ],
      },
      testMatch: [
        "<rootDir>/packages/ssx-sdk/tests/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: SSXReact.name,
      transform: {
        "^.+\\.(ts|tsx)?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/packages/ssx-react/tsconfig.json" },
        ],
      },
      testMatch: [
        "<rootDir>/packages/ssx-react/tests/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: SSXServer.name,
      transform: {
        "^.+\\.(ts|tsx)?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/packages/ssx-server/tsconfig.json" },
        ],
      },
      testMatch: [
        "<rootDir>/packages/ssx-server/tests/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: SSXServerless.name,
      transform: {
        "^.+\\.(ts|tsx)?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/packages/ssx-serverless/tsconfig.json" },
        ],
      },
      testMatch: [
        "<rootDir>/packages/ssx-serverless/tests/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: SSXGnosisExtension.name,
      transform: {
        "^.+\\.(ts|tsx)?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/packages/ssx-gnosis-extension/tsconfig.json" },
        ],
      },
      testMatch: [
        "<rootDir>/packages/ssx-gnosis-extension/tests/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
  ],
});
