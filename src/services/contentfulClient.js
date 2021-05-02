import { createClient } from 'contentful';

let client;
let authorized;

export const accessToken = 'so60agywO4i1_LILyS9SxuQqd83eoYhg3GEhCmNSsDo';
export const spaceId = 'hvrvbag21hp5';

export function initClient() {
  client = createClient({
    space: spaceId,
    accessToken,
    host: 'cdn.contentful.com',
  });
  return client.getSpace().then((space) => {
    authorized = true;
    return space;
  });
}

export function getClient() {
  return authorized && client;
}
