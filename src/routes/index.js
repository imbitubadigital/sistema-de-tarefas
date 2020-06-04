import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import 'font-awesome/css/font-awesome.css';

import NotFound from '~/pages/NotFound';

import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Logout from '~/pages/Logout';

import Initial from '~/pages/Dashboard/Initial';
import Profile from '~/pages/Dashboard/User/Profile';
import Recover from '~/pages/Dashboard/User/Recover';

import Category from '~/pages/Dashboard/Category';
import Task from '~/pages/Dashboard/Task';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact typeLayout="admin-single" component={Login} />
      <Route
        path="/cadastro-usuario"
        typeLayout="admin-single"
        component={SignUp}
      />

      <Route
        path="/sair"
        typeLayout="admin-single"
        isPrivate
        component={Logout}
      />
      <Route
        path="/dashboard"
        typeLayout="admin"
        component={Initial}
        isPrivate
      />
      <Route
        path="/meus-dados"
        typeLayout="admin"
        component={Profile}
        isPrivate
      />

      <Route
        path="/trocar-senha"
        typeLayout="admin"
        component={Recover}
        isPrivate
      />
      <Route
        path="/categorias"
        typeLayout="admin"
        component={Category}
        isPrivate
      />
      <Route path="/tarefas" typeLayout="admin" component={Task} isPrivate />

      <Route path="*" typeLayout="single" component={NotFound} />
    </Switch>
  );
}
