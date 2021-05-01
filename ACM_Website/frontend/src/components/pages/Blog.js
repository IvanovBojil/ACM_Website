import React from 'react';
import { Button } from '../Button';
import '../HeroSection.css';
import { useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Nav from '../../StrapiUtils/components/Nav';
import Articles from '../../StrapiUtils/containers/Articles';
import Article from '../../StrapiUtils/containers/Article';
import Category from '../../StrapiUtils/containers/Category';

function Blog(){
    return (
        <div className='Blog'>
            <Nav />
            <Articles />
        </div>
    );
}
export default Blog;