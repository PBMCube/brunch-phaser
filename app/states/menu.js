module.exports = {

  create: function () {
    const title = this.add.text(0, 0, 'Duck Quest', {
      fill: 'white',
      font: '100px fantasy'
    });
    title.alignIn(this.world, Phaser.CENTER);

    this.input.onTap.add(this.startGame.bind(this));
  },

  startGame: function () {
    this.state.start('game');
  }

};
