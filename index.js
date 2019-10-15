import React, { Component } from 'react';

import {
  AppRegistry,
  asset,
  AmbientLight,
  Box,
  DirectionalLight,
  Div,
  Model,
  Pano,
  Plane,
  Text,
  Vector,
  View,
} from 'react-360';


import VideoModule from 'VideoModule';
import * as Environment from 'Environment';

const VIDEO_PLAYER = 'dash_video';
const VIDEO_SOURCE =[
  {
    url: asset('video_dash_mp4/video_stream.mpd').uri, 
    fileFormat: 'mp4',
  },
  {
    url: asset('video_dash_webm/video_stream.mpd').uri, 
    fileFormat: 'webm',
  }
];



class CustomPlayerSample extends React.Component {
  componentDidMount() {
    VideoModule.createPlayer(VIDEO_PLAYER);
    VideoModule.play(VIDEO_PLAYER, {
      source: VIDEO_SOURCE,
      stereo: '2D',
    });

    Environment.setScreen('default', VIDEO_PLAYER, 'default', 0, 0, 1000, 600);
  }

  render() {
    return null;
  }
}


class Pedestal extends Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={.4}
          dimDepth={.4}
          dimHeight={.5}
          lit
          texture={asset('travertine_striata_vein_cut_honed_filled_Base_Color.jpg')}
          style={{
            transform: [{ translate: [this.props.MyX, -1.4, this.props.MyZ] }]
          }}
        />
        <Box
          dimWidth={.5}
          dimDepth={.5}
          dimHeight={.1}
          lit
          texture={asset('travertine_striata_vein_cut_honed_filled_Base_Color.jpg')}
          style={{
            transform: [{ translate: [this.props.MyX, -1.1, this.props.MyZ] }]
          }}
        />
        <Box
          dimWidth={.5}
          dimDepth={.5}
          dimHeight={.1}
          lit
          texture={asset('travertine_striata_vein_cut_honed_filled_Base_Color.jpg')}
          style={{
            transform: [{ translate: [this.props.MyX, -1.7, this.props.MyZ] }]
          }}
        />
      </View>
    )
  }
}

class Platform extends Component {
  render() {
    return (
      <Box
        dimWidth={5}
        dimDepth={5}
        dimHeight={.1}
        texture={asset('DeckPlates_1_Base_Color.jpg')}
        style={{
          transform: [
            {
              translate: [this.props.MyX, -1.8, this.props.MyZ]
            }
          ]
        }}
      />

    );
  }
}


export default class vrdashboard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('BabbageStation_v6_r5.jpg')} />
        <AmbientLight

          intensity={.3}

        />
        <DirectionalLight
          intensity={.7}
          style={{
            transform: [{
              rotateZ: 45
            }]
          }}
        />
        <Platform MyX='0' MyZ='-5.1' />
        <Platform MyX='0' MyZ='0' />
        <Platform MyX='0' MyZ='5.1' />
        <Platform MyX='5.1' MyZ='-5.1' />
        <Platform MyX='5.1' MyZ='0' />
        <Platform MyX='5.1' MyZ='5.1' />
        <Platform MyX='-5.1' MyZ='-5.1' />
        <Platform MyX='-5.1' MyZ='0' />
        <Platform MyX='-5.1' MyZ='5.1' />

        <Pedestal MyX='0' MyZ='-5.1' />
        <Pedestal MyX='0' MyZ='0' />
        <Pedestal MyX='0' MyZ='5.1' />
        <Pedestal MyX='5.1' MyZ='-5.1' />
        <Pedestal MyX='5.1' MyZ='0' />
        <Pedestal MyX='5.1' MyZ='5.1' />
        <Pedestal MyX='-5.1' MyZ='-5.1' />
        <Pedestal MyX='-5.1' MyZ='0' />
        <Pedestal MyX='-5.1' MyZ='5.1' />
        <Model
          source={{
            obj: asset('teapot2.obj'),
            mtl: asset('teapot2.mtl'),
          }}
          lit
          style={{
            transform: [{ translate: [-5.1, -1, -5.1] }]
          }}
        />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.2,
            fontWeight: '400',
            layoutOrigin: [0.0, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{
              translate: [0, 0, -4]
            }]
          }}>
          Space Gallery
  </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('vrdashboard', () => vrdashboard);