import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const CategoryProduct = ({id, title, image, specs, features, price, stock}) => {
    const navigate = useNavigate();

    return (
        <CategoryProducts>
            <ProductTitle>
                <Link to={`/products/${id}`}>{title}</Link>
            </ProductTitle>

            <ProductInfos>
                <figure>
                    <ProductImageContainer src={`/assets/${image}`} alt={title} />
                </figure>

                <aside>
                    <ProductInfo>
                        <h3>Dimensions</h3>
                        <label>{specs.dimensions}</label>
                    </ProductInfo>

                    {specs.capacity &&
                    <ProductInfo>
                        <h3>Capacity</h3>
                        <label>{specs.capacity}</label>
                    </ProductInfo>
                    }

                    <ProductInfo>
                        <h3>Features</h3>
                        <ul>
                            {features?.map((f, index) => {
                                return <li key={`feature${index}`}>{f}</li>
                            })}
                        </ul>
                    </ProductInfo>
                </aside>
                
                <ProductFinance>
                    <ProductFinancePrice>
                        &pound;{price}
                    </ProductFinancePrice>

                    <ProductInfoStock>
                        <label>Stock Level: {stock}</label>
                        <label>FREE Delivery</label>
                    </ProductInfoStock>

                    <ProductAction>
                        <ProductButton onClick={() => navigate(`products/${id}`)}>View Product</ProductButton>
                        <ProductButton onClick={() => navigate(`basket`)}>Add to Basket</ProductButton>
                    </ProductAction>
                </ProductFinance>
            </ProductInfos>
        </CategoryProducts>
    )
}

export default CategoryProduct;

const CategoryProducts = styled.article`
    padding: 1rem;
    border: 1px solid #103263;
    border-radius: 1rem;
`;

const ProductTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: #071952;
`;

const ProductInfos = styled.div`
    display: flex;
    gap: 2rem;
`;

const ProductImageContainer = styled.img`
    width: 40vmin;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin-bottom: 3rem;
    }

    ul {
        padding-left: 1.2rem;
        margin-top: 0rem;
    }
`;

const ProductFinance = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ProductFinancePrice = styled.div`
    margin-bottom: 1.5rem;
    color: #e63946;
    font-weight: 500;
    font-size: 1.5rem;
`;

const ProductInfoStock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid gray;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #f1faee;
    font-weight: bold;
`;

const ProductAction = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ProductButton = styled.button`
    cursor: pointer;
    background-color: lightseagreen;
    color: azure;
    border: 1px solid #103263;
    border-radius: 20px;
    width: 130px;
    height: 40px;
    font-size: 1rem;
    &:hover {
        background-color: #a8dadc;
        color: #103263;
        transition: 350ms ease;
      }
`;
