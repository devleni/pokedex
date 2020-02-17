import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokecardList from "./PokecardList";
import "tachyons";
import { pokemon } from "./pokemon";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <PokecardList pokemon={pokemon} />
  ,document.getElementById('root'));

serviceWorker.unregister();
