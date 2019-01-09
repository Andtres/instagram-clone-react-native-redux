import { baseUrl, token, userId, fields } from '../../config';

export const getHastagId = hastag =>
	fetch(`${baseUrl}ig_hashtag_search?${token}&${userId}&q=cali`).then(
		response => response.json()
	);
//Get Users
export const getHastag = hastagId =>
	fetch(`${baseUrl}17842311052064764/top_media?${token}&${userId}&${fields}`).then(
		response => response.json()
	);

