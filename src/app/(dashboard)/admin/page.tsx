import CountChart from '@/components/Chart/CountChart'
import UserCard from '@/components/UserCard'

const AdminPage = () => {
	return (
		<div className="flex flex-col md:flex-row p-4 gap-4">
			{/* Left */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				{/* User Cards */}
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="students" />
					<UserCard type="teachers" />
					<UserCard type="parents" />
					<UserCard type="staffs" />
				</div>

				{/* Middle Charts */}
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="w-full lg:w-1/3 h-[450px]">
						<CountChart />
					</div>
					<div className="w-full lg:w-2/3 h-[450px]">
						<CountChart />
					</div>
				</div>

				{/* Bottom Charts */}
			</div>

			{/* Right */}
			<div className="w-full lg:w-1/3">right</div>
		</div>
	)
}

export default AdminPage
