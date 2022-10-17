/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState } from 'react';


import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

 const cart = () => {
        
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="product-details">
                            <h2>{item.name}</h2>
                            <div className="product-removal">
                                <button class="remove-product" onClick={()=>handleRemove(item)}> 
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div> 
                        <div className="product-price">
                            <label htmlFor="price">Precio </label>
                            <span className="price">COP ${item.price}</span>
                        </div>
                        <div className="product-quantity">
                            <label htmlFor="quantity">Cantidad </label>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="product-line-price">
                            <label htmlFor="total">Total </label>
                            <span className="total">COP ${item.quantity*item.price}</span>
                        </div>
                    </div>
                    )
                )}

            </div>
            <div className="totals" >
                    <div class="totals-item">
                        <label>Subtotal</label>
                        <div class="totals-value">{totalProductsPrice()}</div>
                    </div>
                    <div class="totals-item">
                        <label>Costo de envío</label>
                        <div class="totals-value">5000</div>
                    </div>
                    <div class="totals-item t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">{totalProductsPrice() + 5000}</div>
                    </div>
                    <div className="totals-item">
                        <button className ="checkout" onClick={handleFinalize}>Iniciar Compra</button>
                    </div>
                    
            </div>
        
        </section>

    )
}
export default Cart;
