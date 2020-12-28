const OrderIndex = ({ orders }) => {

    const orderList = orders.map((order) => {
      <tr key={order.id}>
        <td>{order.ticket.title}</td>
        <td>{order.ticket.status}</td>
      </tr>
    })

    return (
      <div>
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{orderList}</tbody>
        </table>
      </div>
    );
  };
  
OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');
  return { orders: data };
};

export default OrderIndex;
