import React from 'react';
import './styles/contacts.css';
import telephone from './assets/phone.png';
import man from './assets/man.png';
import woman from './assets/woman.png';
import anonymous from './assets/anonymous.png';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';


const Contact = ({ firstName, lastName, phone, gender }) => {
    const match = useRouteMatch();
    console.log(match)
    return (
        <>
        <Link to={`${match.url}/${firstName}`}>
            <div className='container'>
                <div className='main_info'>
                    <div className='icon'><img src={gender === 'male' ? man : gender === 'female' ? woman : anonymous} alt='' /></div>
                        <div className='info'>
                            <div className='name'> {firstName + ' ' + lastName} </div>
                            <div className='number_phone'> {phone} </div>
                        </div>
                    <div className='phone'><img src={telephone} alt='' /></div>
                </div>
            </div>
        </Link>
        <Switch>
        <Route exact path={`${match.path}/${firstName}`}>
            <div className='container'>
                <div className='main_info'>
                    <div>Привіт!Як справи?</div>
                </div>
            </div>
        </Route>
        </Switch>
        <hr />
        </>
    )
}

export default Contact;
