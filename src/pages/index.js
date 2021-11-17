import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Tooltip } from '@material-ui/core';
import {FaInfoCircle} from 'react-icons/fa'
import Logo from '../assets/images/Logo.png'
import PokeModal from '../components/PokeModal/PokeModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#CC0000",
  },
  imageList: {
    width: "100%",
    minWidth: 300,
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export const Index = () => {
    const classes = useStyles();
    const [itemData, setItemData] = useState([])
    const [open, setOpen] = useState(false);

    const handleOpen = (id) => {
      setOpen(true);
      const { data } = axios.get(`https://pokeapi.co/api/v2/${id}`)  
    };
    
    const handleClose = () => {
      setOpen(false);
    };

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    function getPokemons(){
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0")
      .then((response) => {
          setItemData(response.data?.results)
      })
      .catch((error) => {console.log(error)})
    }

    useEffect(() => {
    }, [])

    return (
        <div className={classes.root}>
            <img src={Logo} style={{width: '50%'}}/>
            <ImageList rowHeight={50} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Pokémon</ListSubheader>
                </ImageListItem>
                {itemData?.map((item, index) => (
                <ImageListItem key={index}>
                    <ImageListItemBar
                    title={capitalize(item.name)}
                    actionIcon={
                        <Tooltip title={`Informações de ${capitalize(item.name)}`}>
                            <IconButton aria-label={`info about ${item.title}`} className={classes.icon} onClick={handleOpen(item.url)}>
                                <FaInfoCircle />
                            </IconButton>
                        </Tooltip>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
            <PokeModal handleClose={handleClose} handleOpen={handleOpen} open={open}/>
        </div>
    );
}