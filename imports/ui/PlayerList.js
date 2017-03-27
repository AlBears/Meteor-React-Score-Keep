import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers(playersList){
    if (playersList.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      );
    } else {
     return playersList.map( (player) => {
       return <Player key={player._id} player={player}/>;
     });
   }
  }
  render() {
    return (
    <div>
      <FlipMove duration={750} easing="ease-out" maintainContainerHeight={true}>
        {this.renderPlayers(this.props.players)}
      </FlipMove>
    </div>
  );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
