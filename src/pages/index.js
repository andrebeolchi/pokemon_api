import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState } from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Tooltip } from '@material-ui/core';
import {FaInfoCircle} from 'react-icons/fa'
import Logo from '../assets/images/Logo.png'
import PokeModal from '../components/PokeModal/PokeModal';
import _ from 'lodash';

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
    const [pokemons, setPokemons] = useState([])
    const [newPokemons, setNewPokemons] = useState([])
    const [pokemonData, setPokemonData] = useState({})
    const [open, setOpen] = useState(false);

    const handleOpen = (id) => {
      getPokemonData(id + 1)
      console.log(pokemonData)
      setOpen(true);
    };
    
    const handleClose = () => {
      setPokemonData({})
      setOpen(false);
    };
    
    function getPokemons() {
      axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then(response => {
       setPokemons(response.data?.results)
      })
      .catch(error => {
        console.log(error)
      })
    }

    function getPokemonData(id){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemonData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

    useEffect(() => {
      getPokemons()  
    }, []);


    return (
      <div className={classes.root}>
            {/* <img src={Logo} style={{width: '50%'}}/> */}
            <ImageList rowHeight={50} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Pokémon</ListSubheader>
                </ImageListItem>
                {pokemons?.map((item, index) => (
                <ImageListItem key={index}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt={item.title} style={{width: 'auto', height: '100%', margin: 'auto'}}/>
                    <ImageListItemBar
                    title={_.startCase(_.toLower(item.name))}
                    actionIcon={
                        <Tooltip title={`Informações de ${_.startCase(_.toLower(item.name))}`}>
                            <IconButton aria-label={`info about ${item.title}`} className={classes.icon} onClick={() => handleOpen(index)}>
                                <FaInfoCircle />
                            </IconButton>
                        </Tooltip>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
            <PokeModal handleClose={handleClose} handleOpen={handleOpen} open={open} pokemonData={pokemonData}/>
        </div>
    );
}