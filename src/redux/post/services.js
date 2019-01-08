//Get userName Instagram
export const getPosts = () =>
	fetch(
		`https://raw.githubusercontent.com/Andtres/instagram-clone-react-native/master/src/data/posts.json`
	).then(response => response.json());
//Get Users
export const getUsers = () =>
	fetch(
		`https://raw.githubusercontent.com/Andtres/instagram-clone-react-native/master/src/data/users.json`
	).then(response => response.json());
//Get comments
export const getComments = () =>
	fetch(
		`https://raw.githubusercontent.com/Andtres/instagram-clone-react-native/master/src/data/users.json`
	).then(response => response.json());

