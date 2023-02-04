import React from 'react'
import Layout from '../../layout/Layout'

export default function Bookinglist() {
  return (
    <>
    <Layout>
    <div class="col-lg-12">

        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Booking List</h5>


            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Rate</th>
                <th scope="col">Max People</th>
                <th scope="col">Room Numbers</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <th scope="row">5</th>
                <td>Raheem Lehner</td>
                <td>Dynamic Division Officer</td>
                <td>47</td>
                <td>2011-04-19</td>
                <td></td>
                </tr>
            </tbody>
            </table>

        </div>
        </div>


    </div>
    </Layout> 
    </>
  )
}
