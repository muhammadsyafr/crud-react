import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Blog, BlogPost } from '../pages/index'
// import {Provider} from 'react-redux'
// import store from '../redux/store';
export default (
    // <Provider store={store}> {/* Tanya apa itu store kenapa harus di kurung store */}
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={BlogPost}/>
                <Route exact path="/blog" component={Blog}/>
            </Switch>
        </BrowserRouter>
    // </Provider>
)