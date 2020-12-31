import React from 'react';
import { SideDiv, Option } from './styles';

const SideMenu = ({ open, side, options }) => {

    const listOptions = Object.entries(options).map(([desc, route]) => (
        < Option key={desc}>
            <a href={route}>{desc}</a>
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