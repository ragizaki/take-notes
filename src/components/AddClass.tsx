import React from 'react';

interface IAddClassProps {
    classes: string[];
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddClass = (props: IAddClassProps) => {
    return <select name='' id=''></select>;
};

export default AddClass;
