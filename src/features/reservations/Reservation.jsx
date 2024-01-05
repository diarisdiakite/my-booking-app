import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  selectReservationsById, fetchReservationById,
} from './reservationsSlice';

function Reservation() {
  const dispatch = useDispatch();
  const { reservationId } = useParams();

  useEffect(() => {
    dispatch(fetchReservationById(reservationId));
  }, [dispatch, reservationId]);

  const reservation = useSelector((state) => selectReservationsById(state, reservationId));

  console.log('Reservation:', reservation);

  /* if (!reservation) {
    return <div>Loading...</div>;
  }
 */
  // const { name, description, model, website } = reservation || {};

  return (
    <div className="main-container">
      <div className="reservation-reservationd">
        <div className="reservation" key={`reservation-${reservationId}`}>
          <img src={`${process.env.PUBLIC_URL}/${reservation.image}`} alt={reservation.name} />
          <h3>{reservation?.date}</h3>
          <p>{reservation?.car}</p>
          <p>{reservation?.user}</p>
          <p>{reservation?.duration}</p>
          <p>{reservation?.city}</p>
          <p>
            <Link to={reservation?.website} target="_blank" rel="noopener noreferrer">
              {reservation?.website}
            </Link>
          </p>
          <Button
            type="button"
            aria-label="Cancel reservation reservation"
            /* onClick={() => dispatch(cancelReservationReservation())} */
          >
            Cancel Reservation
          </Button>
          <Link to={`/${reservationId}/update`}>
            <Button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 ml-2">
              Update Reservation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
