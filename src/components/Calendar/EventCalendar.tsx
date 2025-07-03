'use client'

import 'react-calendar/dist/Calendar.css'

import { useState } from 'react'
import Calendar from 'react-calendar'
import Image from 'next/image'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const events = [
	{
		id: 1,
		title: 'Lorem ipsum dolor',
		time: '09:00 - 13:00',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor',
		time: '10:00 - 15:00',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor',
		time: '12:00 - 16:00',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
]

const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date())

	return (
		<div className="bg-white p-4 rounded-md">
			{/* Calendar */}
			<Calendar onChange={onChange} value={value} />

			{/* Events Header */}
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold my-4">Events</h2>
				<Image src="/moreDark.png" alt="More Events" width={20} height={20} />
			</div>

			{/* Events List */}
			<div className="flex flex-col gap-4">
				{events.map((event) => (
					<div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mSky even:border-t-mPurple">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold text-gray-600">{event.title}</h3>
							<span className="text-gray-400 text-xs">{event.time}</span>
						</div>

						<p className="mt-2 text-sm text-gray-500">{event.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default EventCalendar
