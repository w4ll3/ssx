import type { AWS } from '@serverless/typescript';

import getNonce from '@functions/ssx-nonce';
import signIn from '@functions/ssx-login';
import signOut from '@functions/ssx-logout';
import me from '@functions/ssx-me';

const serverlessConfiguration: AWS = {
  service: 'ssx-serverless-server',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      INFURA_ID: '${env:INFURA_ID}'
    },
  },
  // import the function via paths
  functions: { getNonce, signIn, signOut, me },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    'serverless-offline': {
      httpPort: 3001
    }
  },
};

module.exports = serverlessConfiguration;
