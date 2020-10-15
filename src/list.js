import React from 'react';
import Card from './Card';
import './list.css';

function List(props) {
    return (
        <section className="list">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                <div>{props.cards.map((card) =>
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                )}
                    <button
                        type='button'
                        className='List-add-button'
                    >
                        + Add random Card
                    </button>
                </div>
            </div>
        </section>
    )
}

export default List;