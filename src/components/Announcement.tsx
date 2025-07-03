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
				<div className="bg-mSkyLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h3 className="font-medium">Lorem ipsum dolor sit amet.</h3>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-06-15</span>
					</div>

					<p className="text-sm text-gray-400 mt-1 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?</p>
				</div>

				<div className="bg-mPurpleLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h3 className="font-medium">Lorem ipsum dolor sit amet.</h3>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-06-15</span>
					</div>

					<p className="text-sm text-gray-400 mt-1 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?</p>
				</div>

				<div className="bg-mYellowLight rounded-md p-4">
					<div className="flex items-center justify-between">
						<h3 className="font-medium">Lorem ipsum dolor sit amet.</h3>
						<span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-06-15</span>
					</div>

					<p className="text-sm text-gray-400 mt-1 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos, consequuntur error fugit magni alias?</p>
				</div>
			</div>
		</div>
	)
}

export default Announcement
