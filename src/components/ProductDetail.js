import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
import { styled } from 'styled-components';

const ProductDetail = () => {
    const navigate = useNavigate();
    const {productId} = useParams();
    const [product, setProduct] = useState({errorMessage: '', data: []});
    
    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId]);
    
    const createMarkup = () => {
        return {__html: product.data?.description}
    }
    return (
        <CategoryProducts>
            <ProductTitle>
                {product.data.title}
            </ProductTitle>

            <ProductInfos>
                <figure>
                    <ProductImageContainer src={`/assets/${product.data.image}`} alt={product.data.title} />
                </figure>

                <aside>
                    {product.data.specs?.dimensions &&
                    <ProductInfo>
                        <h3>Dimensions</h3>
                        <label>{product.data.specs.dimensions}</label>
                    </ProductInfo>}

                    {product.data.specs?.capacity &&
                    <ProductInfo>
                        <h3>Capacity</h3>
                        <label>{product.data.specs.capacity}</label>
                    </ProductInfo>
                    }

                    <ProductInfo>
                        <h3>Features</h3>
                        <ul>
                            {product.data.features?.map((f, index) => {
                                return <li key={`feature${index}`}>{f}</li>
                            })}
                        </ul>
                    </ProductInfo>
                </aside>
                
                <ProductFinance>
                    <ProductFinancePrice>
                    &#8377;{product.data.price}
                    </ProductFinancePrice>

                    <ProductInfoStock>
                        <label>Stock Level: {product.data.stock}</label>
                        <label>FREE Delivery</label>
                    </ProductInfoStock>

                    <ProductAction>
                        <ProductButton onClick={() => navigate(`cart`)}>Add to Cart</ProductButton>
                    </ProductAction>
                </ProductFinance>
            </ProductInfos>

            <ProductInfo dangerouslySetInnerHTML={createMarkup()}></ProductInfo>

        </CategoryProducts>
    )
}

export default ProductDetail;

const CategoryProducts = styled.article`
    padding: 1rem;
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
        margin-bottom: 0rem;
    }

    ul {
        padding-left: 0rem;
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
