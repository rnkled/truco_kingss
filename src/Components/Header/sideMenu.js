import React from 'react';
import { SideDiv, Option } from './styles';
import { Link } from 'react-router-dom';

const SideMenu = ({ open, side, options }) => {

    const listOptions = Object.entries(options).map(([desc, route]) => (
        < Option key={desc}>
            <Link to={route}>{desc}</Link>
        </Option >
    )
    );

    return (
        <SideDiv open={open} side={side}>
            {listOptions}
        </SideDiv>
    )
}

export default SideMenu;