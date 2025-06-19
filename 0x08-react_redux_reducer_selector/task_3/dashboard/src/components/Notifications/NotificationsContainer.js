import { connect } from 'react-redux';
import Notifications from './Notifications';
import {
  getNotificationsByFilter,
  getNotificationFilter
} from '../../selectors/notificationSelectors';
import { markAsRead, setNotificationFilter } from '../../actions/notificationActionCreators';

const mapStateToProps = (state) => ({
  notifications: getNotificationsByFilter(state),
  filter: getNotificationFilter(state)
});

const mapDispatchToProps = {
  markNotificationAsRead: markAsRead,
  setFilter: setNotificationFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
