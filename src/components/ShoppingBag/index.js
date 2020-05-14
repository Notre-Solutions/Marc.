import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ShoppingBagIcon from '../../../assets/ShoppingBag.svg';
import { CartContext } from '../cart';
import { displayItems } from '../cart/cartComponent';

class ShoppingBag extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentWillMount() {
    // Modal.setAppElement('shoppingmdoal');
  }

  handleOpenModal() {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="shopping-bag-modal">
        <button
          onClick={() => this.handleOpenModal()}
          className="shopping-bag-modal-btn"
        >
          <ShoppingBagIcon />
        </button>
        <Modal
          className="modal-content"
          isOpen={this.state.modalIsOpen}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          onRequestClose={() => this.handleCloseModal()}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            content: {
              position: 'absolute',
              border: '1px solid #ccc',
              background: '#fff',
              right: '22rem',
              top: '7rem',
              color: 'black',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '1rem',
              outline: 'none',
              flexDirection: 'column',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              // transform: 'translate(-50%, -50%)',
            },
          }}
        >
          <CartContext.Consumer>
            {context => {
              const items = displayItems(context.cartItems)
              const disp = items.map(sku => {
                console.log(sku);
                return(
                  <div key={sku.id} className='bag'>
                    <p>{sku.productName}</p>
                    <p>{sku.price}</p>
                    <p>{sku.quantity}</p>
                  </div>
                )
              })
              return(
                <>{disp}</>
              )
            }}
            
          </CartContext.Consumer>

          <h1>This is the shopping bag</h1>
          <p>Body</p>
        </Modal>
      </div>
    );
  }
}

const props = {};

// ReactDOM.render(<ShoppingBag {...props} />, document.getElementById('main'))

export default ShoppingBag;
