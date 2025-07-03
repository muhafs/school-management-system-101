import AnnouncementCard from './AnnouncementCard'

const announcements = [
	{ title: 'Lorem ipsum dolor sit amet.', date: '2024-06-15', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?' },
	{ title: 'Lorem ipsum dolor sit amet.', date: '2024-06-15', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?' },
	{ title: 'Lorem ipsum dolor sit amet.', date: '2024-06-15', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?' },
]

const Announcement = () => {
	return (
		<div className="bg-white p-4 rounded-md">
			{/* Announcement Header */}
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-semibold">Announcements</h2>
				<span className="text-gray-400 text-xs">View All</span>
			</div>

			{/* Announcement List */}
			<div className="flex flex-col gap-4">
				{announcements.map((announcement, index) => (
					<AnnouncementCard announcement={announcement} key={index} />
				))}
			</div>
		</div>
	)
}

export default Announcement
