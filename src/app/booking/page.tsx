"use client"
import {talents} from "@/Utils/talent";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function Booking() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center">Talent To Book</h1>
      <div className="overflow-x-auto mt-10">
        <input type="text" placeholder="Search"/>
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead className="text-xl">
          <tr>
            <td>Name</td>
            <td>Bid</td>
            <td></td>
          </tr>
          </thead>
          <tbody className="text-xl">
          {talents.map(talent => (
            <tr key={`${talent.name} ${talent.bid}`}>
              <th className="text-xl">{talent.name}</th>
              <td className="text-xl">{talent.bid}</td>
              <td><a className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">Book</a></td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <td>Name</td>
            <td>Bid</td>
            <th></th>
          </tr>
          </tfoot>
        </table>
      </div>
      <Footer />
    </>
  )
}
