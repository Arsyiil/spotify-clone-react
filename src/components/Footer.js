import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Icon, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

function Footer({ spotify }) {
  const [{ track }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          className="footer-albumLogo"
          src="https://www.kaorinusantara.or.id/wp-content/uploads/2015/09/aU5X5IwvGuZzxkW5qwt4MCY7WgKrULkK2VApZlekT6kftHwVLh1uxjU3SiYrdQ6k.jpg"
          alt=""
        />
        <div className="footer-songInfo">
          <h3>The Beginning</h3>
          <p>One OK Rock</p>
        </div>
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer-icon" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
