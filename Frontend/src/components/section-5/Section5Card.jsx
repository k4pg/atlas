import React from 'react';
import PropTypes from 'prop-types';

const Section5Card = ({ imageSrc, title, description, bgColor, borderColor }) => {
    return (
        <div className={`w-[274px] h-[219px] border-dashed border ${borderColor} ${bgColor} rounded-md`}>
            <div className='h-[59px] w-[59px] bg-black rounded-md flex items-center justify-center relative top-5 left-5'>
                <img src={imageSrc} alt="" />
            </div>
            <div className='relative top-10 p-5'>
                <h4 className='font-bold text-black'>{title}</h4>
                <p className='text-black'>{description}</p>
            </div>
        </div>
    );
};

Section5Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
};

export default Section5Card;
