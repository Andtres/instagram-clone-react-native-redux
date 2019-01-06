//Get userName Instagram
export const getPosts = userName =>
	fetch(`https://www.instagram.com/${userName}/?__a=1`).then(response =>
		response.json()
  )
  

