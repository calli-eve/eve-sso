import { AccessToken } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import { CharacterRow } from "../Characters/CharacterRow";

export const AccountCard = ({ characters }: { characters: AccessToken[] }) => {
  return (
    <Box
      sx={{
        background: "#262626",
        padding: 1,
        borderRadius: 1,
        margin: 1,
      }}
    >
      <Typography paddingLeft={2}>Account: {characters[0].account}</Typography>
      {characters.map((c) => (
        <Stack
          key={c.character.characterId}
          direction="row"
          alignItems="flex-start"
        >
          <CharacterRow character={c} />
        </Stack>
      ))}
    </Box>
  );
};
