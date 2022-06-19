
const Cart = (props) => {
const {cart} = props;
const count = cart.reduce((total,meal) => total +meal.quantity,0)

    return (
        <div>
            <h1>Order List</h1>
            <br/>
            <h3>Items Ordered :{count}</h3>
        </div>
    );
};

export default Cart;