import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb";
import {Card} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title={'Home'}/>
                <Card body>
                    <marquee scrolldirection="left">
                        Md. Sakir Ahmed | Web application developer | Skills: PHP, Laravel, Livewire, React JS, Vue JS, jQuery, JS, CSS HTML | Contact +880 1304-734623 m.sakirahmed@gmail.com
                    </marquee>
                </Card>
            </div>
        );
    }
}

export default Home;