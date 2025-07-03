type AnnouncementCardProps = {
	announcement: {
		title: string
		date: string
		description: string
	}
}

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
	return (
		<div className="odd:bg-mPurpleLight even:bg-mSkyLight rounded-md p-4">
			<div className="flex items-center justify-between">
				<h3 className="font-medium">{announcement.title}</h3>
				<span className="text-xs text-gray-400 bg-white rounded-md p-1">{announcement.date}</span>
			</div>

			<p className="text-sm text-gray-400 mt-1 line-clamp-2">{announcement.description}</p>
		</div>
	)
}

export default AnnouncementCard
