import { baseUrl, token, userId, fields } from '../../config';

export const getHastagId = hastag =>
	fetch(`${baseUrl}ig_hashtag_search?${token}&${userId}&q=${hastag}`).then(
		response => response.json()
	);
//Get hastag
export const getHastag = hastagId =>
	fetch(`${baseUrl}${hastagId}/top_media?${token}&${userId}&${fields}`).then(
		response => response.json()
	);

