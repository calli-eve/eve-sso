# Callis SSO starter

Boilerplate frontend app to get started with EVE SSO. Handles the oauth2 flow with selected scopes and stores them in local storage with encrypted refresh token.

## Security

All eve sso information is stored in your browser and refresh token is encrypted with apps EVE SSO secret. Backend processes only the token exchange, refresh and revoke that need the EVE_SSO_SECRET. Everything else is handled in frontend.

## EVE SSO Callback

Callback is handled by the SPA so when running you should point to the domain. There is no separate callback path.

## Running

To run the app you need to create a EVE SSO application here: https://developers.eveonline.com/

You will need these env variables from the application settings:

```
EVE_SSO_CLIENT_ID=Client ID
EVE_SSO_SECRET=Secret Key
EVE_SSO_CALLBACK_URL=Callback URL (This should be the domain you are hosting at or if run locally it should be http://localhost:3000)
```

## Run locally

1. Create .env file in the directory root and populate with env variables you get from the EVE app you created. Example env file: .env.example
2. run `npm install`
3. run `npm run dev`
4. open http://localhost:3000 in your browser

## Run the container

1. Populate the environment variables in .env file
2. Run 'docker-compose up
3. navigate to http://localhost:3000 in your browser

## Hosting

Easiest way to host is deploy the app through Vercel https://vercel.com. Login with github, point to eve-pi repository, setup the env variables and the app should work out of the box.

## How to continue

All the requests to EVE ESI can be done using the generated esi-api.ts. You can regenerate it by running ´npm run esi-swagger´. Tokens are stored after login in CharacterContext (Context.tsx file) and persisted in local storage (page.tsx handles session persistance).

To interact with EVE ESI api you can follow this example:

```
const api = new Api();
const planets = (
  await api.characters.getCharactersCharacterIdPlanets(
    character.character.characterId,
    {
      token: character.access_token,
    }
  )
).data;

```

LogiDialog.tsx handles the scope selection. If you have set scopes remove the swagger call and hardcode the needed scopes. Allowed scopes are stored along with the token in CharacterContext.

1. Create an Api object
2. Create a request promise with the needed parameters
3. Refresh the access_token using refresh from SessionContext (Context.tsx)
4. Extract access_token from CharacterContext (Context.tsx)
