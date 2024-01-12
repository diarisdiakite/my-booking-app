import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReservations, fetchReservationById } from './reservationsSlice';
import SideNavbar from '../../components/SideNavbar';
import '../../assets/css/item.css';

function ReservationsListHome() {
  const reservations = useSelector(selectAllReservations);

  const dispatch = useDispatch();

  const handleReservationClick = (reservationId) => {
    dispatch(fetchReservationById(reservationId));
  };

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-[80%] border-r-2 border-slate-200 p-4">
        <h3>Reservations</h3>
        <div className="grid grid-cols-3 gap-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="item-reservationd">
              <div key={`frontend-reservation-${reservation.id}`} className="item-reservationd-img">
                <img src={`${process.env.PUBLIC_URL}/${reservation.image}`} alt={reservation.name} />
              </div>
              <div className="item-reservationd-text-no-line-height">
                <div className="reservation">
                  {/* Wrap the content with a button */}
                  <button
                    type="button"
                    className="no-style"
                    onClick={() => {
                      handleReservationClick(reservation.id);
                    }}
                  >
                    <h4>
                      <Link className="no-style" to={`/reservations/${reservation.id}`}>
                        {reservation?.user}
                      </Link>
                    </h4>
                  </button>
                  <p>{reservation?.car}</p>
                  <div>
                    <p className="bolded">
                      {' finance_fee: '}
                      {reservation?.finance_fee}
                      ,
                      {' option_to_purchase_fee: '}
                      {reservation?.option_to_purchase_fee}
                      ,
                      {' total_amount_payable: '}
                      {reservation?.total_amount_payable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReservationsListHome;
