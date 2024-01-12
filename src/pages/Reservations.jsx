import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservationById,
  memoizedSelectAllReservations,
} from '../features/reservations/reservationsSlice';

const Reservations = () => {
  const reservations = useSelector(memoizedSelectAllReservations);

  const dispatch = useDispatch();

  const handleReservationClick = (reservationId) => {
    dispatch(fetchReservationById(reservationId));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">My reservations</h3>
      <div className="grid grid-cols-3 gap-4">
        { reservations.length ? (
          reservations.map((reservation) => (
            <div key={reservation.id} className="item-reservationd">
              <div
                key={`frontend-reservation-${reservation.id}`}
                className="item-reservationd-img"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${reservation.image}`}
                  alt={reservation.car}
                />
              </div>
              <div className="item-reservationd-text-no-line-height">
                <div className="reservation">
                  {/* Wrap the content with a button */}
                  <button
                    type="button"
                    className="no-style"
                    onClick={() => {
                      console.log('Reservation ID:', reservation.id);
                      handleReservationClick(reservation.id);
                    }}
                  >
                    <h4>
                      <Link
                        className="no-style"
                        to={`/reservations/${reservation.id}`}
                      >
                        {reservation?.user}
                      </Link>
                    </h4>
                  </button>
                  <p>{reservation?.car}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="py-3 text-orange-600">Any reservation is done yet</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
