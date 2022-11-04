import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { GoKebabVertical } from 'react-icons/go';

const Hamburger = ({setAsLeader, removeMember, index}) => {

    return (
        <Dropdown drop='left'>
            <Dropdown.Toggle 
                className='after:content=[" "]' 
                variant="success" 
                id="dropdown-basic dropdown-button-drop-up" 
                
            >
            {/* <DropdownButton
                as={ButtonGroup}
                id={`dropdown-button-drop-up dropdown-basic`}
                variant="secondary"
            > */}

                <GoKebabVertical
                    className='text-[22px] cursor-pointer text-primaryIndigo-default'
                />
            {/* </DropdownButton> */}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{
                    position: 'absolute',
                    inset: '0px auto auto 0px',
                    transform: 'translate(-160.25px, -55.75px)',
                }}>
                <Dropdown.Item
                    onClick={() => setAsLeader(index)}
                >
                    Lead
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                    onClick={() => removeMember(index)}
                >
                    Remove
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

};

export default Hamburger;
