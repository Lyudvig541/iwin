import React, { Component } from 'react';
import ErrorPage from './index';
import { IErrorPage } from '../../interface/components-ts/error-ts/IError';

export default class ErrorBoundaries extends Component<IErrorPage, {hashError: boolean}> {

    constructor(props:IErrorPage) {

        super(props);
        this.state = {
            hashError: false
        };
    
    }

    componentDidCatch() {

        this.setState({ hashError:true });
    
    }

    render() {

        return (
            (this.state.hashError && <ErrorPage/>) || 
            this.props.children
        );
    
    }

}