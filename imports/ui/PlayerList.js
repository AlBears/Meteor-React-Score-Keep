import React from 'react';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers(playersList){
    if (playersList.length === 0) {
      return <p>Add your first player to get started!</p>
    } else {
     return playersList.map( (player) => {
       return <Player key={player._id} player={player}/>;
     });
   }
  }
  render() {
    return (
    <div>
      {this.renderPlayers(this.props.players)}
    </div>
  );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
