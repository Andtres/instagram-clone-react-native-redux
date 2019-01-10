//Dependencies
import { connect } from 'react-redux';

function mapStateToProps(store) {
	return {
		post: store.post.selectPost	
	};
}

export default connect(
	mapStateToProps
);
