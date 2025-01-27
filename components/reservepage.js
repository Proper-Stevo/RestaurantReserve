import { useForm } from 'react-hook-form';

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Reservation confirmed! Number: ${result.reservationNumber}`);
        reset();
      }
    } catch (error) {
      console.error(error);
      alert('Failed to make reservation');
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
      <div className="mb-4">
        <label className="block text-white mb-2">Name:</label>
        <input
          {...register('names', { required: 'Name is required' })}
          className="w-full p-2 rounded"
        />
        {errors.names && <span className="text-red-500">{errors.names.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Number of Guests:</label>
        <input
          type="number"
          {...register('guests', { 
            required: 'Number of guests is required',
            min: { value: 1, message: 'At least 1 guest required' }
          })}
          className="w-full p-2 rounded"
        />
        {errors.guests && <span className="text-red-500">{errors.guests.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Date:</label>
        <input
          type="date"
          {...register('date', { 
            required: 'Date is required',
            min: { value: getCurrentDate(), message: 'Date must be in the future' }
          })}
          className="w-full p-2 rounded"
        />
        {errors.date && <span className="text-red-500">{errors.date.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Time:</label>
        <input
          type="time"
          {...register('time', { required: 'Time is required' })}
          className="w-full p-2 rounded"
        />
        {errors.time && <span className="text-red-500">{errors.time.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Email:</label>
        <input
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full p-2 rounded"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Reservation
      </button>
    </form>
  );
}