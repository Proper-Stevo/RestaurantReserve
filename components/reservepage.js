import React, { useState } from "react";

function Reserve() {
    const [guests, setGuests] = useState("");
    const [names, setNames] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [email, setEmail] = useState("");

    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString();
        let day = currentDate.getDate().toString();
      
        // Add leading zero if month/day is a single digit
        month = month.length === 1 ? `0${month}` : month;
        day = day.length === 1 ? `0${day}` : day;
      
        return `${year}-${month}-${day}`;
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (guests <= 0) {
            alert("Please enter a valid number of guests.");
            return;
        }

        const currentTime = new Date();
        const selectedTime = new Date(`${date}T${time}`);

        if (selectedTime <= currentTime) {
            alert("Please select a future time.");
            return;
        }

        const response = await fetch("/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                guests,
                names,
                date,
                time,
                email,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert(`Reservation confirmed! Your reservation number is ${data.reservationNumber}.`);

            // Clear the form fields after successful submission
            setGuests("");
            setNames("");
            setDate("");
            setTime("");
            setEmail("");
        }
    };

    return (

        <div className='py-32'>
            <div className="text-white text-4xl"><p className="text-center">Make you reservation today!</p>
                <div className='flex-items-center justify-center p-12'>
                    <div className='mx-auto w-full max-w-[550px]'>
                        <div className='mx-3 flex flex-wrap'>

                            <form onSubmit={handleSubmit}>
                                <div className='w-full px-3'>
                                    <div className='mb-5'>
                                        <label className='mb-3 block text-base font-medium text-white'>
                                            Name:
                                            <input type="text"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                value={names}
                                                onChange={(e) => setNames(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full px-3'>
                                    <div className='mb-5'>
                                        <label className='mb-3 block text-base font-medium text-white'>
                                            Time:
                                            <input type="time"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full px-3'>
                                    <div className='mb-5'>
                                        <label className='mb-3 block text-base font-medium text-white'>
                                            Number of guests:
                                            <input type="number"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                value={guests}
                                                onChange={(e) => setGuests(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full px-3'>
                                    <div className='mb-5'>
                                        <label className='mb-3 block text-base font-medium text-white'>
                                            Email:
                                            <input type="email"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full px-3'>
                                    <div className='mb-5'>
                                        <label className='mb-3 block text-base font-medium text-white'>
                                            Date:
                                            <input
                                                type="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                min={getCurrentDate()}
                                            />

                                        </label>
                                        <button
                                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                            type='submit'
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserve;