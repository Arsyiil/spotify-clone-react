import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img src="https://www.suxessrecords.com/wp-content/uploads/2019/04/Spotify_Logo_RGB_White.png" />

      <div className="sidebar-option">
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      </div>
      <br />
      <strong className="sidebar-title">PLAYLIST</strong>
      <hr />
      <div className="sidebar-playlist">
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
