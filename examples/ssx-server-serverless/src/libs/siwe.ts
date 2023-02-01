import { middyfy } from '@libs/lambda';
import { requireAddressSchema, signOutSchema, signInSchema } from './schemas';
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from './api-gateway';
import { SSXServer, SSXInfuraProviderNetworks, SSXRPCProviders } from '@spruceid/ssx-serverless';

const ssx = new SSXServer({
  daoLogin: true,
  providers: {
    rpc: {
      service: SSXRPCProviders.SSXInfuraProvider,
      apiKey: process.env.INFURA_ID,
      network: SSXInfuraProviderNetworks.GOERLI,
    }
  }
}, {
  create: <T>() => true as T,
  retrieve: <T>() => true as T,
  update: <T>() => true as T,
  delete: <T>() => true as T,
});

const getNonce: ValidatedEventAPIGatewayProxyEvent<typeof requireAddressSchema> = async (): Promise<any> => {
  return await ssx.getNonce()
    .then(({ nonce }) => nonce)
    .catch(error => formatJSONResponse(500, { error }));
};

const signIn: ValidatedEventAPIGatewayProxyEvent<typeof signInSchema> = async (event): Promise<any> => {
  return await ssx.signIn(
    event.body.siwe,
    event.body.signature,
    event.body.walletAddress,
    {
      daoLogin: true,
      resolveEnsDomain: (event.body.resolveEns as any).domain ?? false,
      resolveEnsAvatar: (event.body.resolveEns as any).avatar ?? false,
      resolveLens: event.body.resolveLens as boolean,
    }
  )
    .then((response) => formatJSONResponse(200, { ...response }))
    .catch(error => formatJSONResponse(500, { error }));
};

export const signOut: ValidatedEventAPIGatewayProxyEvent<typeof signOutSchema> = async (event): Promise<any> => {
  return await ssx.signOut(event.body.walletAddress)
    .catch(error => formatJSONResponse(500, { error }));
};

export const me: ValidatedEventAPIGatewayProxyEvent<typeof requireAddressSchema> = async (event): Promise<any> => {
  return await ssx.me(event.body.address)
    .catch(error => formatJSONResponse(500, { error }));
};

export const _getNonce = middyfy(getNonce);
export const _signIn = middyfy(signIn);
export const _signOut = middyfy(signOut);
export const _me = middyfy(me);
