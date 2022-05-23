import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from '../PurchaseModal.js/PurchaseModal';

const Purchase = () => {
    const [product, setProduct] = useState({})
    const [modalOn,setModalOn] = useState(false)
    const { productId } = useParams()
    const description = product?.description;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleModal = () =>{
        setModalOn(true)
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-2xl font-bold">{product.name}</h1>
                    <p className='text-xl'>Price:<span className='text-2xl text-primary'> ${product.price}</span></p>
                    <div class="divider"></div>
                    <ul>
                        <li>Brand:{product.brand}</li>
                        <li>style:{product.style}</li>
                        <li>Item Weight:{product.weigth}</li>
                    </ul>
                    <ul className='mt-2'>
                        <h2>About this item:</h2>
                        {
                            description?.map((des, index) => <li key={index}>{des}</li>)
                        }
                    </ul>
                    <ul className='mt-2'>
                        <li>In stack:{product.available_quantity} pices</li>
                    </ul>
                    <label onClick={handleModal} for="purchase-modal" class="btn btn-primary modal-button">Order now</label>
                    {modalOn && <PurchaseModal></PurchaseModal>}
                </div>
            </div>
        </div>
    );
};

export default Purchase;