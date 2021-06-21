import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Weapon from './Components/Weapon'
import WeaponList from './Components/WeaponsList'

export default (
  <Switch>
    <Route exact path="/" component={WeaponList} />
    <Route path="/pokemon/:name" component={Weapon} />
  </Switch>
)