import React from 'react'
import styled from 'styled-components'
import { OrderItem } from '../../components'

const AllOrder = ({ orders }) => {
  return (
    <Wrapper>
      <section className=''>
        <div className='left'>
          <div className='header'>
            <h2>Order List</h2>
          </div>
          <table>
            <thead>
              <tr align='left'>
                <th>Order #</th>
                <th>Item #</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                {/* <th></th> */}
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <OrderItem order={order} key={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className='right'>
          <div className='header'>
            <h2>Payment</h2>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 2rem 0;

  .header {
    padding: 2rem 0;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    .left {
      flex: 2;
      table {
        width: 100%;
        border-collapse: collapse;

        thead,
        tr {
          border-bottom: 1px solid #000000;
        }
        th {
          padding: .8rem .2rem;
          font-size: 0.8rem;

          button {
            all: unset;
          }
        }
      }
    }
    .right {
      flex: 1;
    }
  }

  @media screen and (min-width: 780px) {
    section {
      flex-direction: row;

      .left {
        table {
          thead,
          tr {
            border-bottom: 1px solid #000000;
          }
          th {
            padding: 0.8rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
`

export default AllOrder
