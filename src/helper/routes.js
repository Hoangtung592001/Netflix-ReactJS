import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
export function IsUserRedirect({ user, LoggedInElement, children, ...restProps }) {
    return (
        user.user ? <Navigate to={LoggedInElement}/> : children
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    return(
        user.user ? children : <Navigate to='/signin'/>
    )
}