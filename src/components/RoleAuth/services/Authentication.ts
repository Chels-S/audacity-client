import React from 'react';
import { Route, Redirect } from 'react-router-dom';

enum Roles {
    admin = "admin",
    user = 'user'
}

const userRoles = {
    admins: [String(Roles.admin)],
    users: [String(Roles.user)],
    all: [String(Roles.admin), String(Roles.user) ]
};


enum AuthRoutes {
    adminPage = '/admin',
    raids = '/raids',
    trials = 'trials'

}

enum NonAuthRoutes {
    login = '/',
    unauthroized = 'unauthorized'

}