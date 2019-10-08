class VideoPlayer extends React.Component {
constructor(props) {
   super(props);
   this.state = {
   // init with muted, autoPlay
   playerState: new MediaPlayerState({autoPlay: true, muted: true}), 
 };
}
render() {
   return (
   <View>
      <Video
      style={{height: 2.25, width: 4}}
      source={{uri: 'assets/1.webm'}}
      playerState={this.state.playerState} />
   <VideoControl
      style={{height: 0.2, width: 4}}
      playerState={this.state.playerState} />
   </View>
   );
}
}