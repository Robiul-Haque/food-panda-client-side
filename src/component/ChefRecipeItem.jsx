import React from 'react';

const ChefRecipeItem = (props) => {

    const { name, photo, recipes_description } = props.recipe;

    return (
        <div className="container card mb-4 ps-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={photo} className="img-fluid rounded-start w-100" style={{ height: '100%', objectFit: 'cover' }} alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-secondary">{recipes_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipeItem;