import React from 'react'
import Style from './AboutMe.module.css'

const AboutMe = () => {
	const clickHandler = (link) => {);

		window.open(link, '_blank', 'noopener', 'me', 'noreferrer');
	}

	return (
		// <div id="about-me" className="text-on-primary">
		// 	<p>I'm an Android Enterprise Solution Engineer at Google!</p>
		// 	<p>I love bringing innovation to life through my projects and sharing them with others.</p>
		// 	<p>
		// 		<a href="#contacts" className={Style['color-animated']}>Connect with me </a>
		// 		or check out my
		// 		<a href="#cv" onClick={() => clickHandler('https://drive.google.com/file/d/1moPy6O5y4-QvHeFGBvhiVQ8PoMlTFWr-/view?usp=sharing')}
		// 			className={Style['color-animated']}> resume </a>
		// 		if you're interested in working together.
		// 	</p>
		// 	<p>Let's make a change one CPU cycle at the time! :D</p>
		// </div>
		<div className="w-full max-w-sm bg-white border border-secondary rounded-lg text-on-primary">
			<div className="flex justify-end px-4 pt-4">
			</div>
			<div className="flex flex-col items-center pb-10">
				<img
					className="inline-block h-[14em] w-[14em] rounded-full ring-1 ring-secondary "
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt="Antonio Calabrese"
				/>
				<h5 className="mb-1 text-xl font-medium text-secondary">Antonio Calabrese</h5>
				<span className="text-sm">Solution Engineer</span><span>@Google</span>

				<div className='m-5 text-m text-center'>
					<p>I love bringing innovation to life through my projects and sharing them with others.</p>
					<p>
						Connect with me or check out my
						<a href="#cv" onClick={() => clickHandler('https://drive.google.com/file/d/1moPy6O5y4-QvHeFGBvhiVQ8PoMlTFWr-/view?usp=sharing')}
							className={Style['color-animated']}> resume </a>
						if you're interested in working together.
					</p>
					<p>Let's make a change one CPU cycle at the time! :D</p>
				</div>
				<div className="flex mt-4 space-x-3 md:mt-6">
					<a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
					text-secondary border border-secondary rounded-lg hover:bg-secondary 
					focus:ring-4 focus:outline-none focus:ring-gray-200 ">Message</a>
				</div>
			</div>
		</div>
	)

}

export default AboutMe;