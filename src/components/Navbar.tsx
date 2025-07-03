import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4">
			{/* Search Bar */}
			<div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-white/75">
				<Image src="/search.png" alt="Search" width={14} height={14} />
				<input type="text" placeholder="Search..." className="w-[200px] bg-transparent p-2 outline-none" />
			</div>

			{/* Profile Settings */}
			<div className="flex items-center gap-6 justify-end w-full">
				{/* Messages */}
				<div className="flex items-center justify-center cursor-pointer size-7 bg-white rounded-full relative">
					<Image src="/message.png" alt="message icon" width={20} height={20} />
					<span className="absolute size-5 -top-3 -right-3 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs">1</span>
				</div>

				{/* Announcements */}
				<div className="flex items-center justify-center cursor-pointer size-7 bg-white rounded-full relative">
					<Image src="/announcement.png" alt="announcement icon" width={20} height={20} />
					<span className="absolute size-5 -top-3 -right-3 bg-purple-500 text-white flex items-center justify-center rounded-full text-xs">4</span>
				</div>

				{/* Profile */}
				<div className="flex flex-col">
					<span className="leading-3 text-xs font-medium">Super User</span>
					<span className="text-[10px] text-right text-gray-500">Admin</span>
				</div>
				<Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" />
			</div>
		</div>
	)
}

export default Navbar
