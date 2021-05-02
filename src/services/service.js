import { getClient } from './contentfulClient';

export default function loadContent(contentTypeId) {
  return getClient()
    .getEntries({
      content_type: contentTypeId,
      include: 10,
    })
    .then((payload) => payload.items);
}
