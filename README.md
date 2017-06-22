# ui-api-proxy - API Proxy for SPA UI

[![Greenkeeper badge](https://badges.greenkeeper.io/apaleo/ui-api-proxy.svg)](https://greenkeeper.io/)

To start using it, you need to define a configuraiton provider and `BASAE_PATH` provider something like this:

````
import { UserManager } from 'oidc-client';
import { FactoryProvider, ValueProvider } from '@angular/core';
import { Configuration, BASE_PATH } from 'ui-api-proxy';
import { environment } from './../../../environments/environment';

let configuration: Configuration | undefined = undefined;

interface IPrivateUserManagerFields {
  readonly _userStoreKey: string;
};

export function getConfiguration(userManager: UserManager & IPrivateUserManagerFields) {
  if (!configuration) {
    configuration = new Configuration();
    configuration.accessToken = () => {
      const serializedItem = localStorage.getItem(`oidc.${userManager._userStoreKey}`);
      const item = JSON.parse(serializedItem) as { access_token: string };

      if (!item) {
        throw new Error('Unable to find access token.');
      }

      return item.access_token;
    };
  }

  return configuration;
}

export const configurationProvider: FactoryProvider = {
  provide: Configuration,
  useFactory: getConfiguration,
  deps: [ UserManager ]
};

export const basePathProvider: ValueProvider = {
  provide: BASE_PATH,
  useValue: environment.apiBasePath
};
````
