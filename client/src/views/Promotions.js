import React from 'react';
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemCardPromotions from "../components/molecules/ItemCardPromotions/ItemCardPromotions";
import Heading from "../components/atoms/Heading/Heading";


const ItemList = styled.div`
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;


const PageTitle = styled(Heading)`
  margin: 3% 43%;
  font-weight: 600;
  font-size: 4rem;
`;




const Promotions = ({ products }) => (
    <div>
    <PageTitle>Promotions</PageTitle>
<ItemList>
    {products.map(({ id, name, image, description, price,newprice, category }) => (
        <ItemCardPromotions
            id={id}
            name={name}
            image={image}
            description={
                <LinesEllipsis
                    text={description}
                    maxLine="3"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
            }
            price={price}
            newprice={newprice}
            category={category}
        />
    ))}
</ItemList>

    </div>
);


Promotions.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ),
};

Promotions.defaultProps = {
    products: [],
};

const mapStateToProps = (state) => {
    const { products } = state;
    return { products };
};

export default connect(mapStateToProps)(Promotions);




