import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const layers = [
  {
    id: 'school',
    name: 'School',
    visible: true
  },
  {
    id: 'hospital',
    name: 'Hospital',
    visible: true
  },
  {
    id: 'general_store',
    name: 'General Store',
    visible: true
  },
  {
    id: 'hotel',
    name: 'Hotel',
    visible: true
  }
];

const useStyles = makeStyles({
  root: {
    margin: '1rem 1rem 1rem 1rem !important',
  },
  listItem: {
    padding: '8px 0', 
  },
  listItemIcon: {
    minWidth: '36px',
  },
  listItemText: {
    flex: 1,
    marginRight:'1.5rem'
  },
  menuButton: {
    position: 'absolute !important',
    top: '1rem',
    left: '1rem',
    zIndex: '1000',
    color: '#fff'
  }
});

const LayersPanel = () => {
  const classes = useStyles();
  const [layerVisibility, setLayerVisibility] = useState(layers.map(layer => layer.visible));
  const [panelOpen, setPanelOpen] = useState(false);

  const toggleLayerVisibility = (index) => {
    const updatedVisibility = [...layerVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setLayerVisibility(updatedVisibility);
  };

  return (
    <>
      <IconButton className={classes.menuButton} onClick={() => setPanelOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={panelOpen} onClose={() => setPanelOpen(false)}>
        <List className={classes.root}>
          {layers.map((layer, index) => (
            <ListItem key={layer.id} disablePadding className={classes.listItem}>
              <ListItemButton onClick={() => toggleLayerVisibility(index)}>
                <ListItemIcon className={classes.listItemIcon}>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={layer.name} className={classes.listItemText} />
                <ListItemIcon className={classes.listItemIcon}>
                  {layerVisibility[index] ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default LayersPanel;
