import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { receieveConversation } from '../../../../src/actions/index'


import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const conversation = await api.fetchConversation(username);
    this.props.getReceieveConversation(conversation)
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, conversations } = this.props;
    // const { conversation } = this.state;
  console.log(this.props);
    return (
      <Conversation
        conversation={conversations}
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
};



export default connect(mapStateToProps,mapDispatchToProps)(ConversationContainer)
