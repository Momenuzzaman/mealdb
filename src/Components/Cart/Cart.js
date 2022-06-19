
const Cart = (props) => {
   const {cart} = props;
  ;
    return (
        <div>
            <h1>Order List</h1>
            <br/>
            <h3>Items Ordered :{cart.length}</h3>
        </div>
    );
};

export default Cart;