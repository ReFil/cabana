import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class PlayButton extends Component {
  static propTypes = {
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    isPlaying: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {'hover': false};

    this.onClick = this.onClick.bind(this);
  }

  imageSource() {
    const {hover} = this.state;
    const {isPlaying} = this.props;
    if(isPlaying) {
      if(hover) {
        return ("/img/ic_pause_circle_filled_black_24px.svg");
      } else {
        return ("/img/ic_pause_circle_outline_black_24px.svg");
      }
    } else {
      if(hover) {
        return ("/img/ic_play_circle_filled_black_24px.svg");
      } else {
        return ("/img/ic_play_circle_outline_black_24px.svg");
      }
    }
  }

  onClick(e) {
    let {isPlaying} = this.props;
    isPlaying = !isPlaying;

    if(isPlaying) {
      this.props.onPlay();
    } else {
      this.props.onPause();
    }
  }

  render() {
    return <img src={this.imageSource()}
                className={css(Styles.button)}
                onClick={this.onClick}
                onMouseOver={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})} />;
  }
}

const Styles = StyleSheet.create({
  button: {
    cursor: 'pointer',
    height: 30,
    width: 30
  }
});