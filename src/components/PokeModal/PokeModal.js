import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import _ from 'lodash';
import { Carousel } from '../utils/Carousel';
import { Avatar } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const PokeModal = ({open, handleClose, pokemonData}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div style={modalStyle} className={classes.paper}>
        <Avatar alt={_.startCase(_.toLower(pokemonData.name))} src={pokemonData.sprites?.other["official-artwork"]?.front_default} className={classes.large} />
        <h2 id="simple-modal-title">{_.startCase(_.toLower(pokemonData.name))}</h2>
        <h3>Base Stats</h3>
        <p id="simple-modal-description">
          {console.log(pokemonData)}
          HP: {pokemonData.stats?.[0].base_stat}
        </p>
        <p id="simple-modal-description">
          Attack: {pokemonData?.stats?.[1].base_stat}
        </p>
        <p id="simple-modal-description">
          Defense: {pokemonData?.stats?.[2].base_stat}
        </p>
        <p id="simple-modal-description">
          Special Attack: {pokemonData?.stats?.[3].base_stat}
        </p>
        <p id="simple-modal-description">
          Special Defense: {pokemonData?.stats?.[4].base_stat}
        </p>
        <p id="simple-modal-description">
          Speed: {pokemonData?.stats?.[5].base_stat}
        </p>
        {/* <Carousel sprites={pokemonData.sprites}/> */}
      </div>
      </Modal>
  );
}

export default PokeModal