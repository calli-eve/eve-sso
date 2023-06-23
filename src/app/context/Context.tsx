import { AccessToken, CharacterUpdate } from "@/types";
import { createContext } from "react";

export const CharacterContext = createContext<{
  characters: AccessToken[];
  deleteCharacter: (character: AccessToken) => void;
  updateCharacter: (character: AccessToken, update: CharacterUpdate) => void;
}>({
  characters: [],
  deleteCharacter: () => {},
  updateCharacter: () => {},
});

export const SessionContext = createContext<{
  refreshSession: () => void;
  EVE_SSO_CALLBACK_URL: string;
  EVE_SSO_CLIENT_ID: string;
}>({
  refreshSession: () => {},
  EVE_SSO_CALLBACK_URL: "",
  EVE_SSO_CLIENT_ID: "",
});
